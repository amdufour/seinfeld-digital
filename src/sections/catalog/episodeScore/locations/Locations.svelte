<script>
	// @ts-nocheck

	import { scaleBand } from 'd3-scale';
	import { locations } from '../../../../data/locations';
	import Scenes from '../Scenes.svelte';
	import LocationsList from './LocationsList.svelte';

	let { width, labelsWidth, xScale, scenes, episodeData } = $props();

	const locationsOnScreen = $derived.by(() => {
		const data = episodeData.filter((e) => e.eventCategory === 'LOCATION');
		const locationsArray = locations.map((c) => {
			return { id: c.id, label: c.label, timesOnScreen: [] };
		});
		data.forEach((d) => {
			locationsArray.find((c) => c.id === d.eventAttribute).timesOnScreen.push(+d.eventTimeSeconds);
		});

		const locationsOnScreen = locationsArray.filter((c) => c.timesOnScreen.length > 0);

		return locationsOnScreen;
	});

	const vizHeight = $derived(locationsOnScreen.length * 48 + 32);

	const yScale = $derived(
		scaleBand()
			.domain(locationsOnScreen.map((char) => char.id))
			.range([32, vizHeight])
			.padding(0.6)
	);
</script>

<div class="flex">
	<LocationsList {labelsWidth} locations={locationsOnScreen} {yScale} />
	<svg {width} height={vizHeight}>
		<Scenes {scenes} {xScale} height={vizHeight} />
	</svg>
</div>
