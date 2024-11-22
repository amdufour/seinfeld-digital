<script>
	import Characters from './Characters.svelte';

	let { width, episodeData } = $props();
</script>

<div style="width: {width}px">
	<Characters {width} {episodeData} />
</div>
