<script>
	import { onMount } from 'svelte';
	import { scaleLinear } from 'd3-scale';
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
	let episodeWidth = $derived(innerWidth > 793 ? innerWidth - 273 : innerWidth - 98);
	const currentSeason = 5;
	const currentEpisode = 14;
	const episodeInfo = episodesInfo.find(
		(e) => e.season === currentSeason && e.episode === currentEpisode
	);
	const laughData = $derived(
		episodesData.filter(
			(/** @type {{ season: string; episode: string; eventCategory: string; }} */ d) =>
				d.season === 'Season5' && d.episode === '14' && d.eventCategory === 'CAUSES THE LAUGH'
		)
	);
	const timeScale = $derived(
		scaleLinear()
			.domain([0, +laughData[laughData.length - 1].eventTimeSeconds + 5])
			.range([0, episodeWidth])
	);
	const laughWidth = $derived(timeScale(5));

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
			translateX: -innerWidth,
			opacity: 0
		});
		gsap.set('#duration-example .episode-start-end', {
			translateY: 20,
			opacity: 0
		});
		gsap.set('#duration-example .laugh-bar', {
			translateY: 100,
			opacity: 0
		});
		gsap.set('#duration-example .label', {
			translateY: -30,
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
		gsap.to('#episode-length', {
			translateX: 0,
			opacity: 1,
			ease: 'power3.out',
			duration: 3
		});
		gsap.to('#duration-example .episode-start-end', {
			translateY: 0,
			opacity: 1,
			ease: 'power3.out',
			duration: 1,
			delay: 2
		});
	};

	const reveal3 = () => {
		gsap.to('#duration-example .laugh-bar', {
			translateY: 0,
			opacity: 1,
			ease: 'power3.out',
			duration: 0.6,
			stagger: 0.02
		});
		gsap.to('#duration-example .label', {
			translateY: 0,
			opacity: 1,
			ease: 'power3.out',
			duration: 1,
			delay: 0.5
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
			case 3:
				reveal3();
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
				<svg width={innerWidth > 793 ? innerWidth - 225 : innerWidth - 50} height="130">
					<g transform="translate(0, 40)">
						<rect
							id="episode-length"
							x={24}
							y={10}
							width={episodeWidth}
							height={50}
							fill="#DDDBDC"
						/>
						<text class="number episode-start-end" y={90}>00:00</text>
						<text class="number episode-start-end" x={episodeWidth} y={90}>21:45</text>

						<!-- Laughs -->
						<g transform="translate(24, 0)">
							{#each laughData as laugh}
								<rect
									class="laugh-bar"
									x={timeScale(+laugh.eventTimeSeconds)}
									y={0}
									width={laughWidth}
									height={70}
									fill="#12020A"
									stroke="#F9F5F7"
									stroke-width={innerWidth > 793 ? 1.5 : 0.5}
								/>
							{/each}
							<text class="mid label" x={timeScale(+laughData[0].eventTimeSeconds)} y={-20}
								>Each bar represents a block of 5s with laughter.</text
							>
							<line
								class="label"
								x1={timeScale(+laughData[0].eventTimeSeconds) + laughWidth / 2}
								y1={-15}
								x2={timeScale(+laughData[0].eventTimeSeconds) + laughWidth / 2}
								y2={-4}
								stroke="#E71D80"
							/>
						</g>
					</g>
				</svg>
			</div>
		</div>
	</div>

	<!-- Scrolling Texts -->
	<div class="z-1000 relative" style="pointer-events: none">
		<EpisodeTexts bind:episodeStepChange />
	</div>
</div>
