<script>
	import { onMount } from 'svelte';
	// @ts-ignore
	import { csv } from 'd3-fetch';
	// @ts-ignore
	import Prologue from '../sections/prologue/Prologue.svelte';
	import Title from '../sections/Title.svelte';
	import Catalog from '../sections/catalog/Catalog.svelte';
	import MethodologyAndCredits from '../sections/MethodologyAndCredits.svelte';
	import Footer from '../sections/Footer.svelte';

	/**
	 * @type {any}
	 */
	let promise = $state(getEpisodesData());

	async function getEpisodesData() {
		const res = await csv(
			'https://d3js-in-action-third-edition.github.io/hosted-data/apis/episodesData.csv'
		);
		return res;
	}
</script>

<main>
	<div class="bg-black text-white">
		<Prologue />
		<Title />
	</div>
	{#await promise then episodesData}
		<Catalog {episodesData} />
	{/await}
	<MethodologyAndCredits />
	<Footer />
</main>
