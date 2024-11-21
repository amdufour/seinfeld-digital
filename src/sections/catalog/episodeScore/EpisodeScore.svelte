<script>
	import Characters from './Characters.svelte';

	let { width, episodeData } = $props();
	console.log('episodeData', episodeData);
</script>

<div style="width: {width}px">
	<Characters />
</div>
