<script lang="ts">
	import { onMount } from 'svelte';
    import { scaleBand, scaleLinear } from 'd3-scale';
    import { episodesInfo } from '$lib/data/episodesInfo';
    import EpisodeBars from '../Laughs/EpisodeBars.svelte';
    import LaughRate from '../Laughs/LaughRate.svelte';
    import ImDbRating from '../Laughs/IMDbRating.svelte';
    import type { Episode } from '$lib/types/episode';
    import EpisodeTooltip from '../../UI/EpisodeTooltip.svelte';
    import AllEpisodesTexts from './AllEpisodesTexts.svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger);

    let { episodesData, stripHeight } = $props();

    let innerWidth = $state(1600);
    let innerHeight = $state(800);
    let topMargin = $derived((innerHeight - (innerHeight - 100)) / 2);
    let smallChartWidth = $derived(innerWidth / 10);

    let episodeVerticalPositionScale = $derived(
        scaleBand()
            .domain(episodesInfo.map(d => `${d.season}-${d.episode}`))
            .range([0, stripHeight])
    );
    let percentageScale = $derived(
        scaleLinear()
            .domain([0, 1])
            .range([0, smallChartWidth])
    );


    let isTooltipVisible = $state(false);
	let hoveredEpisode = $state();
	let mousePosition = $state();
	function handleMouseEnter(
		e: MouseEvent & { currentTarget: EventTarget & SVGRectElement; },
		episode: Episode
	) {
		mousePosition = [e.clientX, e.clientY];
		isTooltipVisible = true;    
		hoveredEpisode = episodesInfo.find(
            (e) => e.season === episode.season && e.episode === episode.episode
        );
	};
	function handleMouseLeave() {
		isTooltipVisible = false;
	};

    onMount(() => {
		// Pin vsualizations
		ScrollTrigger.create({
			trigger: '#all-episodes',
			start: 'top top',
			end: 'bottom bottom',
			pin: '#all-episodes-visualizations'
		});
	});
</script>

<svelte:window bind:innerWidth />

<div id="all-episodes" class="relative mt-60" style="width: calc(100vw - 25);">
    <div id="all-episodes-visualizations" class="h-screen flex absolute top-0 left-0" style="width: calc(100vw - 25);">
        <EpisodeBars 
            {episodesData} 
            barsHeight={stripHeight} 
            width={ 2 * innerWidth / 3 - 25} 
            {topMargin} 
            {episodeVerticalPositionScale}
            bind:handleMouseEnter
            bind:handleMouseLeave />
        <LaughRate 
            {episodesData} 
            barsHeight={stripHeight} 
            width={smallChartWidth} 
            {topMargin} 
            {episodeVerticalPositionScale} 
            {percentageScale}
            bind:handleMouseEnter
            bind:handleMouseLeave />
        <ImDbRating
            {episodesData} 
            barsHeight={stripHeight} 
            width={smallChartWidth} 
            {topMargin} 
            {episodeVerticalPositionScale} 
            {percentageScale}
            bind:handleMouseEnter
            bind:handleMouseLeave />
    </div>

    <!-- Scrolling Texts -->
	<div class="z-10 relative" style="pointer-events: none">
		<AllEpisodesTexts />
	</div>


    <!-- Tooltip -->
	{#if isTooltipVisible && innerWidth >= 793}
        <div class="absolute z-20" style="pointer-events: none">
		    <EpisodeTooltip episode={hoveredEpisode} position={mousePosition} />
        </div>
	{/if}
</div>