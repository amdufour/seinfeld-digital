<script>
	import { onMount } from 'svelte';
	import * as Tone from 'tone';

	import SonificationControls from './SonificationControls.svelte';
	import SonificationTrack from './SonificationTrack.svelte';
	import {
		sonificationFiles,
		getCharSoundFileName,
		getLocationSoundFileName
	} from '../../../data/sonificationFilesMapping';
	import { soundIsAuth } from '../../../stores/soundAuthStore';

	let {
		labelsWidth,
		scenesWidth,
		scenes,
		xScale,
		sonificationCharactersData,
		sonificationLocationData
	} = $props();

	let isPlaying = $state(false);
	let playingScene = $state(0);

	/**
	 * @type {Tone.Players}
	 */
	let soundtrack;
	const preload = () => {
		soundtrack = new Tone.Players(sonificationFiles).toDestination(); //connects to the system sound output
	};

	/**
	 * @type {number | undefined}
	 */
	let playSceneTimeout;
	const playScene = (/** @type {number} */ sceneNum) => {
		if (isPlaying && $soundIsAuth && playingScene === sceneNum) {
			let chars = sonificationCharactersData.filter(
				(/** @type {{ SceneNumber: string; }} */ d) => +d.SceneNumber === sceneNum
			);
			let locations = sonificationLocationData.filter(
				(/** @type {{ SceneNumber: string; }} */ d) => +d.SceneNumber === sceneNum
			);

			// Play audio files
			soundtrack.player('rythm').start();
			chars.forEach((/** @type {{ Character: string; laughBinFull: string; }} */ charData) => {
				const player = getCharSoundFileName(charData.Character, charData.laughBinFull);
				if (player) {
					soundtrack.player(player).start();
				}
			});
			locations.forEach((/** @type {{ Location: string; }} */ locData) => {
				const player = getLocationSoundFileName(locData.Location);
				if (player) {
					soundtrack.player(player).start();
				}
			});

			playSceneTimeout = setTimeout(() => {
				if (sceneNum < scenes.length) {
					playingScene = sceneNum + 1;
					playScene(sceneNum + 1);
				} else {
					soundtrack.player('end').start();
					playingScene = 0;
				}
			}, 8727.272727);
		}
	};

	const playFirstScene = () => {
		soundtrack.player('start').start();
		setTimeout(() => {
			playScene(1);
		}, 500);
	};

	const play = () => {
		isPlaying = true;
		playingScene = 1;
		playFirstScene();
	};

	const stop = () => {
		isPlaying = false;
		playingScene = 0;
		clearTimeout(playSceneTimeout);
		soundtrack.stopAll();
	};

	const handleClickOnScene = (/** @type {number} */ sceneNum) => {
		isPlaying = true;
		playingScene = sceneNum;
		clearTimeout(playSceneTimeout);
		soundtrack.stopAll(); // Stop currently playing scenes

		if (sceneNum === 1) {
			playFirstScene();
		} else {
			playScene(sceneNum);
		}
	};

	onMount(() => {
		// Preload audio files
		preload();
	});
</script>

<div class="h-16" style="margin-left: {labelsWidth}px;">
	<SonificationTrack {scenesWidth} {scenes} {xScale} {playingScene} {handleClickOnScene} />
	<SonificationControls
		{scenesWidth}
		{isPlaying}
		{playingScene}
		numScenes={scenes.length}
		{play}
		{stop}
	/>
</div>
