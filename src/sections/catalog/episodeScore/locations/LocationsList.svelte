<script>
	import { getLocationIconPath } from '../../../../utils/getLocationIconPath';

	let { labelsWidth, locations, yScale } = $props();
</script>

<ul class="relative shrink-0 pt-4" style="width: {labelsWidth}px;">
	{#each locations as location}
		<li
			class="absolute flex w-full justify-end"
			style="top: {yScale(location.id) + yScale.bandwidth() / 2 - 16}px; right: 16px;"
		>
			<div class="small flex items-center justify-end pr-2">{location.label}</div>
			<div
				class="image h-8 w-8 rounded-full"
				style="background-image: url({getLocationIconPath(location.id, true)});"
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
