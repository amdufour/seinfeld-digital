<script>
  import PlayIcon from "../../icons/PlayIcon.svelte";

  let { canPlayQuote, audioClipId, duration, playQuote = $bindable() } = $props()
</script>

<button class="relative ml-10 mr-1" style={'top: 6px;'} onclick={() => playQuote(audioClipId, duration)} disabled={!canPlayQuote}>
  <PlayIcon diameter={28} color={canPlayQuote ? '#F9F5F7' : '#787577'} />
</button>