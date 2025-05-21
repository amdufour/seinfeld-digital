<script>
    import { onMount } from "svelte";
    import gsap from "gsap";
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger);
    import SeasonsStrip from "../../UI/SeasonsStrip.svelte";
    import DataGatheringDetails from "./DataGatheringDetails.svelte";
    import EpisodeExample from "./EpisodeExample.svelte";
	import AllEpisodes from "./AllEpisodes.svelte";
	import { episodesInfo } from '$lib/data/episodesInfo';

    let { episodesData } = $props();

	let innerHeight = $state(800);
	let isAllEpisodesInView = $state(false);
	let stripHeight = $derived.by(() => {
		return isAllEpisodesInView ? innerHeight - 100 : innerHeight;
	});

    const currentSeason = 5;
	const currentEpisode = 14;
	const episodeInfo = episodesInfo.find(
		(e) => e.season === currentSeason && e.episode === currentEpisode
	);
	const episodeData = $derived(
		episodesData.filter(
			(/** @type {{ season: number; episode: number; }} */ d) =>
				d.season === 5 && d.episode === 14
		).map((/** @type {{ data: any; }} */ d) => d.data)[0]
	);
	const laughData = $derived(
		episodesData.filter(
			(/** @type {{ season: number; episode: number; }} */ d) =>
				d.season === 5 && d.episode === 14
		).map((/** @type {{ laughs: any; }} */ d) => d.laughs)[0]
	);

    onMount(() => {
        // Pin seasons strip
		ScrollTrigger.create({
			trigger: '#data-gathering',
			start: 'top top',
			end: 'bottom top',
			pin: '#data-gathering #seasons-strip'
		});
    })

	function reduceStripHeight() {
		isAllEpisodesInView = true;
	}
</script>

<svelte:window bind:innerHeight />

<section id="data-gathering" class="flex">
    <SeasonsStrip {stripHeight} />
    <div>
        <DataGatheringDetails {laughData} />
        <EpisodeExample {episodeInfo} {episodeData} {laughData} />
		<AllEpisodes {episodesData} bind:reduceStripHeight />
    </div>
</section>