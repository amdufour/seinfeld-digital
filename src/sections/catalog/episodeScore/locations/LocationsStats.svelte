<script>
	import { scaleLinear } from 'd3-scale';

	let { width, height, yScale, locationsOnScreen, episodeDuration } = $props();

	let columnWidth = $derived(width / 2 - 8);
	const barHeight = 10;
	const xScale = $derived(scaleLinear().domain([0, 1]).range([0, columnWidth]));
</script>

<div class="flex pl-6" style="width: {width}px;">
	<div class="mr-4" style="width: {columnWidth}px;">
		<svg width={columnWidth} {height}>
			{#each locationsOnScreen as location}
				<rect
					x={0}
					y={yScale(location.id) + yScale.bandwidth() / 2 - barHeight / 2}
					width={columnWidth}
					height={barHeight}
					fill="#EEECED"
				/>
				<rect
					x={0}
					y={yScale(location.id) + yScale.bandwidth() / 2 - barHeight / 2}
					width={xScale((location.timesOnScreen.length * 5) / episodeDuration)}
					height={barHeight}
					fill="#12020A"
				/>
				<text
					class="number"
					x={0}
					y={yScale(location.id) + yScale.bandwidth() / 2 - barHeight / 2 - 2}
				>
					{Math.round(((location.timesOnScreen.length * 5) / episodeDuration) * 100) === 100
						? 99
						: Math.round(((location.timesOnScreen.length * 5) / episodeDuration) * 100)}%
				</text>
			{/each}
		</svg>
	</div>
</div>
