<script>
  import { seasons } from "../../data/seasons";
  import Dropdown from "../../UI/Dropdown.svelte";

  let { episodes, episode } = $props()
  const seasonNums = seasons.map(s => s.seasonNum)
</script>

<div class="flex items-center">
  <!-- Seasons dropdown -->
  <Dropdown
    options={seasonNums}
    value={episode.season}
    prefix="s"
  />
</div>