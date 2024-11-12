<script>
  import { scaleLinear } from "d3-scale"
  import { max } from "d3-array"
  import { seasons } from "../../data/seasons";

  /**
	 * @type {number}
	 */
  $: innerWidth = 0
  const gridContainer = 1280;
  const padding = 30;

  /**
	 * @type {number}
	 */
  $: svgWidth = innerWidth >= gridContainer
    ? gridContainer + (innerWidth - gridContainer) / 2
    : innerWidth - 2 * padding

  /**
	 * @type {number}
	 */
  $: marginLeft = innerWidth >= gridContainer
    ? (innerWidth - gridContainer) / 2
    : padding

 $: seasonScale = scaleLinear()
    .domain([0, max(seasons, (/** @type {{ numEpisodes: any; }} */ d) => d.numEpisodes)])
    .range([0, svgWidth])
</script>

<svelte:window bind:innerWidth />

<div style="margin-left: -{marginLeft}px">
  <svg width={svgWidth} height="132">
    {#each seasons as season, i}
      <rect x={0} y={i * 15} width={seasonScale(season.numEpisodes)} height={12} fill={season.color} />
    {/each}
  </svg>
</div>