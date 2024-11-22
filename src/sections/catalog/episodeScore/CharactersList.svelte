<script>
	// @ts-nocheck

	import { getCharacterImagePath } from '../../../utils/getCharacterImagePath';

	let { labelsWidth, characters, yScale } = $props();
</script>

<ul class="relative shrink-0 pt-8" style="width: {labelsWidth}px;">
	{#each characters as char}
		<li
			class="absolute flex w-full justify-end"
			style="top: {yScale(char.id) + yScale.bandwidth() / 2 - 16}px; right: 16px;"
		>
			<div class="small flex items-center justify-end pr-2">{char.label}</div>
			<div
				class="image h-8 w-8 rounded-full"
				style="background-image: url({getCharacterImagePath(char.id)});"
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
