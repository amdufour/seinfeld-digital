<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger);
	import { scaleLinear } from 'd3-scale';
	import { max } from 'd3-array';

	import { seasons } from '$lib/data/seasons';

	let innerWidth = $state(1600);
	const gridContainer = $derived.by(() => {
		switch (true) {
			case innerWidth >= 1536:
				return 1536;
			case innerWidth >= 1280:
				return 1280;
			case innerWidth >= 1024:
				return 1024;
			case innerWidth >= 768:
				return 768;
			default:
				return 640;
		}
	});
	const padding = 30;

	/**
	 * @type {number}
	 */
	let svgWidth = $derived(
		innerWidth >= gridContainer
			? gridContainer + (innerWidth - gridContainer) / 2
			: innerWidth > 0
				? innerWidth - 2 * padding
				: 0
	);

	let seasonScale = $derived(
		scaleLinear()
			.domain([0, max(seasons, (/** @type {{ numEpisodes: any; }} */ d) => d.numEpisodes)])
			.range([0, svgWidth])
	);

	onMount(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '#title-screen',
				start: 'top 20%',
				end: 'bottom+=40% center',
				toggleActions: 'play reverse play reverse'
			}
		});
		tl.from('.season-rect', {
			width: 0,
			height: 0,
			stagger: 0.15,
			duration: 2,
			ease: 'power3.out'
		})
			.from(
				['h1', '#subtitle'],
				{
					yPercent: 140,
					duration: 1.5,
					stagger: 0.07,
					ease: 'power3.out'
				},
				'-=1.5'
			)
			.to(
				'.name',
				{
					webkitTextFillColor: 'transparent',
					backgroundPosition: '200% center',
					duration: 2,
					stagger: 0.3,
					ease: 'power3.out'
				},
				'-=.5'
			)
			.to(
				'.name',
				{
					webkitTextFillColor: 'inherit',
					duration: 5,
					ease: 'sine.out'
				},
				'+=.3'
			);
	});
</script>

<svelte:window bind:innerWidth />

<section id="title-screen" class="h-screen" style="margin-top: 1600px;">
	<svg width={svgWidth} height="132">
		{#each seasons as season, i}
			<rect
				class="season-rect"
				x={0}
				y={i * 15}
				width={seasonScale(season.numEpisodes)}
				height={12}
				fill={season.color}
			/>
		{/each}
	</svg>
	<div class="container h-full">
		<div class="mask">
			<h1>The Seinfield Chronicles</h1>
		</div>
		<div class="mask">
			<p id="subtitle" class="subtitle mask max-w-5xl">
				An unnecessary data exploration by <span class="highlight name">Andy Kirk</span>,
				<span class="highlight name">Anne-Marie Dufour</span>, and
				<span class="highlight name">Loud Numbers</span>
			</p>
		</div>
	</div>
</section>

<style>
	section {
		padding-top: 100px;
	}
	.subtitle {
		font-size: 1.125rem;
		line-height: 1.4;
	}
	.name:hover {
		-webkit-text-fill-color: transparent !important;
		background-size: 100% auto;
	}
	@media screen and (min-width: 768px) {
		.subtitle {
			font-size: 1.75rem;
		}
	}
	@media screen and (min-width: 996px) {
		.subtitle {
			font-size: 2.1rem;
		}
	}
</style>
