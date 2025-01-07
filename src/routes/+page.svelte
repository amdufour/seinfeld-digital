<script>
	// @ts-ignore
	import { csv } from 'd3-fetch';
	import { onMount } from 'svelte';
	// @ts-ignore
	import Prologue from '../sections/prologue/Prologue.svelte';
	import SoundAuthPopup from '../UI/SoundAuthPopup.svelte';
	import Title from '../sections/Title.svelte';
	import Quotes from '../sections/quotes/Quotes.svelte';
	import Catalog from '../sections/catalog/Catalog.svelte';
	import MethodologyAndCredits from '../sections/MethodologyAndCredits.svelte';
	import Footer from '../sections/Footer.svelte';

	const episodesDataUrl = 'https://amdufour.github.io/hosted-data/apis/episodesData.csv';

	let showPopup = $state(false);
	const openModale = () => {
		showPopup = true;
		document.body.style.position = 'fixed';
		document.body.style.top = `-${window.scrollY}px`;
	};
	const closeModale = () => {
		showPopup = false;
		const scrollY = document.body.style.top;
		document.body.style.position = '';
		document.body.style.top = '';
		window.scrollTo(0, parseInt(scrollY || '0') * -1);
	};

	onMount(() => {
		setTimeout(() => {
			openModale();
		}, 1000);
	});
</script>

<main>
	<div class="bg-black text-white">
		<Prologue />
		<SoundAuthPopup />
		<Title />
	</div>
	<Quotes />
	{#await csv(episodesDataUrl) then episodesData}
		<Catalog {episodesData} />
	{/await}
	<Quotes />
	<MethodologyAndCredits />
	<Footer />
</main>
