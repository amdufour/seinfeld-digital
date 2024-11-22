<script>
	import SonificationControls from './SonificationControls.svelte';
	import SonificationTrack from './SonificationTrack.svelte';

	let { labelsWidth, scenesWidth, scenes, xScale } = $props();
</script>

<div class="flex h-24 items-center">
	<SonificationControls {labelsWidth} />
	<SonificationTrack {scenesWidth} {scenes} {xScale} />
</div>
