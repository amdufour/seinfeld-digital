<script>
	// @ts-nocheck

	import { characters } from '../../../data/characters';

	let { episodeData } = $props();

	const charactersData = $derived.by(() => {
		const data = episodeData.filter((e) => e.eventCategory === 'CHARACTERS');
		const charactersArray = characters.map((c) => {
			return { id: c.id, color: c.color, timesOnScreen: [] };
		});
		data.forEach((d) => {
			charactersArray.find((c) => c.id === d.eventAttribute).timesOnScreen.push(d.eventTimeSeconds);
		});

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

		return charactersArray;
	});
	console.log(episodeData, charactersData);
</script>

<g></g>
