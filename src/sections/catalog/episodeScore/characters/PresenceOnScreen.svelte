<script>
	// @ts-nocheck

	let { characters, xScale, yScale, isHover, hoveredTime } = $props();

	const charactersData = $derived.by(() => {
		const charactersArray = structuredClone(characters);
		charactersArray.forEach((char) => {
			if (char.id !== 'The situation') {
				char.momentsOnScreen = [];
				let startTime;
				let currentTime;
				if (char.timesOnScreen) {
					char.timesOnScreen.forEach((time, i) => {
						switch (true) {
							case i === 0:
								startTime = time;
								currentTime = time;
								break;
							case i === char.timesOnScreen.length - 1:
							case time - currentTime > 5:
								const addedTime = i === char.timesOnScreen.length - 1 ? 10 : 5;
								char.momentsOnScreen.push({
									startTime: startTime,
									duration: currentTime - startTime + addedTime
								});
								startTime = time;
								currentTime = time;
								break;
							case time - currentTime === 5:
								currentTime = time;
								break;
						}
					});
				}
			}
		});

		return charactersArray;
	});
</script>

<g>
	{#each charactersData as char}
		<g transform={`translate(0, ${yScale(char.id)})`}>
			{#each char.momentsOnScreen as moment}
				<rect
					x={xScale(moment.startTime)}
					y={0}
					width={xScale(moment.duration)}
					height={yScale.bandwidth()}
					fill={char.color}
					fill-opacity={!isHover ||
					(isHover &&
						hoveredTime >= moment.startTime &&
						hoveredTime <= moment.startTime + moment.duration)
						? 1
						: 0.2}
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
