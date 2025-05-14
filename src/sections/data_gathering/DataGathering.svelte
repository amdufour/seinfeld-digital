<script>
    import SeasonsStrip from "../../UI/SeasonsStrip.svelte";
    import DataGatheringDetails from "./DataGatheringDetails.svelte";

    let { episodesData } = $props();
</script>

<section id="data-gathering" class="flex">
    <SeasonsStrip />
    <div>
        <DataGatheringDetails />
    </div>
</section>