<script>
  /**
	 * @type {number}
	 */
  $: innerWidth = 0
  const gridContainer = 1280;
  const padding = 30;

  /**
	 * @type {number}
	 */
  $: svgWidth = innerWidth >= gridContainer
    ? gridContainer - (innerWidth - gridContainer) / 2
    : innerWidth - 2 * padding

  /**
	 * @type {number}
	 */
  $: marginLeft = innerWidth >= gridContainer
    ? (innerWidth - gridContainer) / 2
    : padding
</script>

<svelte:window bind:innerWidth />

<div style="margin-left: -{marginLeft}px">
  <svg width={svgWidth} height="132">
    <!-- use each statement here! -->
    <rect class="fill-s1" x={0} y={0} width={500} height={12} />
    <rect class="fill-s2" x={0} y={15} width={500} height={12} />
    <rect class="fill-s3" x={0} y={2*15} width={500} height={12} />
    <rect class="fill-s4" x={0} y={3*15} width={500} height={12} />
    <rect class="fill-s5" x={0} y={4*15} width={500} height={12} />
  </svg>
</div>