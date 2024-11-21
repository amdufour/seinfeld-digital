<script>
	import EpisodeScore from './episodeScore/EpisodeScore.svelte';
	import EpisodeStats from './EpisodeStats.svelte';

	const { episodeData } = $props();

	let innerWidth = $state(0);
	let innerHeight = $state(0);
	const statsWidth = 200;
	let vizWidth = $derived(innerWidth - statsWidth - 25 - 20);
	let vizHeight = $derived(innerHeight - 220 - 80 - 25);
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div class="flex">
	<EpisodeScore width={vizWidth} {episodeData} />
	<EpisodeStats width={statsWidth} />
</div>
