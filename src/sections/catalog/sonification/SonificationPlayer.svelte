<script>
	import { onMount } from 'svelte';
	import * as Tone from 'tone';

	import SonificationControls from './SonificationControls.svelte';
	import SonificationTrack from './SonificationTrack.svelte';
	import { sonificationFiles } from '../../../data/sonificationFilesMapping';

	let { labelsWidth, scenesWidth, scenes, xScale, sonificationData } = $props();
	$inspect(scenes);
	$inspect(sonificationData);

	/**
	 * @type {Tone.Players}
	 */
	let soundtrack;
	const preload = () => {
		soundtrack = new Tone.Players(sonificationFiles).toDestination(); //connects to the system sound output
	};

	// const getCharSoundFileName = (char, laughBin) => {};

	const play = () => {
		let scene = 1;
		let chars = sonificationData.filter(
			(/** @type {{ SceneNum: string; }} */ d) => +d.SceneNum === scene
		);

		soundtrack.player('start').start();
		// Play locations here
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
