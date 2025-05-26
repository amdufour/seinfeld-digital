<script lang="ts">
  import { scaleLinear } from "d3-scale";

  import { characters } from "$lib/data/characters";
  import { charsScreenTime } from "$lib/data/onScreen";
  import { getCharacterImagePath } from "../../utils/getCharacterImagePath";

  let innerWidth = $state(1600);
  let innerHeight = $state(800);
  let containerWidth = $state(1200);
  let headerHeight = $state(100);

  let chartWidth = $derived(containerWidth - 64 <= 1200 ? containerWidth - 64 : 1200);
  let chartHeight = $derived(innerHeight - headerHeight - 60);
  let imageHeight = $derived(chartHeight / 5);

  // Calculate the total width of the Marimekko bars
  let totalBarsScreenTime = $derived(
    charsScreenTime.reduce((acc, char) => acc + char.screenTime, 0)
  );
  let widthCoverage = $derived(chartWidth - 60 - 150);

  let screenTimeScale = $derived(
    scaleLinear()
      .domain([0, totalBarsScreenTime])
      .range([0, widthCoverage])
  );

  const laughsScale = $derived(
    scaleLinear()
      .domain([0, Math.max(...charsScreenTime.map((char) => char.onScreenWithoutLaughs))])
      .range([0, chartHeight / 2])
  );

  const charsData = $derived.by(() => {
    const array = charsScreenTime;
    array.forEach((char, i) => {
      char['screenTimeWidth'] = screenTimeScale(char.screenTime);
      char['paddingLeft'] = i === 0 ? 0 : charsScreenTime.slice(0, i).reduce((acc, c) => acc + c.screenTimeWidth + 50, 0);
      char['laughsWidth'] = laughsScale(char.causeLaughsWhileOnScreen);
      char['noLaughsWidth'] = laughsScale(char.onScreenWithoutLaughs);
    });

    return array;
  })
</script>

<svelte:window bind:innerWidth={innerWidth} bind:innerHeight={innerHeight} />

<div class="h-screen w-screen">
  <div class="container" bind:clientWidth={containerWidth}>
    <!-- Header -->
    <div bind:clientHeight={headerHeight} class="mb-8">
      <h3>Screen time vs laughter rate</h3>
      <div style="max-width: 900px;">If we compare the relative screen time of each of the four lead characters with how much of that screen time they generated laughs we can draw a few conclusions.</div>
    </div>

    <!-- Marimekko chart -->
    <svg width={chartWidth} height={chartHeight} style="border: 1px solid cyan;">
      <g transform='translate(30, {chartHeight / 2})'>
        {#each charsData as char}
          <g transform='translate({char.paddingLeft}, 0)'>
            <!-- Name and Image -->
            <g transform='translate({char.screenTimeWidth / 2 - imageHeight / 2}, {-chartHeight / 2})'>
              <foreignobject width={imageHeight} height={imageHeight}>
                <img src="{getCharacterImagePath(char.id)}" alt={char.label} style="width: 100%; height: auto; border-radius: 50%;" />
              </foreignobject>
              <text
                x={imageHeight / 2}
                y={imageHeight + 22}
                text-anchor="middle"
              >{char.label}</text>
            </g>

            <!-- Laughs -->
            <rect
              x={0}
              y={-char.laughsWidth}
              width={char.screenTimeWidth}
              height={char.laughsWidth}
              fill={characters.find(c => c.id === char.id)?.color || 'gray'}
            />

            <!-- No Laugh -->
            <rect
              x={0}
              y={0}
              width={char.screenTimeWidth}
              height={char.noLaughsWidth}
              fill={characters.find(c => c.id === char.id)?.color || 'gray'}
              fill-opacity="0.5"
            />
          </g>
        {/each}
      </g>
    </svg>
  </div>
</div>