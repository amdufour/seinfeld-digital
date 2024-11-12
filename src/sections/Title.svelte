<script>
  import { onMount } from 'svelte';
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";  
  gsap.registerPlugin(ScrollTrigger);
  import { scaleLinear } from "d3-scale"
  import { max } from "d3-array"

  import { seasons } from "../data/seasons";

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

  onMount(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
          trigger: '#title-screen',
          start: 'top 20%',
          end: 'bottom+=40% center',
          toggleActions: 'play reverse play reverse'
      }
    })
    tl.from('.season-rect', {
        width: 0,
        height: 0,
        duration: 2,
        ease: 'power3.out',
        stagger: 0.15
      })
	});
</script>

<svelte:window bind:innerWidth />

<section id="title-screen" class="bg-black text-white h-screen">
  <div class="max-w-screen-xl mx-auto h-full">
    <div style="margin-left: -{marginLeft}px">
      <svg width={svgWidth} height="132">
        {#each seasons as season, i}
          <rect class="season-rect" x={0} y={i * 15} width={seasonScale(season.numEpisodes)} height={12} fill={season.color} />
        {/each}
      </svg>
    </div>
    <h1>The Seinfield Chronicles</h1>
    <p class="subtitle max-w-4xl">An unnecessary data exploration by <span>Andy Kirk</span>, Anne-Marie Dufour, and Loud Numbers</p>
  </div>
</section>

<style>
  section {
    padding-top: 100px
  }
  .subtitle {
    font-size: 2.1rem;
  }
</style>