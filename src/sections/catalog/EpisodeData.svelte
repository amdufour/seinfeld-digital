<script>
	import EpisodeScore from './episodeScore/EpisodeScore.svelte';
	import EpisodeStats from './EpisodeStats.svelte';

	const { episodeData, width, labelsWidth, statsWidth, scenes, xScale } = $props();
</script>

<div class="flex">
	<EpisodeScore {width} {labelsWidth} {scenes} {xScale} {episodeData} />
	<EpisodeStats width={statsWidth} />
</div>
