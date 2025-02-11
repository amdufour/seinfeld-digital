<script>
	// @ts-nocheck

	import { scaleBand } from 'd3-scale';
	import { characters } from '../../../../data/characters';
	import { getId } from '../../../../utils/sonificationToIds';
	import CharactersList from './CharactersList.svelte';
	import Scenes from '../Scenes.svelte';
	import PresenceOnScreen from './PresenceOnScreen.svelte';
	import CausedLaughs from './CausedLaughs.svelte';
	import CharactersStats from './CharactersStats.svelte';

	let {
		width,
		statsWidth,
		labelsWidth,
		scenes,
		xScale,
		episodeData,
		episodeDuration,
		isHover,
		hoveredPosition,
		hoveredTime,
		isPlaying,
		playingScene,
		sonificationCharactersData
	} = $props();

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

	const hoveredCharacters = $derived.by(() => {
		let hoveredCharactersArray = [];

		if (isPlaying) {
			const playingChars = sonificationCharactersData
				.filter((d) => +d.SceneNumber === playingScene)
				.map((d) => d.Character);
			playingChars.forEach((char) => {
				const ids = getId(char);
				hoveredCharactersArray = hoveredCharactersArray.concat(ids);
			});
		} else {
			const time = Math.floor(hoveredTime / 5) * 5;

			charactersOnScreen.forEach((char) => {
				if (char.timesOnScreen && char.timesOnScreen.includes(time)) {
					hoveredCharactersArray.push(char.id);
				}
			});

			const situationLaughs = charactersCausedLaughs.find(
				(char) => char.id === 'The situation'
			)?.causedLaughs;
			if (situationLaughs && situationLaughs.includes(time)) {
				hoveredCharactersArray.push('The situation');
			}
		}

		return hoveredCharactersArray;
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
	<CharactersList
		{labelsWidth}
		characters={charactersOnScreen}
		{yScale}
		{isHover}
		{isPlaying}
		{hoveredCharacters}
	/>
	<svg class="flex-shrink-0" {width} height={vizHeight}>
		<Scenes {scenes} {xScale} height={vizHeight} {isHover} {hoveredTime} />
		<PresenceOnScreen
			characters={charactersOnScreen}
			{xScale}
			{yScale}
			{scenes}
			{isHover}
			{hoveredTime}
			{isPlaying}
			{playingScene}
		/>
		<CausedLaughs characters={charactersCausedLaughs} {xScale} {yScale} {isHover} {hoveredTime} />
		{#if isHover}
			<line x1={hoveredPosition} y1={0} x2={hoveredPosition} y2={vizHeight} stroke="#12020A" />
		{/if}
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
