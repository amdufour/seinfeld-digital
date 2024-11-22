<script>
	import { characters } from '../../../data/characters';
	import CharactersList from './CharactersList.svelte';
	import Scenes from './Scenes.svelte';

	let { width, labelsWidth, scenes, xScale } = $props();

	const vizHeight = characters.length * 48 + 32 + 20;
</script>

<div class="flex">
	<CharactersList {labelsWidth} />
	<svg {width} height={vizHeight}>
		<Scenes {scenes} {xScale} height={vizHeight} />
	</svg>
</div>
