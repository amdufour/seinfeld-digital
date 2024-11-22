<script>
	import { characters } from '../../../data/characters';
	import CharactersList from './CharactersList.svelte';
	import Scenes from './Scenes.svelte';

	let { width, episodeData } = $props();

	const vizWidth = $derived(width - 176 - 32);
	const vizHeight = characters.length * 48 + 32 + 20;
	const scenesData = $derived(
		episodeData.filter((/** @type { any } */ d) => d.eventCategory === 'SCENE')
	);
</script>

<div class="flex">
	<CharactersList />
	<svg {width} height={vizHeight}>
		<Scenes {scenesData} width={vizWidth} height={vizHeight} />
	</svg>
</div>
