<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger);

	import { episodesInfo } from '$lib/data/episodesInfo';
	import SeasonsStrip from '../../UI/SeasonsStrip.svelte';
	import EpisodeDetails from '../catalog/EpisodeDetails.svelte';
	import EpisodeTexts from './EpisodeTexts.svelte';

	let { episodesData } = $props();

	const currentSeason = 5;
	const currentEpisode = 14;
	const episodeInfo = episodesInfo.find(
		(e) => e.season === currentSeason && e.episode === currentEpisode
	);

	onMount(() => {
		// Pin calendar
		ScrollTrigger.create({
			trigger: '#episode-example-container',
			start: 'top top',
			end: 'bottom center',
			pin: '#episode-example'
		});
	});

	/**
	 * @param {number} number
	 */
	function episodeStepChange(number) {}
</script>

<div id="episode-example-container" class="relative">
	<div id="episode-example" class="absolute flex h-screen w-screen">
		<SeasonsStrip />
		<div>
			<EpisodeDetails {episodeInfo} />
		</div>
	</div>

	<!-- Scrolling Texts -->
	<div class="z-1000 relative" style="pointer-events: none">
		<EpisodeTexts bind:episodeStepChange />
	</div>
</div>
