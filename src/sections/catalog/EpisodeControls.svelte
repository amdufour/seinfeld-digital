<script>
  import { seasons } from "../../data/seasons";
  import Dropdown from "../../UI/Dropdown.svelte";
  import Prev from "../../icons/Prev.svelte";
  import Next from "../../icons/Next.svelte";

  let { episodes, currentSeason = $bindable(), currentEpisode = $bindable() } = $props()
  const seasonNums = seasons.map(s => s.seasonNum)

  let availableEpisodes = $derived(episodes.filter((/** @type {{ season: any; }} */ e) => e.season === currentSeason).map((/** @type {{ episode: any; }} */ e) => e.episode))

  const handleGoToPrevEpisode = () => {
    if (currentEpisode === 1) {
      currentSeason = currentSeason - 1
      const seasonEpisodes = episodes.filter((/** @type {{ season: any; }} */ e) => e.season === currentSeason)
      currentEpisode = seasonEpisodes[seasonEpisodes.length - 1].episode
    } else {
      currentEpisode = currentEpisode - 1
    }
  }

  const handleGoToNextEpisode = () => {
    const seasonEpisodes = episodes.filter((/** @type {{ season: any; }} */ e) => e.season === currentSeason)
    const seasonLastEpisode = seasonEpisodes[seasonEpisodes.length - 1].episode
    if (currentEpisode === seasonLastEpisode) {
      currentSeason = currentSeason + 1
      currentEpisode = 1
      console.log(currentSeason, currentEpisode)
    } else {
      currentEpisode = currentEpisode + 1
    }
  }
</script>

<div class="flex items-center pb-3">
  <!-- Previous episode -->
   <button 
    class="p-2" 
    onclick={handleGoToPrevEpisode}
    disabled={currentSeason === 1 && currentEpisode === 1}
  >
    <Prev color={currentSeason === 1 && currentEpisode === 1 ? "#BEBABC" : "#E71D80"} />
  </button>

  <!-- Seasons dropdown -->
  <div class="mx-2">
    <Dropdown
      options={seasonNums}
      bind:value={currentSeason}
      prefix="s"
    />
  </div>

  <!-- Episodes dropdown -->
  <div class="mx-2">
    <Dropdown
      options={availableEpisodes}
      bind:value={currentEpisode}
      prefix="e"
    />
  </div>

  <!-- Next episode -->
  <button 
    class="p-2" 
    onclick={handleGoToNextEpisode}
    disabled={currentSeason === 9 && currentEpisode === 24}
  >
    <Next color={currentSeason === 9 && currentEpisode === 24 ? "#BEBABC" : "#E71D80"} />
  </button>
</div>