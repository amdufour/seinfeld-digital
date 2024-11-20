<script>
  import Characters from "./Characters.svelte";

  let { width } = $props()
</script>

<div style="width: {width}px">
  <Characters />
</div>