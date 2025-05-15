<script>
    import { onMount } from "svelte";
    import gsap from "gsap";
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger);
    import SeasonsStrip from "../../UI/SeasonsStrip.svelte";
    import DataGatheringDetails from "./DataGatheringDetails.svelte";
    import EpisodeExample from "./EpisodeExample.svelte";
	import { episodesInfo } from '$lib/data/episodesInfo';

    let { episodesData } = $props();

    const currentSeason = 5;
	const currentEpisode = 14;
	const episodeInfo = episodesInfo.find(
		(e) => e.season === currentSeason && e.episode === currentEpisode
	);
	const episodeData = $derived(
		episodesData.filter(
			(/** @type {{ season: string; episode: string; eventCategory: string; }} */ d) =>
				d.season === 'Season5' && d.episode === '14'
		)
	);
	const laughData = $derived(
		episodesData.filter(
			(/** @type {{ season: string; episode: string; eventCategory: string; }} */ d) =>
				d.season === 'Season5' && d.episode === '14' && d.eventCategory === 'CAUSES THE LAUGH'
		)
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
</script>

<section id="data-gathering" class="flex">
    <SeasonsStrip />
    <div>
        <DataGatheringDetails {laughData} />
        <EpisodeExample {episodeInfo} {episodeData} {laughData} />
    </div>
</section>