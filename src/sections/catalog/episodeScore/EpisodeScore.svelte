<script>
	import Characters from './Characters.svelte';
	import Timeline from './Timeline.svelte';

	let { width, labelsWidth, scenes, xScale, episodeData } = $props();

	let episodeDuration = $derived(+episodeData[episodeData.length - 1].eventTimeSeconds);
</script>

<div style="width: {width}px">
	<Characters {width} {labelsWidth} {scenes} {xScale} {episodeData} />
	<Timeline {labelsWidth} {xScale} {episodeDuration} />
</div>
