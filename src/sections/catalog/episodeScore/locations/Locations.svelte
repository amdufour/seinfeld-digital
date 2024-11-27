<script>
	// @ts-nocheck

	import { scaleBand } from 'd3-scale';
	import { locations } from '../../../../data/locations';
	import Scenes from '../Scenes.svelte';
	import LocationsList from './LocationsList.svelte';
	import LocationsOnScreen from './LocationsOnScreen.svelte';

	let { width, labelsWidth, xScale, scenes, episodeData } = $props();

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

	const vizHeight = $derived(locationsOnScreen.length * 48 + 32);

	const yScale = $derived(
		scaleBand()
			.domain(locationsOnScreen.map((char) => char.id))
			.range([0, vizHeight - 32])
			.padding(0.6)
	);
</script>

<div class="flex">
	<LocationsList {labelsWidth} locations={locationsOnScreen} {yScale} />
	<svg {width} height={vizHeight}>
		<Scenes {scenes} {xScale} height={vizHeight} isNumbersUp={false} />
		<LocationsOnScreen locations={locationsOnScreen} {xScale} {yScale} />
	</svg>
</div>
