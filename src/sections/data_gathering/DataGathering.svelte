<script>
    import { onMount } from "svelte";
    import gsap from "gsap";
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger);
    import SeasonsStrip from "../../UI/SeasonsStrip.svelte";
    import DataGatheringDetails from "./DataGatheringDetails.svelte";

    let { episodesData } = $props();

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
        <DataGatheringDetails />
    </div>
</section>