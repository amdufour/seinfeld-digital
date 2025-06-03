<script>
  import { scaleLinear, scaleBand } from 'd3-scale';
  import { max, sum } from 'd3-array';
  import { episodesInfo } from '$lib/data/episodesInfo';
  import { characters } from '$lib/data/characters';
  import { getCharacterImagePath } from '../../utils/getCharacterImagePath';
  import { seasons, totalNumEpisodes } from '$lib/data/seasons';
  import Toggle from './Toggle.svelte';
  import HelpIcon from '../../icons/HelpIcon.svelte';
  import ArrowDown from '../../icons/ArrowDown.svelte';
  import SeasonsStripSingle from '../../UI/SeasonsStripSingle.svelte';

  let { episodesData } = $props();
  $inspect(episodesData)

  const supportingChars = $derived(characters.slice(4, characters.length - 1));
  const activeCharacter = $state("Jerry's family");

  let visualizationsWidth = $state(800);
  const episodesOverviewWidth = 150;
  const marginEnd = 22;
  let episodeDetailsWidth = $derived(visualizationsWidth - episodesOverviewWidth);
  let visualizationsContainerHeight = $state(800);
  let visualizationsHeight = $derived(visualizationsContainerHeight - 50 - 16);

  const margin = { top: 30, right: 100, bottom: 34, left: 14 + 25 };
  let episodeDetailsInnerWidth = $derived(episodeDetailsWidth - margin.left - margin.right);
  let visualizationsInnerHeight = $derived(visualizationsHeight - margin.top - margin.bottom);

  let episodesVerticalScale = $derived(
    scaleBand()
      .domain(episodesInfo.map(d => `${d.season}-${d.episode}`))
      .range([0, visualizationsInnerHeight])
  );
  let episodeMaxDuration = $derived(max(episodesData, d => d.duration) ?? 0);
  let episodeTimeScale = $derived(
    scaleLinear()
        .domain([0, episodeMaxDuration])
        .range([0, episodeDetailsInnerWidth])
  );
  let seasonScale = $derived(
		scaleLinear()
			.domain([0, totalNumEpisodes])
			.range([0, visualizationsInnerHeight])
	);
  let episodeOverviewScale = $derived(
		scaleLinear()
			.domain([0, 1])
			.range([0, episodesOverviewWidth - marginEnd])
	);

  const timeLabels = [0, 5, 10, 15, 20, 25, 30];
  const overviewLabels = [0, 100];

  let charData = $derived.by(() => {
    const breakdown = [];

    episodesData.forEach(episode => {
      const onScreen = [];
      const aggregatedScreenTime = [];
      const causesLaughs = [];
      const aggregatedLaughs = [];

      episode.data.forEach(d => {
        if (d.eventCategory === 'CHARACTERS' && d.eventAttribute.includes(activeCharacter)) {
          onScreen.push(d)
        }

        if (d.eventCategory === 'CAUSES THE LAUGH' && d.eventAttribute.includes(activeCharacter)) {
          causesLaughs.push(d)
        }

      })

      let start
      let currentTime
      onScreen.forEach(d => {
        if (!start && !currentTime) {
          start = +d.eventTimeSeconds
          currentTime = +d.eventTimeSeconds
        } else if (+d.eventTimeSeconds === currentTime + 5) {
          currentTime = +d.eventTimeSeconds
        } else if (+d.eventTimeSeconds > currentTime + 5) {
          aggregatedScreenTime.push({
            start: start,
            duration: currentTime - start + 5
          })
          start = +d.eventTimeSeconds
          currentTime = +d.eventTimeSeconds
        }
      })

      start = undefined
      currentTime = undefined
      causesLaughs.forEach(d => {
        if (!start && !currentTime) {
          start = +d.eventTimeSeconds
          currentTime = +d.eventTimeSeconds
        } else if (+d.eventTimeSeconds === currentTime + 5) {
          currentTime = +d.eventTimeSeconds
        } else if (+d.eventTimeSeconds > currentTime + 5) {
          aggregatedLaughs.push({
            start: start,
            duration: currentTime - start + 5
          })
          start = +d.eventTimeSeconds
          currentTime = +d.eventTimeSeconds
        }
      })

      breakdown.push({
        season: episode.season,
        episode: episode.episode,
        duration: episode.duration,
        onScreen: aggregatedScreenTime,
        causesLaughs: aggregatedLaughs
      })
    })

    return breakdown;
  });
  $inspect('charData', charData)

  let isMouseOver = $state(false);
  let highlightedEpisode = $state('');
  let highlightedEpisodePosition = $state();
  let highlightedEpisodeOverviewPercentage = $state(0);
  const handleOverviewMouseEnter = (episode) => {
    isMouseOver = true;
    highlightedEpisode = `${episode.season}-${episode.episode}`;
    highlightedEpisodeOverviewPercentage = Math.round((episode.onScreen.reduce((acc, value) => acc + value.duration, 0)) / episode.duration * 100);
  }
  const handleTimeMouseOver = (e, episode) => {
    console.log(e)
    highlightedEpisodePosition = e.offsetX;
  }
  const handleOverviewMouseLeave = () => {
    isMouseOver = false;
    highlightedEpisode = '';
  }
