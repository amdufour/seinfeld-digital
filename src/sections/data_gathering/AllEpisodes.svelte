<script lang="ts">
    import { inview } from 'svelte-inview';
    import { scaleBand, scaleLinear } from 'd3-scale';
    import { episodesInfo } from '$lib/data/episodesInfo';
    import EpisodeBars from '../Laughs/EpisodeBars.svelte';
    import LaughRate from '../Laughs/LaughRate.svelte';
    import type { Episode } from '$lib/types/episode';
    import EpisodeTooltip from '../../UI/EpisodeTooltip.svelte';

    let { episodesData, reduceStripHeight = $bindable(), stripHeight } = $props();

    let innerWidth = $state(1600);
    let innerHeight = $state(800);
    let topMargin = $derived((innerHeight - stripHeight) / 2);
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
</script>

<svelte:window bind:innerWidth />

<div class="h-screen flex relative" use:inview={{}} oninview_enter={() => reduceStripHeight('in')} oninview_leave={() => reduceStripHeight('out')} style="width: calc(100vw - 25);">
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


    <!-- Tooltip -->
	{#if isTooltipVisible && innerWidth >= 793}
		<EpisodeTooltip episode={hoveredEpisode} position={mousePosition} />
	{/if}
</div>