<script>
  import { episodesInfo } from "../../data/episodesInfo";
  import SeasonsStrip from "../../UI/SeasonsStrip.svelte";
  import EpisodeDetails from "./EpisodeDetails.svelte";
  import EpisodeData from "./EpisodeData.svelte";

  let currentSeason = $state(1);
  let currentEpisode = $state(1);
  let currentEpisodeInfo = $derived(episodesInfo.find(e => e.season === currentSeason && e.episode === currentEpisode));
</script>

<div class="w-screen h-screen flex">
  <SeasonsStrip />
  <div>
    <!-- Episode details and controls -->
    <EpisodeDetails 
      episodes={episodesInfo}
      bind:currentSeason={currentSeason}
      bind:currentEpisode={currentEpisode}
      episodeInfo={currentEpisodeInfo}  
    />

    <!-- Sonification player -->
    <div class="h-20"></div>

    <!-- Episode data -->
    <EpisodeData />
  </div>
</div>