</script>

<div class="mt-20 mb-52">
  <div class="container">
    <h3 class="my-8">Screen time vs laughter rate</h3>
    <div class="grid grid-cols-12 md:gap-20">
      <div class="col-span-12 md:col-span-3 flex flex-col items-center">
        <div class="small flex items-center gap-2 mb-6" style="max-width: 320px;">
          <span class="shrink"><HelpIcon color="#E71D80" /></span>
          <span class="relative top-1">Select a character to explore their screen time and laughter rate.</span>
        </div>

        <ul class="grid grid-cols-2 gap-6 flex-wrap">
          {#each supportingChars as char}
            <li class="flex justify-center">
              <button class="character-button flex flex-col items-center max-w-28 {activeCharacter === char.id ? 'active' : ''}">
                <div class="character rounded-full bg-contain bg-center opacity-50" 
                    style="background-image: url('{getCharacterImagePath(char.id)}'); width: 75px; height: 75px;"></div>
                <div class="text-center pt-1" style="font-size: 1.25rem; line-height: 1.2;">{char.label}</div>
              </button>
            </li>
          {/each}
          </ul>
      </div>

      <div class="col-span-12 md:col-span-9" bind:clientHeight={visualizationsContainerHeight}>
        <Toggle />
        <div class="flex" bind:clientWidth={visualizationsWidth}>
          <!-- Episode details -->
          <svg width={visualizationsWidth} height={visualizationsHeight}>
            <!-- Episode details -->
            <g transform="translate(0, {margin.top})">
              <text text-anchor="end" style="transform: translate(10px, 0px) rotate(-90deg); transform-origin: 0 0;" class="small accent">Episodes</text>
              <g transform="translate(3, 64)">
                <ArrowDown />
              </g>
              <g transform="translate(14, 0)">
                <SeasonsStripSingle height={visualizationsInnerHeight} />
              </g>
            </g>

            <!-- Season separators -->
            <g transform="translate({margin.left}, {margin.top})">
              {#each seasons as season, i}
                {#if i < seasons.length - 1}
                  <line
                    x1={0}
                    y1={seasonScale(sum(seasons.slice(0, i), (d) => d.numEpisodes)) + seasonScale(season.numEpisodes)}
                    x2={visualizationsWidth - margin.left}
                    y2={seasonScale(sum(seasons.slice(0, i), (d) => d.numEpisodes)) + seasonScale(season.numEpisodes)}
                    stroke="#928D90"
                  />
                {/if}
              {/each}
            </g>

            <g transform="translate({margin.left}, {margin.top})">
              <!-- Time labels -->
              {#each timeLabels as timeLabel}
                <g transform="translate({episodeTimeScale(timeLabel * 60)}, 0)">
                  <line
                    x1={0}
                    y1={-12}
                    x2={0}
                    y2={visualizationsInnerHeight + 12}
                    stroke="#928D90"
                  />
                  <g class="number" fill="#928D90" text-anchor="middle">
                    <text
                      x={0}
                      y={-18}
                    >
                      {`${timeLabel === 0 || timeLabel === 5 ? '0' : ''}${timeLabel}:00`}
                    </text>
                    <text
                      x={0}
                      y={visualizationsInnerHeight + 16}
                      dominant-baseline="hanging"
                    >
                      {`${timeLabel === 0 || timeLabel === 5 ? '0' : ''}${timeLabel}:00`}
                    </text>
                  </g>
                </g>
              {/each}

              {#each charData as d}
                <g transform="translate(0, {episodesVerticalScale(`${d.season}-${d.episode}`)})">
                  <!-- Episode durations -->
                  <rect
                    x={0}
                    y={0}
                    width={episodeTimeScale(d.duration)}
                    height={episodesVerticalScale.bandwidth()}
                    fill="#DDDBDC"
                    fill-opacity={(isMouseOver && highlightedEpisode === `${d.season}-${d.episode}`) || !isMouseOver ? 1 : 0.1}
                    role="document"
                    onmouseenter={() => handleOverviewMouseEnter(d)}
                    onmouseleave={() => handleOverviewMouseLeave()}
                    onmouseover={(e) => handleTimeMouseOver(e, d)}
                    onfocus={(e) => handleTimeMouseOver(e, d)}
                  />

                  <!-- Screen time -->
                  {#each d.onScreen as screenMoment}
                    <rect
                      class="pointer-events-none"
                      x={episodeTimeScale(screenMoment.start)}
                      y={0}
                      width={episodeTimeScale(screenMoment.duration)}
                      height={episodesVerticalScale.bandwidth()}
                      fill={characters.find(char => char.id === activeCharacter)?.color}
                      fill-opacity={(isMouseOver && highlightedEpisode === `${d.season}-${d.episode}`) || !isMouseOver ? 1 : 0.1}
                    />
                  {/each}
                </g>
              {/each}

              <!-- Time tooltip -->
              {#if isMouseOver}
                <g transform="translate({highlightedEpisodePosition - margin.left}, 0)">
                  <line
                    x1={0}
                    y1={-12}
                    x2={0}
                    y2={visualizationsInnerHeight + 12}
                    stroke="#12020A"
                    stroke-width={2}
                  />
                  <g class="number" fill="#12020A" text-anchor="middle">
                    <text
                      x={0}
                      y={-18}
                    >
                      {`${highlightedEpisodeOverviewPercentage}%`}
                    </text>
                    <text
                      x={0}
                      y={visualizationsInnerHeight + 16}
                      dominant-baseline="hanging"
                    >
                      {`${highlightedEpisodeOverviewPercentage}%`}
                    </text>
                  </g>
                </g>
              {/if}
            </g>

            <!-- Episode overviews -->
            <g transform="translate({visualizationsWidth - episodesOverviewWidth}, {margin.top})">
              <rect
                x={0}
                y={0}
                width={episodesOverviewWidth - marginEnd}
                height={visualizationsInnerHeight}
                fill="#DDDBDC"
              />
              <!-- Vertical Axes -->
              {#each overviewLabels as overviewLabel}
                <g transform="translate({episodeOverviewScale(overviewLabel / 100)}, 0)">
                  <line
                    x1={0}
                    y1={-12}
                    x2={0}
                    y2={visualizationsInnerHeight + 12}
                    stroke="#928D90"
                  />
                  <g class="number" fill="#928D90" text-anchor="middle" fill-opacity={isMouseOver ? 0 : 1}>
                    <text
                      x={0}
                      y={-18}
                    >
                      {`${overviewLabel}%`}
                    </text>
                    <text
                      x={0}
                      y={visualizationsInnerHeight + 16}
                      dominant-baseline="hanging"
                    >
                      {`${overviewLabel}%`}
                    </text>
                  </g>
                </g>
              {/each}

              {#each charData as d}
                <g transform="translate(0, {episodesVerticalScale(`${d.season}-${d.episode}`)})">
                  <!-- Screen time -->
                  {#if episodeOverviewScale((d.onScreen.length * 5) / d.duration)}
                    <rect
                      x={0}
                      y={0}
                      width={episodeOverviewScale((d.onScreen.reduce((acc, value) => acc + value.duration, 0)) / d.duration)}
                      height={episodesVerticalScale.bandwidth()}
                      fill={characters.find(char => char.id === activeCharacter)?.color}
                      fill-opacity={(isMouseOver && highlightedEpisode === `${d.season}-${d.episode}`) || !isMouseOver ? 1 : 0.3}
                      role="document"
                      onmouseenter={() => handleOverviewMouseEnter(d)}
                      onmouseleave={() => handleOverviewMouseLeave()}
                    />
                  {/if}
                </g>
              {/each}

              <!-- Overview tooltip -->
              {#if isMouseOver}
                <g transform="translate({episodeOverviewScale(highlightedEpisodeOverviewPercentage / 100)}, 0)">
                  <line
                    x1={0}
                    y1={-12}
                    x2={0}
                    y2={visualizationsInnerHeight + 12}
                    stroke="#12020A"
                    stroke-width={2}
                  />
                  <g class="number" fill="#12020A" text-anchor="middle">
                    <text
                      x={0}
                      y={-18}
                    >
                      {`${highlightedEpisodeOverviewPercentage}%`}
                    </text>
                    <text
                      x={0}
                      y={visualizationsInnerHeight + 16}
                      dominant-baseline="hanging"
                    >
                      {`${highlightedEpisodeOverviewPercentage}%`}
                    </text>
                  </g>
                </g>
              {/if}
            </g>
          </svg>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .character {
    transition: opacity 0.3s ease-out;
  }
  .character-button:hover .character,
  .character-button.active .character {
    opacity: 1;
  }
  .character-button.active .character {
    cursor: default;
  }
  rect {
    transition: fill-opacity 0.2s ease-out;
  }
</style>