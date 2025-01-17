<script>
	import { supportingCharacterTiles, characters } from '../../data/characters';
	import { getRandom } from '../../utils/getRandom';

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
	$inspect(tiles);

	// Play video on hover
	const handlePlayVideo = (/** @type {string} */ tileId) => {
		/**
		 * @type {HTMLVideoElement | null}
		 */
		const video = document.querySelector(`#${tileId} video`);
		video?.play();
	};
	const handlePauseVideo = (/** @type {string} */ tileId) => {
		/**
		 * @type {HTMLVideoElement | null}
		 */
		const video = document.querySelector(`#${tileId} video`);
		video?.pause();
	};
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div class="tiles flex flex-wrap">
	{#each tiles as tile}
		<div
			id={tile.id}
			class="tile-container relative"
			role="group"
			onfocus={() => handlePlayVideo(tile.id)}
			onmouseover={() => handlePlayVideo(tile.id)}
			onmouseleave={() => handlePauseVideo(tile.id)}
		>
			<div
				class="tile"
				style="width: {tilesWidth}px; height: {tilesHeight}px; background-image: url('https://amdufour.github.io/hosted-data/apis/thumbnails/{tile.thumbnail}');"
			></div>
			<!-- svelte-ignore a11y_media_has_caption -->
			<video
				class="absolute bottom-0 bottom-0 left-0 right-0"
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
			<div class="info absolute bottom-0 left-0 right-0">
				<div
					class="details px-4"
					style="background-color: {characters.find((char) => char.label === tile.category)
						?.color};"
				>
					<span class="name">{tile.name}</span>,
					<span class="category small">{tile.category}</span>
				</div>
			</div>
			<div
				class="overlay absolute left-0 right-0 top-0"
				style="background-color: {characters.find((char) => char.label === tile.category)?.color};"
			></div>
		</div>
	{/each}
</div>

<style>
	.tile,
	.overlay,
	.info .details {
		transition: all 300ms ease-out;
	}
	.tile {
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
		max-height: 44px;
	}
</style>
