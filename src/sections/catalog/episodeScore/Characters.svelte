<script>
	// @ts-nocheck

	import { characters } from '../../../data/characters';
	import CharactersList from './CharactersList.svelte';
	import Scenes from './Scenes.svelte';
	import PresenceOnScreen from './PresenceOnScreen.svelte';

	let { width, labelsWidth, scenes, xScale, episodeData } = $props();

	const charactersOnScreen = $derived.by(() => {
		const data = episodeData.filter((e) => e.eventCategory === 'CHARACTERS');
		const charactersArray = characters.map((c) => {
			return { id: c.id, color: c.color, timesOnScreen: [] };
		});
		data.forEach((d) => {
			charactersArray.find((c) => c.id === d.eventAttribute).timesOnScreen.push(d.eventTimeSeconds);
		});

		return charactersArray.filter((c) => c.timesOnScreen.length > 0);
	});
	const vizHeight = $derived(charactersOnScreen.length * 48 + 32 + 20);
</script>

<div class="flex">
	<CharactersList {labelsWidth} characters={charactersOnScreen} />
	<svg {width} height={vizHeight}>
		<Scenes {scenes} {xScale} height={vizHeight} />
		<PresenceOnScreen characters={charactersOnScreen} />
	</svg>
</div>
