<script>
	// @ts-ignore
	import { csv } from 'd3-fetch';
	import { onMount } from 'svelte';
	import { soundAuthModaleIsOpen } from '../stores/soundAuthStore';
	// @ts-ignore
	import Prologue from '../sections/prologue/Prologue.svelte';
	import SoundAuthPopup from '../UI/SoundAuthPopup.svelte';
	import Title from '../sections/Title.svelte';
	import Quotes from '../sections/quotes/Quotes.svelte';
	import Catalog from '../sections/catalog/Catalog.svelte';
	import MethodologyAndCredits from '../sections/MethodologyAndCredits.svelte';
	import Footer from '../sections/Footer.svelte';

	const episodesDataUrl = 'https://amdufour.github.io/hosted-data/apis/episodesData.csv';

	const openModale = () => {
		$soundAuthModaleIsOpen = true;
		document.body.style.position = 'fixed';
		document.body.style.top = `-${window.scrollY}px`;
	};

	onMount(() => {
		setTimeout(() => {
			openModale();
		}, 4000);
	});
</script>

<main>
	<div class="bg-black text-white">
		<Prologue />
		{#if $soundAuthModaleIsOpen}
			<SoundAuthPopup />
		{/if}
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
