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

	let innerWidth = $state(1200);
	let innerHeight = $state(800);
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

		gsap.set('#episode-detail-container', {
			translateY: 260,
			opacity: 0
		});
		gsap.set('#episode-length', {
			opacity: 0
		});
		gsap.set('#duration-example text', {
			translateY: 20,
			opacity: 0
		});
	});

	const reveal1 = () => {
		gsap.to('#episode-detail-container', {
			translateY: 0,
			opacity: 1,
			ease: 'power3.out',
			duration: 2
		});
	};

	const reveal2 = () => {
		const tl = gsap.timeline();
		tl.to(
			'#episode-length',
			{
				attr: { width: innerWidth > 793 ? innerWidth - 273 : innerWidth - 98 },
				opacity: 1,
				ease: 'power3.out',
				duration: 3
			},
			'-=2'
		).to('#duration-example text', {
			translateY: 0,
			opacity: 1,
			ease: 'power3.out',
			duration: 0.6
		});
	};

	/**
	 * @param {number} number
	 */
	function episodeStepChange(number) {
		switch (number) {
			case 1:
				reveal1();
				break;
			case 2:
				reveal2();
				break;
			default:
				return null;
		}
	}
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div id="episode-example-container" class="relative">
	<div id="episode-example" class="absolute flex h-screen w-screen">
		<SeasonsStrip />

		<div>
			<!-- Episode details -->
			<div class="mask self-start">
				<div id="episode-detail-container">
					<EpisodeDetails {episodeInfo} />
				</div>
			</div>

			<!-- Episode duration -->
			<div
				id="duration-example"
				class="flex items-center justify-center"
				style="width: {innerWidth - 25}px; height: {innerHeight - 254}px;"
			>
				<svg width={innerWidth > 793 ? innerWidth - 225 : innerWidth - 50} height="80">
					<rect id="episode-length" x={24} y={10} width={0} height={50} fill="#DDDBDC" />
					<text y={80} class="number">00:00</text>
					<text x={innerWidth > 793 ? innerWidth - 275 : innerWidth - 100} y={80} class="number"
						>21:45</text
					>
				</svg>
			</div>
		</div>
	</div>

	<!-- Scrolling Texts -->
	<div class="z-1000 relative" style="pointer-events: none">
		<EpisodeTexts bind:episodeStepChange />
	</div>
</div>
