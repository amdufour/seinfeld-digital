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

	let {
		labelsWidth,
		scenesWidth,
		scenes,
		xScale,
		episodeData,
		sonificationCharactersData,
		sonificationLocationData
	} = $props();

	/**
	 * @type {Tone.Players}
	 */
	let soundtrack;
	const preload = () => {
		soundtrack = new Tone.Players(sonificationFiles).toDestination(); //connects to the system sound output
	};

	const playScene = (/** @type {number} */ sceneNum) => {
		let chars = sonificationCharactersData.filter(
			(/** @type {{ SceneNumber: string; }} */ d) => +d.SceneNumber === sceneNum
		);
		let locations = sonificationLocationData.filter(
			(/** @type {{ SceneNumber: string; }} */ d) => +d.SceneNumber === sceneNum
		);

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

		setTimeout(() => {
			if (sceneNum < scenes.length) {
				playScene(sceneNum + 1);
			} else {
				soundtrack.player('end').start();
			}
		}, 8727.272727);
	};

	const play = () => {
		let sceneNum = 1;
		soundtrack.player('start').start();
		setTimeout(() => {
			playScene(sceneNum);
		}, 500);
	};

	const stop = () => {
		soundtrack.stopAll();
	};

	onMount(() => {
		// Preload audio files
		preload();
	});
</script>

<div class="h-16" style="margin-left: {labelsWidth}px;">
	<SonificationTrack {scenesWidth} {scenes} {xScale} />
	<SonificationControls {scenesWidth} {play} {stop} />
</div>
