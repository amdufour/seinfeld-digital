<script>
	import StarIcon from '../../icons/StarIcon.svelte';
	import TvIcon from '../../icons/TvIcon.svelte';
	import MoreIcon from '../../icons/More.svelte';
	import LessIcon from '../../icons/Less.svelte';
	import EpisodeControls from './EpisodeControls.svelte';

	let {
		episodes,
		currentSeason = $bindable(),
		currentEpisode = $bindable(),
		episodeInfo
	} = $props();

	let innerWidth = $state(1200);
	let showMore = $state(false);

	const toggleShowMore = () => {
		showMore = !showMore;
	};
</script>

<svelte:window bind:innerWidth />

<div style="display: {innerWidth >= 1280 ? 'flex' : 'block'}">
	{#if innerWidth >= 1280}
		<div class="shrink-0" style="width: 450px;">
			<img src={episodeInfo.img_src} alt="Episode cover" />
		</div>
	{/if}
	<div style="margin-top: {innerWidth > 540 ? 0 : 56}px;">
		<EpisodeControls {episodes} bind:currentSeason bind:currentEpisode />
		<div class="mx-4">
			<div
				class="mt-4 flex items-start justify-between"
				style="margin-left: {innerWidth >= 1280 ? 16 : 0}px;"
			>
				<h2
					style="overflow: {showMore ? 'visible' : 'hidden'}; white-space: {showMore
						? 'auto'
						: 'nowrap'}"
				>
					{episodeInfo.title}
				</h2>
				{#if innerWidth < 1280}
					<button class="ml-4" onclick={toggleShowMore}>
						{#if showMore}
							<LessIcon />
						{:else}
							<MoreIcon />
						{/if}
					</button>
				{/if}
			</div>
			{#if (showMore && innerWidth < 1280) || innerWidth >= 1280}
				<!-- Episode details -->
				{#if innerWidth < 1280}
					<div style="max-width: 450px; width: 100%;">
						<img class="mt-2" src={episodeInfo.img_src} alt="Episode cover" />
					</div>
				{/if}
				<div
					style="margin-left: {innerWidth >= 1280 ? 16 : 0}px; margin-bottom: {innerWidth >= 1280
						? 0
						: 42}px; display: {innerWidth >= 1280 ? 'flex' : 'block'};"
				>
					<div class="description mid mr-4 mt-2">{episodeInfo.description}</div>
					<div class="mid mt-2 shrink-0">
						<div class="mb-2 flex items-center">
							<StarIcon />
							<span class="relative" style="top: 2px;">
								<span class="mx-1 font-semibold">IMDb rating:</span>
								<span>{episodeInfo.IMDB_rating.replace(',', '.')}/10</span>
							</span>
						</div>
						<div class="flex items-center">
							<TvIcon />
							<span class="relative" style="top: 2px;">
								<span class="mx-1 font-semibold">First aired:</span>
								<span>{episodeInfo.date_aired}</span>
							</span>
						</div>
					</div>
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
	.description {
		max-width: 700px;
		max-height: 70px;
		overflow: hidden;
	}
	@media (max-width: 540px) {
		h2 {
			font-size: 2.1rem !important;
			text-overflow: ellipsis;
		}
	}
</style>
