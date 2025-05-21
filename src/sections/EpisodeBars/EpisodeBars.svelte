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

    let minutes = ['00', "05", "10", "15", "20", "25", "30"];
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div style="padding-top: {topMargin}px;">
    <svg width={barsMaxWidth + 50} height={barsHeight + 70} style="margin-top: -35px; margin-left: -25px;">
        <g transform="translate(25, 0)">
            <!-- Time -->
            {#each minutes as minute}
                <g transform={`translate(${episodeTimeScale(+minute * 60)}, 0)`}>
                    <text
                        class="number"
                        x={0}
                        y={20}
                        text-anchor="middle"
                        fill="#928D90"
                    >
                        {`${minute}:00`}
                    </text>
                    <line
                        x1={0}
                        y1={25}
                        x2={0}
                        y2={barsHeight + 45}
                        stroke="#928D90"
                    />
                    <text
                        class="number"
                        x={0}
                        y={barsHeight + 60}
                        text-anchor="middle"
                        fill="#928D90"
                    >
                        {`${minute}:00`}
                    </text>
                </g>
            {/each}
        </g>

        <g transform="translate(25, 35)">
            <!-- Episodes bars -->
            {#each episodesData as episode}
                <rect
                    x={0}
                    y={episodeVerticalPositionScale(`${episode.season}-${episode.episode}`)}
                    width={episodeTimeScale(episode.duration)}
                    height={episodeVerticalPositionScale.bandwidth()}
                    fill="#DDDBDC"
                />

                <!-- Laugh bars -->
                {#each episode.laughs as laugh}
                    <rect
                        x={episodeTimeScale(+laugh.eventTimeSeconds)}
                        y={episodeVerticalPositionScale(`${episode.season}-${episode.episode}`)}
                        width={episodeTimeScale(5)}
                        height={episodeVerticalPositionScale.bandwidth()}
                        fill="#12020A"
                        pointer-events="none"
                    />
                {/each}
            {/each}
        </g>
    </svg>
</div>