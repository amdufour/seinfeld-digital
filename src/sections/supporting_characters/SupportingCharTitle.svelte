<script>
	import { supportingCharacterTiles } from '../../data/characters';
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
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div class="tiles flex flex-wrap">
	{#each tiles as tile}
		<div
			class="tile"
			style="width: {tilesWidth}px; height: {tilesHeight}px; background-image: url('https://amdufour.github.io/hosted-data/apis/thumbnails/{tile.thumbnail}');"
		></div>
	{/each}
</div>

<style>
	.tile {
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}
</style>
