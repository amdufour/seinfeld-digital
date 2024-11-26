<script>
	import { range } from 'd3-array';

	let { labelsWidth, xScale, episodeDuration } = $props();

	const height = 40;
	const numMinutes = $derived(Math.ceil(episodeDuration / 60));
	let minutesArray = $derived(range(0, numMinutes + 1));
</script>

<svg width={xScale(numMinutes * 60) + 100} {height} style="margin-left: {labelsWidth - 50}px">
	<g transform="translate(50, 0)" stroke="#BEBABC">
		<line x1={0} y1={0} x2={xScale(numMinutes * 60)} y2={0} />
		<line x1={0} y1={height} x2={xScale(numMinutes * 60)} y2={40} />

		{#each minutesArray as min, i}
			<!-- Top ticks -->
			<line x1={xScale(min * 60)} y1={0} x2={xScale(min * 60)} y2={5} />
			{#if i !== minutesArray.length - 1}
				<line x1={xScale((min + 0.5) * 60)} y1={0} x2={xScale((min + 0.5) * 60)} y2={3} />
			{/if}

			<!-- Bottom ticks -->
			<line x1={xScale(min * 60)} y1={height - 5} x2={xScale(min * 60)} y2={height} />
			{#if i !== minutesArray.length - 1}
				<line
					x1={xScale((min + 0.5) * 60)}
					y1={height - 3}
					x2={xScale((min + 0.5) * 60)}
					y2={height}
				/>
			{/if}

			<!-- Labels -->
			{#if min % 2 == 0}
				<text
					class="number"
					x={xScale(min * 60)}
					y={height / 2}
					text-anchor="middle"
					dominant-baseline="middle"
					fill="#BEBABC"
					stroke="none"
				>
					{`${min < 10 ? '0' : ''}${min}:00`}
				</text>
			{/if}
		{/each}
	</g>
</svg>
