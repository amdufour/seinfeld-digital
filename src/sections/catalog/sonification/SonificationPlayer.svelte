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
	$inspect('scenes', scenes);
	$inspect('sonificationCharactersData', sonificationCharactersData);
	$inspect('episodeData', episodeData);

	/**
	 * @type {Tone.Players}
	 */
	let soundtrack;
	const preload = () => {
		soundtrack = new Tone.Players(sonificationFiles).toDestination(); //connects to the system sound output
	};

	const play = () => {
		let scene = 1;
		let chars = sonificationCharactersData.filter(
			(/** @type {{ SceneNumber: string; }} */ d) => +d.SceneNumber === scene
		);
		let locations = sonificationLocationData.filter(
			(/** @type {{ SceneNumber: string; }} */ d) => +d.SceneNumber === scene
		);
		console.log('chars', chars);
		console.log('locations', locations);

		soundtrack.player('start').start();
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
	};

	const pause = () => {
		soundtrack.stopAll();
	};

	onMount(() => {
		// Preload audio files
		preload();
	});
</script>

<div class="h-16" style="margin-left: {labelsWidth}px;">
	<SonificationTrack {scenesWidth} {scenes} {xScale} />
	<SonificationControls {scenesWidth} {play} />
</div>
