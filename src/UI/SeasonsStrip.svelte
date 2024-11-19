<script>
  import { scaleLinear } from 'd3-scale';
  import { sum } from 'd3-array';
  import { seasons, totalNumEpisodes } from '../data/seasons';

  /**
	 * @type {number}
	 */
  const width = 25
   $: innerHeight = 0;

  let seasonScale
  $: seasonScale = scaleLinear()
    .domain([0, totalNumEpisodes])
    .range([0, innerHeight]);
</script>

<svelte:window bind:innerHeight />

<div class="seasons-strip">
  <svg width={width} height={innerHeight}>
    {#each seasons as season, i}
      <rect
        x={0} 
        y={seasonScale(sum(seasons.slice(0, i), d => d.numEpisodes))} 
        width={25} 
        height={seasonScale(season.numEpisodes)} 
        fill={season.color} 
      />
    {/each}
  </svg>
</div>

<style>
  .seasons-strip {
    width: 25px;
    height: 100vh;
  }
</style>