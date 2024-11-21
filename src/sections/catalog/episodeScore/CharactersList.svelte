<script>
	import { characters } from '../../../data/characters';
	import { getCharacterImagePath } from '../../../utils/getCharacterImagePath';
</script>

<div class="w-44 pr-4 pt-8">
	<ul>
		{#each characters as character}
			<li class="my-4 flex justify-end">
				<div class="small pr-2 text-right">{character.label}</div>
				<div
					class="image h-8 w-8 rounded-full"
					style="background-image: url({getCharacterImagePath(character.id)});"
				></div>
			</li>
		{/each}
	</ul>
</div>

<style>
	.image {
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}
</style>
