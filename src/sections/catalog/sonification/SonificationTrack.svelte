<script>
	let { scenesWidth, scenes, xScale } = $props();

	const height = 20;
</script>

<div class="relative">
	<svg class="mt-6" width={scenesWidth} {height}>
		<line x1={0} y1="48" x2={scenesWidth} y2="48" stroke="#BEBABC" />
		<g transform="translate(0, {height / 2})">
			{#each scenes as scene, i}
				<line
					class="scene-player"
					x1={xScale(scene.startTime)}
					y1={0}
					x2={xScale(scene.endTime)}
					y2={0}
					stroke-width={6}
				/>
				{#if i > 0}
					<line
						x1={xScale(scene.startTime)}
						y1={-10}
						x2={xScale(scene.startTime)}
						y2={10}
						stroke="#BEBABC"
						stroke-width={2}
					/>
				{/if}
			{/each}
		</g>
	</svg>
</div>

<style>
	.scene-player {
		stroke: #bebabc;
		cursor: pointer;
		transition: stroke 150ms ease-out;
	}
	.scene-player:hover {
		stroke: #e71d80;
	}
</style>
