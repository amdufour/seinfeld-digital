<script>
	// @ts-nocheck

	let { characters } = $props();

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
							char.momentsOnScreen.push({
								startTime: startTime,
								duration: currentTime - startTime + 5
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

<g> </g>
