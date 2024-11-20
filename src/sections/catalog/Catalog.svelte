<script>
  import { episodesInfo } from "../../data/EpisodesInfo";
  import SeasonsStrip from "../../UI/SeasonsStrip.svelte";
  import EpisodeDetails from "./EpisodeDetails.svelte";

  let currentSeason = $state(1);
  let currentEpisode = $state(1);
  let currentEpisodeInfo = $derived(episodesInfo.find(e => e.season === currentSeason && e.episode === currentEpisode));
</script>

<div class="w-screen h-screen flex">
  <SeasonsStrip />
  <div>
    <EpisodeDetails 
      episodes={episodesInfo}
      bind:currentSeason={currentSeason}
      bind:currentEpisode={currentEpisode}
      episodeInfo={currentEpisodeInfo}  
    />
  </div>
</div>