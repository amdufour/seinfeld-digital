<script>
	// @ts-nocheck

	let { locations, xScale, yScale, isHover, hoveredTime } = $props();

	const locationsData = $derived.by(() => {
		const locationsArray = structuredClone(locations);
		locationsArray.forEach((location) => {
			location.momentsOnScreen = [];
			let startTime;
			let currentTime;
			if (location.timesOnScreen) {
				location.timesOnScreen.forEach((time, i) => {
					switch (true) {
						case i === 0:
							startTime = time;
							currentTime = time;
							break;
						case i === location.timesOnScreen.length - 1:
						case time - currentTime > 5:
							const addedTime = i === location.timesOnScreen.length - 1 ? 10 : 5;
							location.momentsOnScreen.push({
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
		});

		return locationsArray;
	});
</script>

<g>
	{#each locationsData as location}
		<g transform={`translate(0, ${yScale(location.id)})`}>
			{#each location.momentsOnScreen as moment}
				<rect
					x={xScale(moment.startTime)}
					y={0}
					width={xScale(moment.duration)}
					height={yScale.bandwidth()}
					fill="#12020A"
					fill-opacity={!isHover ||
					(isHover &&
						hoveredTime >= moment.startTime &&
						hoveredTime <= moment.startTime + moment.duration)
						? 1
						: 0.1}
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
