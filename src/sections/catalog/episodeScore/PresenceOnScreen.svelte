<script>
	// @ts-nocheck

	let { characters, xScale, yScale } = $props();

	const charactersData = $derived.by(() => {
		const charactersArray = structuredClone(characters);
		charactersArray.forEach((char) => {
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
		});

		return charactersArray.filter((c) => c.timesOnScreen.length > 0);
	});
	console.log(charactersData);
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
				/>
			{/each}
		</g>
	{/each}
</g>
