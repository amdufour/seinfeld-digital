<script>
	// @ts-nocheck

	import { scaleBand } from 'd3-scale';
	import { characters } from '../../../../data/characters';
	import CharactersList from './CharactersList.svelte';
	import Scenes from '../Scenes.svelte';
	import PresenceOnScreen from './PresenceOnScreen.svelte';
	import CausedLaughs from './CausedLaughs.svelte';
	import CharactersStats from './CharactersStats.svelte';

	let { width, statsWidth, labelsWidth, scenes, xScale, episodeData, episodeDuration } = $props();

	const charactersOnScreen = $derived.by(() => {
		const data = episodeData.filter((e) => e.eventCategory === 'CHARACTERS');
		const charactersArray = characters.map((c) => {
			return { id: c.id, label: c.label, color: c.color, timesOnScreen: [] };
		});
		data.forEach((d) => {
			charactersArray
				.find((c) => c.id === d.eventAttribute)
				.timesOnScreen.push(+d.eventTimeSeconds);
		});

		const charactersOnScreen = charactersArray.filter((c) => c.timesOnScreen.length > 0);

		if (
			episodeData.find(
				(d) => d.eventCategory === 'CAUSES THE LAUGH' && d.eventAttribute === 'The situation'
			)
		) {
			charactersOnScreen.push({ id: 'The situation', label: 'The situation', color: '#5443B0' });
		}

		return charactersOnScreen;
	});

	const charactersCausedLaughs = $derived.by(() => {
		const data = episodeData.filter((e) => e.eventCategory === 'CAUSES THE LAUGH');
		const charactersArray = characters.map((c) => {
			return { id: c.id, label: c.label, color: c.color, causedLaughs: [] };
		});
		data.forEach((d) => {
			charactersArray.find((c) => c.id === d.eventAttribute).causedLaughs.push(+d.eventTimeSeconds);
		});

		return charactersArray.filter((c) => c.causedLaughs.length > 0);
	});

	const vizHeight = $derived(charactersOnScreen.length * 48 + 32);

	const yScale = $derived(
		scaleBand()
			.domain(charactersOnScreen.map((char) => char.id))
			.range([32, vizHeight])
			.padding(0.6)
	);
</script>

<div class="flex">
	<CharactersList {labelsWidth} characters={charactersOnScreen} {yScale} />
	<svg {width} height={vizHeight}>
		<Scenes {scenes} {xScale} height={vizHeight} />
		<PresenceOnScreen characters={charactersOnScreen} {xScale} {yScale} />
		<CausedLaughs characters={charactersCausedLaughs} {xScale} {yScale} />
	</svg>
	<CharactersStats
		width={statsWidth}
		height={vizHeight}
		{yScale}
		{charactersOnScreen}
		{charactersCausedLaughs}
		{episodeDuration}
	/>
</div>
