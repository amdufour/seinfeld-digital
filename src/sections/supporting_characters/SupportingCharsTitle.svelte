<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger);

	import { supportingCharacterTiles, characters } from '../../data/characters';
	import { getRandom } from '../../utils/getRandom';
	import { soundIsAuth } from '../../stores/soundAuthStore';

	let innerWidth = $state(1600);
	let innerHeight = $state(800);
	const numColumns = $derived.by(() => {
		switch (true) {
			case innerWidth >= 1024:
				return 4;
			case innerWidth >= 768:
				return 3;
			default:
				return 2;
		}
	});
	const numRows = $derived.by(() => {
		switch (true) {
			case innerHeight >= 800:
				return 3;
			case innerHeight >= 600:
				return 2;
			default:
				return 2;
		}
	});

	const numTiles = $derived(numColumns * numRows);
	const tiles = $derived(getRandom(supportingCharacterTiles, numTiles));
	const tilesWidth = $derived(innerWidth / numColumns);
	const tilesHeight = $derived(innerHeight / numRows);

	// Play video on hover
	let videoIsPlaying = $state(false);
	const handlePlayVideo = (/** @type {string} */ tileId, /** @type {number} */ index) => {
		if (index < numColumns) {
			videoIsPlaying = true;
		}

		/**
		 * @type {HTMLVideoElement | null}
		 */
		const video = document.querySelector(`#${tileId} video`);
		// @ts-ignore
		video.muted = !$soundIsAuth;
		video?.play();
	};
	const handlePauseVideo = (/** @type {string} */ tileId) => {
		videoIsPlaying = false;

		/**
		 * @type {HTMLVideoElement | null}
		 */
		const video = document.querySelector(`#${tileId} video`);
		video?.pause();
	};

	let enterAnimationCompleted = $state(false);
	onMount(() => {
		setTimeout(() => {
			enterAnimationCompleted = true;
		}, 2000);

		// Reveal section title
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '#tiles-container-supporting-chars',
				start: 'top center',
				end: 'bottom center',
				toggleActions: 'play reverse play reverse',
				markers: true
			}
		});
		tl.from('.tile-container', {
			scale: 0,
			opacity: 0,
			ease: 'power3.out',
			duration: 2,
			stagger: {
				from: 'random',
				amount: 0.4
			}
		}).from(
			'#section-title-supporting-chars h2',
			{
				translateY: 100,
				opacity: 0,
				ease: 'power3.out',
				duration: 2
			},
			'-=1'
		);
	});
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div
	id="tiles-container-supporting-chars"
	class="tiles-container relative h-screen w-screen bg-black text-white"
>
	<div class="tiles absolute z-0 flex flex-wrap">
		{#each tiles as tile, i}
			<div
				id={tile.id}
				class="tile-container relative"
				role="group"
				onfocus={() => handlePlayVideo(tile.id)}
				onmouseover={() => handlePlayVideo(tile.id, i)}
				onmouseleave={() => handlePauseVideo(tile.id)}
			>
				<div
					class="tile relative z-10"
					style="width: {tilesWidth}px; height: {tilesHeight}px; background-image: url('https://amdufour.github.io/hosted-data/apis/thumbnails/{tile.thumbnail}');"
				></div>
				{#if enterAnimationCompleted}
					<!-- svelte-ignore a11y_media_has_caption -->
					<video
						class="absolute bottom-0 bottom-0 left-0 right-0 z-0"
						playsinline
						preload="auto"
						data-object-fit="cover"
						style="width: {tilesWidth}px; height: {tilesHeight}px;"
						poster="https://amdufour.github.io/hosted-data/apis/thumbnails/{tile.thumbnail}"
					>
						<source
							src="https://amdufour.github.io/hosted-data/apis/videos/{tile.video}"
							type="video/mp4"
						/>
					</video>
				{/if}
				<div class="info absolute bottom-0 left-0 right-0 z-20">
					<div
						class="details px-4"
						style="background-color: {characters.find((char) => char.label === tile.category)
							?.color};"
					>
						<div>
							<span class="name">{tile.name}</span>,
							<span class="category small">{tile.category}</span>
						</div>
						<div class="small">{`s${tile.season}e${tile.episode} ${tile.episodeTitle}`}</div>
					</div>
				</div>
				<div
					class="overlay absolute left-0 right-0 top-0 z-30"
					style="background-color: {characters.find((char) => char.label === tile.category)
						?.color};"
				></div>
			</div>
		{/each}
	</div>
	<div
		id="section-title-supporting-chars"
		class={`section-title absolute left-0 right-0 z-10 flex items-center ${videoIsPlaying ? 'hide-title' : ''}`}
		style="top: {tilesHeight - 146}px;"
	>
		<div class="container">
			<h2 class="mask">Supporting Characters</h2>
		</div>
	</div>
</div>

<style>
	/* Tiles */
	.tile,
	.overlay,
	.info .details,
	.section-title {
		transition: all 300ms ease-out;
	}
	.tile {
		border: 1px solid #f9f5f7;
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		opacity: 1;
	}
	.overlay {
		height: 100%;
		max-height: 100%;
		opacity: 0.7;
	}
	.info {
		height: 100%;
		display: flex;
		align-items: flex-end;
	}
	.info .details {
		padding-top: 0;
		padding-bottom: 0;
		width: 100%;
		max-height: 0;
		overflow: hidden;
		font-size: 1.125rem;
		line-height: 1.1;
	}
	.info .details .name {
		font-weight: 600;
	}
	.tile-container:hover .tile {
		opacity: 0;
	}
	.tile-container:hover .overlay {
		max-height: 0;
	}
	.tile-container:hover .info .details {
		padding-top: 8px;
		padding-bottom: 8px;
		max-height: 54px;
	}

	/* Title */
	.section-title {
		height: 228px;
		background: rgb(18, 2, 10);
		background: linear-gradient(
			0deg,
			rgba(18, 2, 10, 0) 0%,
			rgba(18, 2, 10, 0.3) 30%,
			rgba(18, 2, 10, 0.3) 50%,
			rgba(18, 2, 10, 0.3) 70%,
			rgba(18, 2, 10, 0) 100%
		);
		pointer-events: none;
		transform: translateY(0);
		opacity: 1;
	}
	.section-title.hide-title {
		transform: translateY(50px);
		opacity: 0;
	}
	.section-title h2 {
		line-height: 1.4;
	}
</style>
