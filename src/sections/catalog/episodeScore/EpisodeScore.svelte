<script>
	import Characters from './characters/Characters.svelte';
	import Timeline from './Timeline.svelte';
	import Locations from './locations/Locations.svelte';

	let { width, statsWidth, labelsWidth, scenes, xScale, episodeData } = $props();

	let episodeDuration = $derived(+episodeData[episodeData.length - 1].eventTimeSeconds);
</script>

<div style="width: {width + statsWidth}px">
	<Characters
		{width}
		{statsWidth}
		{labelsWidth}
		{scenes}
		{xScale}
		{episodeData}
		{episodeDuration}
	/>
	<Timeline {labelsWidth} {xScale} {episodeDuration} />
	<Locations {width} {statsWidth} {labelsWidth} {scenes} {xScale} {episodeData} {episodeDuration} />
</div>
