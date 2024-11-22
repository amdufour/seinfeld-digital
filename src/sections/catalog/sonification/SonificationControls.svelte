<script>
	import PlayIcon from '../../../icons/PlayIcon.svelte';
	import PauseIcon from '../../../icons/PauseIcon.svelte';
	import RestartIcon from '../../../icons/RestartIcon.svelte';
	let { labelsWidth } = $props();
</script>

<div class="flex shrink-0 flex-col items-end pr-4" style="width: {labelsWidth}px;">
	<div class="small accent max-w-28">Play this episode's data</div>
	<div class="mr-4 mt-2 flex">
		<button class="mx-1 h-6 w-6"><PlayIcon color="#E71D80" /></button>
		<button class="mx-1 h-6 w-6" disabled><PauseIcon color="#BEBABC" /></button>
		<button class="mx-1 h-6 w-6" disabled><RestartIcon color="#BEBABC" /></button>
	</div>
</div>
