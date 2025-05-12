<script>
	// @ts-ignore
	import { csv } from 'd3-fetch';
	import { onMount } from 'svelte';
	import { inview } from 'svelte-inview';
	import { navBarColor } from '../stores/navbarColor';
	import { soundAuthModaleIsOpen } from '../stores/soundAuthStore';
	// @ts-ignore
	import Navbar from '../UI/Navbar.svelte';
	import Prologue from '../sections/prologue/Prologue.svelte';
	import SoundAuthPopup from '../UI/SoundAuthPopup.svelte';
	import Title from '../sections/Title.svelte';
	import Calendar from '../sections/calendar/Calendar.svelte';
	import EpisodeExample from '../sections/episode_example/EpisodeExample.svelte';
	import Quotes from '../sections/quotes/Quotes.svelte';
	import MainCharsSection from '../sections/main_characters/MainCharsSection.svelte';
	import SupportingCharsSection from '../sections/supporting_characters/SupportingCharsSection.svelte';
	import LocationsSection from '../sections/locations/locationsSection.svelte';
	import Catalog from '../sections/catalog/Catalog.svelte';
	import MethodologyAndCredits from '../sections/MethodologyAndCredits.svelte';
	import Footer from '../sections/Footer.svelte';

	const episodesDataUrl = 'https://amdufour.github.io/hosted-data/apis/episodesData.csv';
	const sonificationCharactersDataUrl =
		'https://amdufour.github.io/hosted-data/apis/sonificationCharactersData.csv';
	const sonificationLocationDataUrl =
		'https://amdufour.github.io/hosted-data/apis/sonificationLocationsData.csv';

	onMount(() => {
		setTimeout(() => {
			$soundAuthModaleIsOpen = true;
		}, 4000);
	});

	const options = {};
</script>

<main>
	<Navbar />
	<div
		class="text-white"
		use:inview={options}
		oninview_change={(/** @type {{ detail: { inView: any; }; }} */ event) => {
			const { inView } = event.detail;
			$navBarColor = inView ? 'white' : 'pink';
		}}
	>
		<Prologue />
		{#if $soundAuthModaleIsOpen}
			<SoundAuthPopup />
		{/if}
		<Title />
	</div>
	<div class="bg-white text-black">
		<Calendar />
		<!-- {#await csv(episodesDataUrl) then episodesData}
			<EpisodeExample {episodesData} />
		{/await} -->
		<!-- <Quotes />
		<MainCharsSection />
		<SupportingCharsSection />
		<LocationsSection /> -->
		<!-- {#await csv(episodesDataUrl) then episodesData}
			{#await csv(sonificationCharactersDataUrl) then sonificationCharactersData}
				{#await csv(sonificationLocationDataUrl) then sonificationLocationData}
					<Catalog {episodesData} {sonificationCharactersData} {sonificationLocationData} />
				{/await}
			{/await}
		{/await} -->
		<!-- <Quotes />
		<MethodologyAndCredits />
		<Footer /> -->
	</div>
</main>
