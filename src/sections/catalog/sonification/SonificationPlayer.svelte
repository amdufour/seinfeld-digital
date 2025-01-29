<script>
	import { onMount } from 'svelte';
	import * as Tone from 'tone';

	import SonificationControls from './SonificationControls.svelte';
	import SonificationTrack from './SonificationTrack.svelte';
	import { sonification } from '../../../data/sonification';

	let { labelsWidth, scenesWidth, scenes, xScale } = $props();

	/**
	 * @type {Tone.Players}
	 */
	let soundtrack;
	const preload = () => {
		soundtrack = new Tone.Players(sonification).toDestination(); //connects to the system sound output
	};

	const play = () => {
		// soundtrack.player('jerry').start();
		// soundtrack.player('location_workplace').start();
		// soundtrack.player('char_other_mild').start(5);
	};

	const pause = () => {
		soundtrack.stopAll();
	};

	onMount(() => {
		// Preload audio files
		preload();
	});
</script>

<div class="flex h-24 items-center">
	<SonificationControls {labelsWidth} {play} />
	<SonificationTrack {scenesWidth} {scenes} {xScale} />
</div>
