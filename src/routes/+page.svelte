<script>
	// @ts-ignore
	import { csv } from 'd3-fetch';
	import { onMount } from 'svelte';
	import { soundAuthModaleIsOpen } from '../stores/soundAuthStore';
	// @ts-ignore
	import Navbar from '../UI/Navbar.svelte';
	import Prologue from '../sections/prologue/Prologue.svelte';
	import SoundAuthPopup from '../UI/SoundAuthPopup.svelte';
	import Title from '../sections/Title.svelte';
	import Quotes from '../sections/quotes/Quotes.svelte';
	import MainCharsSection from '../sections/main_characters/MainCharsSection.svelte';
	import SupportingCharsSection from '../sections/supporting_characters/SupportingCharsSection.svelte';
	import LocationsSection from '../sections/locations/locationsSection.svelte';
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
	<Navbar />
	<!-- <div class="h-screen w-screen">
		{#if $soundAuthModaleIsOpen}
			<SoundAuthPopup />
		{/if}
	</div> -->
	<div class="bg-black text-white">
		<Prologue />
		{#if $soundAuthModaleIsOpen}
			<SoundAuthPopup />
		{/if}
		<Title />
	</div>
	<Quotes />
	<MainCharsSection />
	<SupportingCharsSection />
	<LocationsSection />
	{#await csv(episodesDataUrl) then episodesData}
		<Catalog {episodesData} />
	{/await}
	<Quotes />
	<MethodologyAndCredits />
	<Footer />
</main>
