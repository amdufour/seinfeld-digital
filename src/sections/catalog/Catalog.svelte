<script>
	import { inview } from 'svelte-inview';
	import { catalogIsInView } from '../../stores/catalogIsInView';
	import { episodesInfo } from '$lib/data/episodesInfo';
	import { formatTime } from '../../utils/formatTime';
	import { scaleLinear } from 'd3-scale';
	import { getRandomEpisode } from '../../utils/getRandom';
	import SeasonsStrip from '../../UI/SeasonsStrip.svelte';
	import EpisodeDetails from './EpisodeDetails.svelte';
	import SonificationPlayer from './sonification/SonificationPlayer.svelte';
	import EpisodeScore from './episodeScore/EpisodeScore.svelte';

	let { episodesData, sonificationCharactersData, sonificationLocationData } = $props();

	let innerWidth = $state(1200);
	let innerHeight = $state(800);
	const statsWidth = $derived(innerWidth >= 1280 ? 240 : 0);
	const labelsWidth = $derived(innerWidth >= 1280 ? 176 : 60);
	const extraPadding = $derived(innerWidth >= 1280 ? 60 : 10);
	let vizWidth = $derived(
		innerWidth > 1000
			? innerWidth - statsWidth - 25 - extraPadding
			: Math.max(innerWidth - 25 - extraPadding, 1000)
	);
	let scenesWidth = $derived(vizWidth - labelsWidth);

	const navHeight = $derived(innerWidth > 540 ? 0 : 56);
	const detailsHeight = $derived(innerWidth >= 1280 ? 254 : 230 - navHeight);
	const sonificationPlayerHeight = 100;
	const vizHeight = $derived(
		innerHeight - detailsHeight - sonificationPlayerHeight - 40 + (innerWidth <= 539 ? 56 : 0)
	);

	let isPlaying = $state(false);
	let playingScene = $state(0);
	const updatePlayingData = (/** @type {boolean} */ playing, /** @type {number} */ sceneNum) => {
		isPlaying = playing;
		playingScene = sceneNum;
	};

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

	let currentEpisodeSonificationCharactersData = $derived(
		sonificationCharactersData.filter(
			(/** @type { any } */ d) =>
				d.Season === `Season${currentSeason}` && +d.Episode === currentEpisode
		)
	);

	let currentEpisodeSonificationLocationData = $derived(
		sonificationLocationData.filter(
			(/** @type { any } */ d) =>
				d.Season === `Season${currentSeason}` && +d.Episode === currentEpisode
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

	const options = {};
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div
	id="catalog"
	class="flex w-screen overflow-hidden pb-12"
	style="height: {innerWidth <= 539 ? 'calc(100vh + 56px)' : '100vh'};"
	use:inview={options}
	oninview_change={(/** @type {{ detail: { inView: any; }; }} */ event) => {
		const { inView } = event.detail;
		console.log(event.detail);
		$catalogIsInView = inView;
	}}
>
	{#if innerWidth >= 1280}
		<div id="seasons-strip">
			<SeasonsStrip />
		</div>
	{/if}
	<div style="width: calc(100vw - {innerWidth >= 1280 ? 25 : 0}px);">
		<!-- Episode details and controls -->
		<EpisodeDetails
			episodes={episodesInfo}
			bind:currentSeason
			bind:currentEpisode
			episodeInfo={currentEpisodeInfo}
		/>

		<!-- Sonification player -->
		<SonificationPlayer
			{labelsWidth}
			{scenesWidth}
			{scenes}
			{xScale}
			sonificationCharactersData={currentEpisodeSonificationCharactersData}
			sonificationLocationData={currentEpisodeSonificationLocationData}
			{isPlaying}
			{playingScene}
			{updatePlayingData}
		/>

		<!-- Episode data -->
		<div class="score-wrapper">
			<div style="max-height: {vizHeight}px; overflow: scroll; padding-bottom: 20px;">
				<EpisodeScore
					episodeData={currentEpisodeData}
					width={scenesWidth}
					{labelsWidth}
					{statsWidth}
					{scenes}
					{xScale}
					sonificationCharactersData={currentEpisodeSonificationCharactersData}
					sonificationLocationData={currentEpisodeSonificationLocationData}
					{isPlaying}
					{playingScene}
				/>
			</div>
		</div>
	</div>
</div>

<style>
	.score-wrapper {
		position: relative;
	}
	.score-wrapper:after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 50px;
		background: rgb(249, 245, 247);
		background: linear-gradient(0deg, rgba(249, 245, 247, 1) 0%, rgba(249, 245, 247, 0) 100%);
	}
</style>
