<script>
	import PlayIcon from '../../../icons/PlayIcon.svelte';
	import StopIcon from '../../../icons/StopIcon.svelte';
	import BackwardIcon from '../../../icons/BackwardIcon.svelte';
	import ForwardIcon from '../../../icons/ForwardIcon.svelte';

	let { scenesWidth, play } = $props();

	let isPlaying = $state(false);

	const handlePlay = () => {
		isPlaying = true;
		play();
	};
</script>

<div class="relative" style="width: {scenesWidth}px; margin-top: -4px;">
	<div class="small accent absolute left-0" style="line-height: 24px;">
		Listen to this episode's data
	</div>
	<div class="mr-8 mt-2 flex justify-center">
		<button class="mx-1 h-6 w-6" disabled><BackwardIcon color="#BEBABC" /></button>
		{#if isPlaying}
			<button class="mx-1 h-6 w-6"><StopIcon color="#E71D80" /></button>
		{:else}
			<button class="mx-1 h-6 w-6" onclick={handlePlay}><PlayIcon color="#E71D80" /></button>
		{/if}
		<button class="mx-1 h-6 w-6" disabled><ForwardIcon color="#BEBABC" /></button>
	</div>
</div>
