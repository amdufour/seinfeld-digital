<script>
  import { scaleLinear, scalePoint } from "d3-scale";
  import { line, area } from "d3-shape"
  import { mean } from "d3-array";
	import { seasons } from "$lib/data/seasons";
  import { getCharacterImagePath } from "../../utils/getCharacterImagePath";

  let { charData, isScreenTime = true, showLabels = false, showCharBadge = false, charId } = $props()

  const width = 160
  const height = 180
  const margin = { top: 10, right: 10, bottom: 10, left: 46 }
  const innerWidth = width - margin.left - margin.right
  const innerHeight = height - margin.top - margin.bottom

  const yAxisLabels = isScreenTime ? [0, 0.5, 1] : [0, 0.5]

  const percentageScale = scaleLinear()
    .domain([0, isScreenTime ? 1 : 0.5])
    .range([isScreenTime ? innerHeight : innerHeight / 2, 0])
  const seasonsScale = scalePoint()
    .domain(seasons.map(s => `season-${s.seasonNum}`))
    .range([0, innerWidth])

  const lineGenerator = line()
    .x(d => seasonsScale(`season-${d.season}`))
    .y(d => percentageScale(isScreenTime ? d.onScreen : d.laughShare))
  const areaGenerator = area()
    .x(d => seasonsScale(`season-${d.season}`))
    .y1(d => percentageScale(isScreenTime ? d.onScreen : d.laughShare))
    .y0(percentageScale(0))

  const averagePerSeason = []
  seasons.forEach(s => {
    const episodes = charData.filter(d => d.season === s.seasonNum)

    const onScreenTimePerEpisode = episodes.map(e => e.onScreen.length * 5 / e.duration)
    const avgOnScreenTime = mean(onScreenTimePerEpisode)

    const laughsSharePerEpisode = episodes.map(e => e.causesLaughs.length / e.episodeLaughs.length)
    const avgLaughShare = mean(laughsSharePerEpisode)

    averagePerSeason.push({
      season: s.seasonNum,
      onScreen: avgOnScreenTime,
      laughShare: avgLaughShare
    })
  })
</script>

<div class="flex flex-col items-center" style="margin-left: {showLabels ? 0 : -46}px;">
  <svg width={width} height={isScreenTime ? height : (innerHeight / 2) + margin.top + margin.bottom}>
    <defs>
      <!-- White gradient -->
      <linearGradient id="gradient-white" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stop-color="#F9F5F7" stop-opacity={0.4} />
        <stop offset="100%" stop-color="#F9F5F7" stop-opacity={0} />
      </linearGradient>
      <!-- Seasons gradient -->
      <linearGradient id="gradient-seasons">
        <stop offset="0%" stop-color="#FDE824" />
        <stop offset="12.5%" stop-color="#B8CE32" />
        <stop offset="25%" stop-color="#7DBA57" />
        <stop offset="37.5%" stop-color="#4CB278" />
        <stop offset="50%" stop-color="#1DA388" />
        <stop offset="62.5%" stop-color="#228A8D" />
        <stop offset="75%" stop-color="#2F708E" />
        <stop offset="87.5%" stop-color="#39578D" />
        <stop offset="100%" stop-color="#453782" />
      </linearGradient>
    </defs>

    <g transform="translate({margin.left}, {margin.top})">
      {#if showLabels}
        {#each yAxisLabels as label, i}
          <text
            class="number"
            x={-8}
            y={percentageScale(label)}
            fill="#F9F5F7"
            text-anchor="end"
            dominant-baseline="middle"
          >
            {`${label * 100}${i > 0 ? '%' : ''}`}
          </text>
        {/each}
      {/if}

      <path 
        d={areaGenerator(averagePerSeason)} 
        fill="url(#gradient-white)"
      />
      <path 
        d={lineGenerator(averagePerSeason)} 
        stroke="url(#gradient-seasons)" 
        stroke-width={4} 
        stroke-linecap="round" 
      />
    </g>
  </svg>
  {#if showCharBadge}
    <div 
      class="character rounded-full bg-contain bg-center" 
      style="background-image: url('{getCharacterImagePath(charId)}'); width: 30px; height: 30px; margin-left: {46 - 15}px;"></div>
  {/if}
</div>