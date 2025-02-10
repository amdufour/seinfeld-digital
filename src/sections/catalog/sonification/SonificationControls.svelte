<script>
	import PlayIcon from '../../../icons/PlayIcon.svelte';
	import StopIcon from '../../../icons/StopIcon.svelte';
	import BackwardIcon from '../../../icons/BackwardIcon.svelte';
	import ForwardIcon from '../../../icons/ForwardIcon.svelte';
	import { soundIsAuth } from '../../../stores/soundAuthStore';

	let { scenesWidth, isPlaying, playingScene, numScenes, play, stop } = $props();
</script>

<div class="relative" style="width: {scenesWidth}px; margin-top: -4px;">
	<div
		class="small absolute left-0"
		style="line-height: 24px; color: {$soundIsAuth ? '#E71D80' : '#BEBABC'};"
	>
		Listen to this episode's data
	</div>
	<div class="mr-8 mt-2 flex justify-center">
		<button class="mx-1 h-6 w-6" disabled={!isPlaying || !$soundIsAuth || playingScene <= 1}
			><BackwardIcon
				color={isPlaying && $soundIsAuth && playingScene > 1 ? '#E71D80' : '#BEBABC'}
			/></button
		>
		{#if isPlaying}
			<button class="mx-1 h-6 w-6" onclick={stop}><StopIcon color="#E71D80" /></button>
		{:else}
			<button class="mx-1 h-6 w-6" onclick={play} disabled={!$soundIsAuth}
				><PlayIcon color={$soundIsAuth ? '#E71D80' : '#BEBABC'} /></button
			>
		{/if}
		<button class="mx-1 h-6 w-6" disabled={!isPlaying || !$soundIsAuth || playingScene == numScenes}
			><ForwardIcon
				color={isPlaying && $soundIsAuth && playingScene < numScenes ? '#E71D80' : '#BEBABC'}
			/></button
		>
	</div>
</div>
