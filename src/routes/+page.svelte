<script>
	import { csv, json } from 'd3-fetch';
	import { onMount } from 'svelte';
	import { inview } from 'svelte-inview';
	import { gsap } from 'gsap/dist/gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger);

	import { navBarColor } from '../stores/navbarColor';
	import { soundAuthModaleIsOpen } from '../stores/soundAuthStore';
	import Navbar from '../UI/Navbar.svelte';
	import Prologue from '../sections/prologue/Prologue.svelte';
	import SoundAuthPopup from '../UI/SoundAuthPopup.svelte';
	import Title from '../sections/Title.svelte';
	import Calendar from '../sections/calendar/Calendar.svelte';
	import DataGathering from '../sections/data_gathering/DataGathering.svelte';
	import Quotes from '../sections/quotes/Quotes.svelte';
	import IntroEnd from '../sections/IntroEnd.svelte';
	import MainCharsSection from '../sections/main_characters/MainCharsSection.svelte';
	import SupportingCharsSection from '../sections/supporting_characters/SupportingCharsSection.svelte';
	import LocationsSection from '../sections/locations/locationsSection.svelte';
	import Catalog from '../sections/catalog/Catalog.svelte';
	import MethodologyAndCredits from '../sections/MethodologyAndCredits.svelte';
	import Footer from '../sections/Footer.svelte';

	const episodesDataUrl = 'https://amdufour.github.io/hosted-data/apis/episodes_laughs.min.json';
	const sonificationCharactersDataUrl =
		'https://amdufour.github.io/hosted-data/apis/sonificationCharactersData.csv';
	const sonificationLocationDataUrl =
		'https://amdufour.github.io/hosted-data/apis/sonificationLocationsData.csv';

	onMount(() => {
		setTimeout(() => {
			$soundAuthModaleIsOpen = true;
		}, 4000);
	});

	const showOnlyLatest = false;
</script>

<main>
	<Navbar />
	{#if showOnlyLatest}
		{#await json(episodesDataUrl) then episodesData}
			<div class="bg-white text-black">
				<MainCharsSection {episodesData} />
			</div>
		{/await}
	{:else}
	<div
		class="text-white"
		use:inview={{}}
		oninview_change={(/** @type {{ detail: { inView: any; }; }} */ event) => {
			const { inView } = event.detail;
			$navBarColor = inView ? 'white' : 'pink';
		}}
	>
		<Prologue {ScrollTrigger} />
		{#if $soundAuthModaleIsOpen}
			<SoundAuthPopup />
		{/if}
		<Title />
	</div>
	<div class="bg-white text-black">
			<Calendar {ScrollTrigger} />
			{#await json(episodesDataUrl) then episodesData}
				<DataGathering {episodesData} {ScrollTrigger} />
				<IntroEnd />
				<Quotes />
				<MainCharsSection {episodesData} />
				<SupportingCharsSection />
				<LocationsSection />
				{#await csv(sonificationCharactersDataUrl) then sonificationCharactersData}
					{#await csv(sonificationLocationDataUrl) then sonificationLocationData}
						<Catalog {episodesData} {sonificationCharactersData} {sonificationLocationData} {ScrollTrigger} />
					{/await}
				{/await}
			{/await}
			<Quotes />
		<MethodologyAndCredits />
		<Footer />
	</div>
		{/if}
</main>
