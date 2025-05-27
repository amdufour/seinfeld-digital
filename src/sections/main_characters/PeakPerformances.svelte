<script>
  import { scaleLinear, scaleRadial } from "d3-scale";
  import HelpIcon from "../../icons/HelpIcon.svelte";
  import { characters } from "$lib/data/characters";
  import { getCharacterImagePath } from "../../utils/getCharacterImagePath";
  import { performances } from "$lib/data/perfomances";
  $inspect(performances);

  const mainChars = $derived(characters.slice(0, 4));

  let containerWidth = $state(1200);

  let chartWidth = $derived(containerWidth - 64 <= 1200 ? containerWidth - 64 - 252 : 1200 - 252);
  let chartHeight = 545;

  const charLaughterRateScale = $derived(
    scaleLinear()
      .domain([0, 1])
      .range([0, chartWidth])
  )
  const charShareLaughScale = $derived(
    scaleLinear()
      .domain([0, 0.7])
      .range([chartHeight, 0])
  )
  const relativeScreenTimeRateScale = scaleRadial()
    .domain([0, 1])
    .range([0, 10])
</script>

<div class="w-screen pb-80">
  <div class="container" bind:clientWidth={containerWidth}>
    <!-- Header -->
    <div class="mb-8">
      <h3>Peak and bottom performances</h3>
      <div style="max-width: 900px;">If we consider the simplistic, but not unreasonable, goal of a sitcom is to cause laughter, the peak performance of a character can be identified as an episode in which they generated a high number of laughs while they were on screen (laughter rate), they were allocated a high proportion of all the laughs in that episode (laughter share), and they were on screen for a long duration (screen-time).
    </div>
    </div>

    <div class="flex">
      <!-- Character Selector -->
      <div class="flex flex-col items-center mr-8">
        <div class="small flex items-center gap-2" style="max-width: 220px;">
          <span class="shrink"><HelpIcon /></span>
          <span class="relative top-1">Select a character to reveal their performances.</span>
        </div>
        <ul class="flex flex-col mt-4">
          {#each mainChars as char}
            <li class="my-2">
              <button class="flex flex-col character-button">
                <div class="character rounded-full bg-contain bg-center opacity-50" 
                     style="background-image: url('{getCharacterImagePath(char.id)}'); width: 75px; height: 75px;"></div>
                <div>{char.label}</div>
              </button>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Scatterplot -->
      <svg width={chartWidth + 32} height={chartHeight + 2}>
        <g transform='translate(30, 1)'>
          <rect
            x={0}
            y={0}
            width={chartWidth}
            height={chartHeight}
            fill="transparent"
            stroke="#12020A"
          />
          <line
            x1={charLaughterRateScale(0.5)}
            y1={0}
            x2={charLaughterRateScale(0.5)}
            y2={chartHeight}
            stroke="#BEBABC"
          />
          <line
            x1={0}
            y1={charShareLaughScale(0.5)}
            x2={chartWidth}
            y2={charShareLaughScale(0.5)}
            stroke="#BEBABC"
          />
          <text class="number" x={charLaughterRateScale(0.5) + 4} y={chartHeight - 4}>50%</text>
          <text class="number" x={4} y={charShareLaughScale(0.5) - 4}>50%</text>

          {#each mainChars as char}
            {#each performances as episode}
              <circle
                cx={charLaughterRateScale(episode.charsBreakdown.find(c => c.id === char.id).laughterRate)}
                cy={charShareLaughScale(episode.charsBreakdown.find(c => c.id === char.id).shareOfLaughs)}
                r={relativeScreenTimeRateScale(episode.charsBreakdown.find(c => c.id === char.id).relativeScreenTime)}
                fill={"#DDDBDC"}
              />
            {/each}
          {/each}
        </g>
      </svg>
    </div>
  </div>
</div>

<style>
  .character {
    transition: opacity 0.3s ease-out;
  }
  .character-button:hover .character {
    opacity: 1;
  }
</style>