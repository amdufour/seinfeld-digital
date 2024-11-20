<script>
  import { seasons } from "../../data/seasons";
  import Dropdown from "../../UI/Dropdown.svelte";

  let { episodes, currentSeason = $bindable(), currentEpisode = $bindable() } = $props()
  const seasonNums = seasons.map(s => s.seasonNum)

  let availableEpisodes = $derived(episodes.filter((/** @type {{ season: any; }} */ e) => e.season === currentSeason).map((/** @type {{ episode: any; }} */ e) => e.episode))
</script>

<div class="flex items-center mt-1">
  <!-- Seasons dropdown -->
  <div class="px-2">
    <Dropdown
      options={seasonNums}
      bind:value={currentSeason}
      prefix="s"
    />
  </div>

  <!-- Episodes dropdown -->
  <div class="px-2">
    <Dropdown
      options={availableEpisodes}
      bind:value={currentEpisode}
      prefix="e"
    />
  </div>

</div>