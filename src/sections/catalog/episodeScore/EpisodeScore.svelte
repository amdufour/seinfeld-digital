<script>
	import Characters from './Characters.svelte';

	let { width, labelsWidth, scenes, xScale, episodeData } = $props();
</script>

<div style="width: {width}px">
	<Characters {width} {labelsWidth} {scenes} {xScale} {episodeData} />
</div>
