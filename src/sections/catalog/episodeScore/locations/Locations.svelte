<script>
	// @ts-nocheck

	import { scaleBand } from 'd3-scale';
	import { locations } from '../../../../data/locations';
	import Scenes from '../Scenes.svelte';
	import LocationsList from './LocationsList.svelte';
	import LocationsOnScreen from './LocationsOnScreen.svelte';
	import LocationsStats from './LocationsStats.svelte';

	let {
		width,
		statsWidth,
		labelsWidth,
		xScale,
		scenes,
		episodeData,
		episodeDuration,
		isHover,
		hoveredPosition,
		hoveredTime
	} = $props();

	const locationsData = $derived(episodeData.filter((e) => e.eventCategory === 'LOCATION'));
	const locationsOnScreen = $derived.by(() => {
		const locationsArray = locations.map((c) => {
			return { id: c.id, label: c.label, timesOnScreen: [] };
		});
		locationsData.forEach((d) => {
			locationsArray.find((c) => c.id === d.eventAttribute).timesOnScreen.push(+d.eventTimeSeconds);
		});

		const locationsOnScreen = locationsArray.filter((c) => c.timesOnScreen.length > 0);

		return locationsOnScreen;
	});

	const hoveredLocations = $derived.by(() => {
		const time = Math.floor(hoveredTime / 5) * 5;
		const hoveredLocationsArray = [];

		locationsOnScreen.forEach((location) => {
			if (location.timesOnScreen && location.timesOnScreen.includes(time)) {
				hoveredLocationsArray.push(location.id);
			}
		});

		return hoveredLocationsArray;
	});

	const vizHeight = $derived(locationsOnScreen.length * 48 + 32);

	const yScale = $derived(
		scaleBand()
			.domain(locationsOnScreen.map((char) => char.id))
			.range([0, vizHeight - 32])
			.padding(0.6)
	);
</script>

<div class="flex">
	<LocationsList
		{labelsWidth}
		locations={locationsOnScreen}
		{yScale}
		{isHover}
		{hoveredLocations}
	/>
	<svg {width} height={vizHeight}>
		<Scenes {scenes} {xScale} height={vizHeight} isNumbersUp={false} {isHover} {hoveredTime} />
		<LocationsOnScreen locations={locationsOnScreen} {xScale} {yScale} {isHover} {hoveredTime} />
		{#if isHover}
			<line x1={hoveredPosition} y1={0} x2={hoveredPosition} y2={vizHeight} stroke="#12020A" />
		{/if}
	</svg>
	<LocationsStats
		width={statsWidth}
		height={vizHeight}
		{yScale}
		{locationsOnScreen}
		{episodeDuration}
	/>
</div>
