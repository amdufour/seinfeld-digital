<script>
  import { scaleLinear, scalePoint } from "d3-scale";
  import { line, area } from "d3-shape"
  import { mean } from "d3-array";
	import { seasons } from "$lib/data/seasons";

  let { charData } = $props()
  $inspect('charData', charData)

  const width = 160
  const height = 180
  const margin = { top: 10, right: 10, bottom: 10, left: 46 }
  const innerWidth = width - margin.left - margin.right
  const innerHeight = height - margin.top - margin.bottom

  const chartTitle = 'Average screen-time per season'
  const yAxisLabels = [0, 1]

  const percentageScale = scaleLinear()
    .domain([0, 1])
    .range([innerHeight, 0])
  const seasonsScale = scalePoint()
    .domain(seasons.map(s => `season-${s.seasonNum}`))
    .range([0, innerWidth])

  const lineGenerator = line()
    .x(d => seasonsScale(`season-${d.season}`))
    .y(d => percentageScale(d.onScreen))
  const areaGenerator = area()
    .x(d => seasonsScale(`season-${d.season}`))
    .y0(percentageScale(0))
    .y1(d => percentageScale(d.onScreen))

  const averagePerSeason = []
  seasons.forEach(s => {
    const episodes = charData.filter(d => d.season === s.seasonNum)
    const onScreenTimePerEpisode = episodes.map(e => e.onScreen.length * 5 / e.duration)
    const avgOnScreenTime = mean(onScreenTimePerEpisode)

    averagePerSeason.push({
      season: s.seasonNum,
      onScreen: avgOnScreenTime
    })
  })
  $inspect(averagePerSeason)
</script>

<div class="small mb-2">{chartTitle}</div>
<svg width={width} height={height}>
  <defs>
    <!-- White gradient -->
     <linearGradient id="gradient-white" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="#F9F5F7" stop-opacity={1} />
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
    {#each yAxisLabels as label, i}
      <text
        class="number"
        x={-8}
        y={percentageScale(label)}
        fill="#F9F5F7"
        text-anchor="end"
        dominant-baseline="middle"
      >
        {`${label * 100}${i === 1 ? '%' : ''}`}
      </text>
    {/each}

    <path 
      d={areaGenerator(averagePerSeason)} 
      fill="url(#gradient-white)"
    />
    <path 
      d={lineGenerator(averagePerSeason)} 
      stroke="url(#gradient-seasons)" 
      stroke-width={5} 
      stroke-linecap="round" 
    />
  </g>
</svg>