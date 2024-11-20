<script>
  import { seasons } from "../../data/seasons";
  import Dropdown from "../../UI/Dropdown.svelte";

  let { episodes, episode } = $props()
  const seasonNums = seasons.map(s => s.seasonNum)

  let selectedSeason = $state(episode.season)
  let availableEpisodes = $derived(episodes.filter((/** @type {{ season: any; }} */ e) => e.season === selectedSeason).map((/** @type {{ episode: any; }} */ e) => e.episode))
  let selectedEpisode = $state(1)
</script>

<div class="flex items-center mt-1">
  <!-- Seasons dropdown -->
  <div class="px-2">
    <Dropdown
      options={seasonNums}
      bind:value={selectedSeason}
      prefix="s"
    />
  </div>

  <!-- Episodes dropdown -->
  <div class="px-2">
    <Dropdown
      options={availableEpisodes}
      bind:value={selectedEpisode}
      prefix="e"
    />
  </div>

</div>