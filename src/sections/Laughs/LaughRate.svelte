<script lang="ts">
    import type { Episode } from "$lib/types/episode";
    import type { ScaleBand, ScaleLinear } from "d3-scale";
    import PercentageAxes from "./PercentageAxes.svelte";

    let { episodesData, 
          barsHeight, 
          width, 
          topMargin, 
          episodeVerticalPositionScale, 
          percentageScale, 
          handleMouseEnter = $bindable(), 
          handleMouseLeave = $bindable() } : { 
          episodesData: Episode[]; 
          barsHeight: number; 
          width: number; topMargin: number; 
          episodeVerticalPositionScale: ScaleBand<string>; 
          percentageScale: ScaleLinear<number, number>, 
          handleMouseEnter: (e: MouseEvent & { currentTarget: EventTarget & SVGRectElement; }, episode: Episode) => void, 
          handleMouseLeave: () => void } = $props();
</script>

<div class="relative ml-8">
    <svg width={width + 40} height={barsHeight + 70} style="margin-top: -35px; padding-top: {topMargin}px;">
        <g transform="translate(20, 0)">
            <!-- Percentages -->
            <PercentageAxes {barsHeight} {width} />

            <!-- Label -->
            <text 
                class="small accent" 
                x={10} 
                y={20}>Laugh rate</text>

            <g transform="translate(0, 35)">
                <!-- Laugh rate bars -->
                {#each episodesData as episode}
                    <rect
                        x={0}
                        y={episodeVerticalPositionScale(`${episode.season}-${episode.episode}`)}
                        width={percentageScale(episode.laughs.length * 5 / episode.duration)}
                        height={episodeVerticalPositionScale.bandwidth()}
                        fill="#E71D80"
                        role="document"
					    onmouseenter={(e) => handleMouseEnter(e, episode)}
					    onmouseleave={handleMouseLeave}
                    />
                {/each}
            </g>
        </g>
    </svg>
</div>