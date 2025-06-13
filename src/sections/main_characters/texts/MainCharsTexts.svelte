<script>
  import TextsJerry from "./TextsJerry.svelte";
  import TextsGeorge from "./TextsGeorge.svelte";

  let { charData } = $props()
</script>

<TextsJerry {charData} />
<TextsGeorge {charData} />