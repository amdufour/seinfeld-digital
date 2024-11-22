<script>
	import { characters } from '../../../data/characters';
	import { getCharacterImagePath } from '../../../utils/getCharacterImagePath';
	let { labelsWidth } = $props();
</script>

<ul class="shrink-0 pr-4 pt-8" style="width: {labelsWidth}px;">
	{#each characters as character}
		<li class="my-4 flex justify-end">
			<div class="small flex items-center justify-end pr-2">{character.label}</div>
			<div
				class="image h-8 w-8 rounded-full"
				style="background-image: url({getCharacterImagePath(character.id)});"
			></div>
		</li>
	{/each}
</ul>

<style>
	.image {
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}
</style>
