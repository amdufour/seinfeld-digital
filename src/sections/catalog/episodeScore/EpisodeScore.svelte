<script>
	import Characters from './Characters.svelte';

	let { width, labelsWidth, scenes, xScale } = $props();
</script>

<div style="width: {width}px">
	<Characters {width} {labelsWidth} {scenes} {xScale} />
</div>
