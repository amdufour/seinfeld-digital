<script>
  import { episodesInfo } from "../../data/EpisodesInfo";
  import SeasonsStrip from "../../UI/SeasonsStrip.svelte";
  import EpisodeDetails from "./EpisodeDetails.svelte";

  let currentSeason = $state(1);
  let currentEpisode = $state(1);
  let currentEpisodeInfo = episodesInfo.find(e => e.season === currentSeason && e.episode === currentEpisode);
</script>

<div class="w-screen h-screen flex">
  <SeasonsStrip />
  <div>
    <EpisodeDetails episode={currentEpisodeInfo}  />
  </div>
</div>