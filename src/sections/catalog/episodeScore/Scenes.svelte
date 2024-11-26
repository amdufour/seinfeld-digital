<script>
	let { scenes, xScale, height, isNumbersUp = true } = $props();
</script>

<g>
	{#each scenes as scene, j}
		<rect
			x={xScale(scene.startTime)}
			y={0}
			width={xScale(scene.endTime) - xScale(scene.startTime)}
			{height}
			fill={j % 2 ? '#DDDBDC' : '#EEECED'}
			fill-opacity={0.7}
		/>
		{#if xScale(scene.endTime) - xScale(scene.startTime) >= 20}
			<text
				class="number"
				x={xScale(scene.startTime) + (xScale(scene.endTime) - xScale(scene.startTime)) / 2}
				y={isNumbersUp ? 15 : height - 15}
				text-anchor="middle"
				dominant-baseline="middle"
			>
				{scene.sceneNum}
			</text>
		{/if}
	{/each}
</g>
