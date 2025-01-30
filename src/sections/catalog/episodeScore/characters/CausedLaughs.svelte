<script>
	let { characters, xScale, yScale, isHover, hoveredTime } = $props();

	let laughWidth = $derived(xScale(5));
</script>

<g>
	{#each characters as char}
		<g transform={`translate(0, ${yScale(char.id)})`}>
			{#each char.causedLaughs as laugh}
				<rect
					x={xScale(laugh)}
					y={-10}
					width={laughWidth}
					height={yScale.bandwidth() + 20}
					fill={char.color}
					fill-opacity={!isHover ||
					(isHover && hoveredTime >= laugh && hoveredTime <= laugh + laughWidth)
						? 1
						: 0.2}
					stroke="#F9F5F7"
					stroke-opacity={!isHover ||
					(isHover && hoveredTime >= laugh && hoveredTime <= laugh + laughWidth)
						? 1
						: 0}
				/>
			{/each}
		</g>
	{/each}
</g>

<style>
	rect {
		transition: all 150ms ease-out;
	}
</style>
