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
</script>

<svelte:window bind:innerWidth />

<svg width={svgWidth} height="132"></svg>