<script>
	import StarIcon from '../../icons/StarIcon.svelte';
	import TvIcon from '../../icons/TvIcon.svelte';
	import EpisodeControls from './EpisodeControls.svelte';

	let {
		episodes,
		currentSeason = $bindable(),
		currentEpisode = $bindable(),
		episodeInfo
	} = $props();
</script>

<div class="flex items-end">
	<img class="mr-4" src={episodeInfo.img_src} alt="Episode cover" />
	<div>
		<div class="flex">
			<div>
				<h2 class="mb-1 mr-4 mt-2">{episodeInfo.title}</h2>
				<div class="small flex">
					<div class="description mr-4">{episodeInfo.description}</div>
					<div>
						<div class="mb-1 flex items-center">
							<StarIcon />
							<span class="mx-1 font-semibold">IMDb rating:</span>
							<span>{episodeInfo.IMDB_rating}/10</span>
						</div>
						<div class="flex items-center">
							<TvIcon />
							<span class="mx-1 font-semibold">First aired:</span>
							<span>{episodeInfo.date_aired}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<EpisodeControls {episodes} bind:currentSeason bind:currentEpisode />
</div>

<style>
	img {
		height: 220px;
	}
	h2 {
		width: 800px;
		font-size: 4rem;
	}
	.description {
		width: 550px;
	}
</style>
