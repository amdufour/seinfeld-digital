<script>
  import TextsJerry from "./TextsJerry.svelte";
  import TextsGeorge from "./TextsGeorge.svelte";
  import TextsElaine from "./TextsElaine.svelte";

  let { charData } = $props()
</script>

<TextsJerry {charData} />
<TextsGeorge {charData} />
<TextsElaine {charData} />