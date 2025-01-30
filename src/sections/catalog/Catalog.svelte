<script>
	import { episodesInfo } from '../../data/episodesInfo';
	import { formatTime } from '../../utils/formatTime';
	import { scaleLinear } from 'd3-scale';
	import { getRandomEpisode } from '../../utils/getRandom';
	import SeasonsStrip from '../../UI/SeasonsStrip.svelte';
	import EpisodeDetails from './EpisodeDetails.svelte';
	import SonificationPlayer from './sonification/SonificationPlayer.svelte';
	import EpisodeScore from './episodeScore/EpisodeScore.svelte';
	let { episodesData } = $props();

	let innerWidth = $state(1600);
	const statsWidth = 240;
	const labelsWidth = 176;
	let vizWidth = $derived(innerWidth - statsWidth - 60 - 25);
	let scenesWidth = $derived(vizWidth - labelsWidth);

	const randomEpisode = getRandomEpisode();
	let currentSeason = $state(randomEpisode?.newSeason);
	let currentEpisode = $state(randomEpisode?.newEpisode);
	let currentEpisodeInfo = $derived(
		episodesInfo.find((e) => e.season === currentSeason && e.episode === currentEpisode)
	);
	let currentEpisodeData = $derived(
		episodesData.filter(
			(/** @type { any } */ e) =>
				e.season === `Season${currentSeason}` && +e.episode === currentEpisode
		)
	);

	const scenesData = $derived(
		currentEpisodeData.filter((/** @type { any } */ d) => d.eventCategory === 'SCENE')
	);
	const scenes = $derived.by(() => {
		const scenesArray = [];
		const lastSceneNumber = +scenesData[scenesData.length - 2].sceneNumber;
		for (let i = 1; i <= lastSceneNumber; i++) {
			const sceneData = scenesData.filter((/** @type { any } */ d) => +d.sceneNumber === i);
			const startTime = sceneData[0].eventTime;
			const endTime = sceneData[sceneData.length - 1].eventTime;
			scenesArray.push({
				sceneNum: i,
				startTime: formatTime(startTime),
				endTime: formatTime(endTime) + 5
			});
		}

		return scenesArray;
	});

	const xScale = $derived(
		scaleLinear()
			.domain([0, scenes[scenes.length - 1].endTime])
			.range([0, scenesWidth])
	);
</script>

<svelte:window bind:innerWidth />

<div id="catalog" class="flex w-screen pb-12">
	<div id="seasons-strip">
		<SeasonsStrip />
	</div>
	<div style="width: calc(100vw - 25px);">
		<!-- Episode details and controls -->
		<EpisodeDetails
			episodes={episodesInfo}
			bind:currentSeason
			bind:currentEpisode
			episodeInfo={currentEpisodeInfo}
		/>

		<!-- Sonification player -->
		<SonificationPlayer {labelsWidth} {scenesWidth} {scenes} {xScale} />

		<!-- Episode data -->
		<EpisodeScore
			episodeData={currentEpisodeData}
			width={scenesWidth}
			{labelsWidth}
			{statsWidth}
			{scenes}
			{xScale}
		/>
	</div>
</div>
