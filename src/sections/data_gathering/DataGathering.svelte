<script lang="ts">
  import { onMount } from "svelte";
  import gsap from "gsap";
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger);
  import SeasonsStrip from "../../UI/SeasonsStrip.svelte";
  import DataGatheringDetails from "./DataGatheringDetails.svelte";
  import EpisodeExample from "./EpisodeExample.svelte";
	import AllEpisodes from "./AllEpisodes.svelte";
	import type { Episode } from "$lib/types/episode";
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
			(d: Episode) =>
				d.season === 5 && d.episode === 14
		).map((d: Episode) => d.data)[0]
	);
	const laughData = $derived(
		episodesData.filter(
			(d: Episode) =>
				d.season === 5 && d.episode === 14
		).map((d: { laughs: any; }) => d.laughs)[0]
	);

  onMount(() => {
    // Pin seasons strip
		ScrollTrigger.create({
			trigger: '#data-gathering',
			start: 'top top',
			end: 'bottom bottom',
			pin: '#data-gathering #seasons-strip',
			markers: true
		});
		// Change seasons strip height on scroll
		ScrollTrigger.create({
			trigger: '#all-episodes',
			start: 'top center',
			end: 'bottom top',
			onEnter: () => isAllEpisodesInView = true,
			onLeave: () => isAllEpisodesInView = false,
			onEnterBack: () => isAllEpisodesInView = true,
			onLeaveBack: () => isAllEpisodesInView = false,
		});
  })
</script>

<svelte:window bind:innerHeight />

<section id="data-gathering" class="relative">
		<div class="absolute top-0 left-0">
    	<SeasonsStrip {stripHeight} />
		</div>
    <div class="w-screen" style="padding-left: 25px;">
        <DataGatheringDetails {laughData} />
        <EpisodeExample {episodeInfo} {episodeData} {laughData} />
				<AllEpisodes {episodesData} {stripHeight} />
    </div>
</section>