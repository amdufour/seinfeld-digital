<script>
  import StarIcon from "../../icons/StarIcon.svelte";
  import TvIcon from "../../icons/TvIcon.svelte";
  import EpisodeControls from "./EpisodeControls.svelte";

  let { episodes, episode } = $props();
</script>

<div class="flex items-end">
  <img 
    class="mr-4"
    src={episode.img_src} 
    alt="Episode cover"  
  />
  <div>
    <div>
      <div class="flex items-center">
        <h2 class="mr-4">{episode.title}</h2>
        <EpisodeControls episodes={episodes} episode={episode} />
      </div>
      <div class="small flex">
        <div class="mr-4 max-w-lg">{episode.description}</div>
        <div>
          <div class="flex items-center mb-1">
            <StarIcon />
            <span class="font-semibold mx-1">IMDb rating:</span>
            <span>{episode.IMDB_rating}/10</span>
          </div>
          <div class="flex items-center">
            <TvIcon />
            <span class="font-semibold mx-1">First aired:</span>
            <span>{episode.date_aired}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  img {
    height: 200px;
  }
  h2 {
    font-size: 4rem;
  }
</style>