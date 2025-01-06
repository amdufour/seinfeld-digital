<script>
	// @ts-ignore
	import { csv } from 'd3-fetch';
	// @ts-ignore
	import Prologue from '../sections/prologue/Prologue.svelte';
	import Title from '../sections/Title.svelte';
	import Quotes from '../sections/quotes/Quotes.svelte';
	import Catalog from '../sections/catalog/Catalog.svelte';
	import MethodologyAndCredits from '../sections/MethodologyAndCredits.svelte';
	import Footer from '../sections/Footer.svelte';

	const episodesDataUrl =
		'https://d3js-in-action-third-edition.github.io/hosted-data/apis/episodesData.csv';
</script>

<main>
	<div class="bg-black text-white">
		<Prologue />
		<Title />
	</div>
	<Quotes />
	{#await csv(episodesDataUrl) then episodesData}
		<Catalog {episodesData} />
	{/await}
	<MethodologyAndCredits />
	<Footer />
</main>
