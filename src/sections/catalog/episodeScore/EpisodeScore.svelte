<script>
	import Characters from './characters/Characters.svelte';
	import Timeline from './Timeline.svelte';
	import Locations from './locations/Locations.svelte';

	let { width, labelsWidth, scenes, xScale, episodeData } = $props();

	let episodeDuration = $derived(+episodeData[episodeData.length - 1].eventTimeSeconds);
</script>

<div style="width: {width}px">
	<Characters {width} {labelsWidth} {scenes} {xScale} {episodeData} />
	<Timeline {labelsWidth} {xScale} {episodeDuration} />
	<Locations {width} {labelsWidth} {scenes} {xScale} {episodeData} />
</div>
