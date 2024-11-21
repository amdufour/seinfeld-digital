<script>
	import { episodesInfo } from '../../data/episodesInfo';
	import SeasonsStrip from '../../UI/SeasonsStrip.svelte';
	import EpisodeDetails from './EpisodeDetails.svelte';
	import EpisodeData from './EpisodeData.svelte';

	const { episodesData } = $props();
	console.log(episodesData);

	let currentSeason = $state(1);
	let currentEpisode = $state(1);
	let currentEpisodeInfo = $derived(
		episodesInfo.find((e) => e.season === currentSeason && e.episode === currentEpisode)
	);
	let currentEpisodeData = $derived(
		episodesData.filter(
			(/** @type { any } */ e) =>
				e.season === `Season${currentSeason}` && e.episode === currentEpisode.toString()
		)
	);
</script>

<div class="flex w-screen">
	<SeasonsStrip />
	<div>
		<!-- Episode details and controls -->
		<EpisodeDetails
			episodes={episodesInfo}
			bind:currentSeason
			bind:currentEpisode
			episodeInfo={currentEpisodeInfo}
		/>

		<!-- Sonification player -->
		<div class="h-20"></div>

		<!-- Episode data -->
		<EpisodeData episodeData={currentEpisodeData} />
	</div>
</div>
