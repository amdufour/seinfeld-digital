<script>
	let { characters, xScale, yScale } = $props();

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
					stroke="#F9F5F7"
				/>
			{/each}
		</g>
	{/each}
</g>
