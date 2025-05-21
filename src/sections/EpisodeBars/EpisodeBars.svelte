<script lang="ts">
    import { max } from "d3-array";
    import { scaleLinear, scaleBand } from "d3-scale";
    import type { Episode } from "$lib/types/episode";

    let { episodesData, barsHeight }: { episodesData: Episode[]; barsHeight: number } = $props();
    $inspect(episodesData, barsHeight);

    let innerWidth = $state(1600);
    let innerHeight = $state(800);
    let barsMaxWidth = $derived( 2 * innerWidth / 3);
    let topMargin = $derived((innerHeight - barsHeight) / 2);

    let episodeMaxDuration = $derived(max(episodesData, d => d.duration) ?? 0);

    let episodeTimeScale = $derived(
        scaleLinear()
            .domain([0, episodeMaxDuration])
            .range([0, barsMaxWidth])
    );
    let episodeVerticalPositionScale = $derived(
        scaleBand()
            .domain(episodesData.map(d => `${d.season}-${d.episode}`))
            .range([0, barsHeight])
    );
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div style="padding-top: {topMargin}px;">
    <svg width={barsMaxWidth} height={barsHeight}>
        <!-- Episodes bars -->
        {#each episodesData as episode}
            <rect
                x={0}
                y={episodeVerticalPositionScale(`${episode.season}-${episode.episode}`)}
                width={episodeTimeScale(episode.duration)}
                height={episodeVerticalPositionScale.bandwidth()}
                fill="#DDDBDC"
            />
        {/each}
    </svg>
</div>