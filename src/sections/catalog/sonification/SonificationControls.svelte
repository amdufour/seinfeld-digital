<script>
	import PlayIcon from '../../../icons/PlayIcon.svelte';
	import PauseIcon from '../../../icons/PauseIcon.svelte';
	import RestartIcon from '../../../icons/RestartIcon.svelte';
	let { labelsWidth, play } = $props();

	let isPlaying = $state(false);

	const handlePlay = () => {
		isPlaying = true;
		play();
	};
</script>

<div class="flex shrink-0 flex-col items-end pr-4" style="width: {labelsWidth}px;">
	<div class="small accent max-w-28">Play this episode's data</div>
	<div class="mr-8 mt-2 flex">
		{#if isPlaying}
			<button class="mx-1 h-6 w-6"><PauseIcon color="#E71D80" /></button>
		{:else}
			<button class="mx-1 h-6 w-6" onclick={handlePlay}><PlayIcon color="#E71D80" /></button>
		{/if}
		<button class="mx-1 h-6 w-6" disabled><RestartIcon color="#BEBABC" /></button>
	</div>
</div>
