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
				end: 'bottom+=40% top',
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
					opacity: 0,
					ease: 'power3.out'
				},
				'-=1.5'
			)
			.to(
				'.name',
				{
					webkitTextFillColor: 'transparent',
					backgroundPosition: '10% center',
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

<section id="title-screen" class="h-screen mb-80" style="margin-top: 1200px;">
	<svg width={svgWidth} height="132">
		{#each seasons as season, i}
			<rect
				class="season-rect"
				x={0}
				y={i * 12}
				width={seasonScale(season.numEpisodes)}
				height={8}
				fill={season.color}
			/>
		{/each}
	</svg>
	<div class="container h-full">
		<div style="margin-top: -25px;">
			<h1>The Seinfield Chronicles</h1>
		</div>
		<div>
			<p id="subtitle" class="subtitle">
				An unnecessary data exploration by
				<span class="name">
					<span class="highlight">Andy Kirk</span>
					<img
						id="portrait-andy"
						class="portrait"
						alt="Portrait of Andy Kirk"
						src="https://amdufour.github.io/hosted-data/apis/portraits/andy.jpg"
					/>
				</span>,
				<span class="name">
					<span class="highlight">Anne-Marie Dufour</span>
					<img
						id="portrait-am"
						class="portrait"
						alt="Portrait of Anne-Marie Dufour"
						src="https://amdufour.github.io/hosted-data/apis/portraits/annemarie_square_closeup.jpg"
					/>
				</span>, and
				<span class="name">
					<span class="highlight">Loud Numbers</span>
					<img
						id="portrait-ln"
						class="portrait"
						alt="Loud Numbers logo"
						src="https://amdufour.github.io/hosted-data/apis/portraits/loud_numbers.jpg"
					/>
				</span>
			</p>
		</div>
	</div>
</section>

<style>
	section {
		padding-top: 100px;
	}
	.subtitle {
		font-size: 1rem;
		line-height: 1.4;
	}
	.name {
		position: relative;
		transition: color 350ms cubic-bezier(0.165, 0.84, 0.44, 1);
	}
	.name:hover {
		color: transparent;
		webkitTextFillColor: 'transparent';
		backgroundPosition: '100% center';
		background-size: 100% auto;
	}
	.portrait {
		position: absolute;
		left: 50%;
		top: -50px;
		transform: translateX(-50%);
		width: 80px;
		height: auto;
		border-radius: 50%;
		border: 5px solid #f9f5f7;
		opacity: 0;
		transition: all 350ms cubic-bezier(0.165, 0.84, 0.44, 1);
	}
	.name:hover .portrait {
		opacity: 1;
		transform: translate(-50%, -40px) scale(1.2);
	}
	@media screen and (min-width: 768px) {
		.subtitle {
			font-size: 1.25rem;
		}
	}
	@media screen and (min-width: 996px) {
		.subtitle {
			font-size: 1.5rem;
		}
	}
</style>
