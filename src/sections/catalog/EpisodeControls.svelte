<script>
	import { seasons } from '../../data/seasons';
	import { isEpisodeValid } from '../../utils/isEpisodeValid';
	import Dropdown from '../../UI/Dropdown.svelte';
	import Prev from '../../icons/Prev.svelte';
	import Next from '../../icons/Next.svelte';
	import Random from '../../icons/Random.svelte';

	let { episodes, currentSeason = $bindable(), currentEpisode = $bindable() } = $props();
	const seasonNums = seasons.map((s) => s.seasonNum);

	let availableEpisodes = $derived(
		episodes
			.filter((/** @type {{ season: any; }} */ e) => e.season === currentSeason)
			.map((/** @type {{ episode: any; }} */ e) => e.episode)
	);

	const handleGoToPrevEpisode = () => {
		/**
		 * @type {number}
		 */
		let newSeason;
		let newEpisode;
		if (currentEpisode === 1) {
			newSeason = currentSeason - 1;
			const seasonEpisodes = episodes.filter(
				(/** @type {{ season: any; }} */ e) => e.season === newSeason
			);
			newEpisode = seasonEpisodes[seasonEpisodes.length - 1].episode;
		} else {
			newSeason = currentSeason;
			newEpisode = currentEpisode - 1;
		}

		currentSeason = newSeason;
		currentEpisode = isEpisodeValid(newSeason, newEpisode) ? newEpisode : newEpisode - 2;
	};

	const handleGoToNextEpisode = () => {
		/**
		 * @type {number}
		 */
		let newSeason;
		let newEpisode;
		const seasonEpisodes = episodes.filter(
			(/** @type {{ season: any; }} */ e) => e.season === currentSeason
		);
		const seasonLastEpisode = seasonEpisodes[seasonEpisodes.length - 1].episode;
		if (currentEpisode === seasonLastEpisode) {
			newSeason = currentSeason + 1;
			newEpisode = 1;
		} else {
			newSeason = currentSeason;
			newEpisode = currentEpisode + 1;
		}

		currentSeason = newSeason;
		currentEpisode = isEpisodeValid(newSeason, newEpisode) ? newEpisode : newEpisode + 2;
	};

	const handleGoToRandomEpisode = () => {
		const newSeason = Math.floor(Math.random() * 9) + 1;
		// @ts-ignore
		const numEpisodes = seasons.find((s) => s.seasonNum === newSeason).numEpisodes;
		const newEpisode = Math.floor(Math.random() * numEpisodes) + 1;

		if (isEpisodeValid(newSeason, newEpisode)) {
			currentSeason = newSeason;
			currentEpisode = newEpisode;
		} else {
			handleGoToRandomEpisode();
		}
	};
</script>

<div class="flex items-center pb-3">
	<!-- Previous episode -->
	<button
		class="p-2"
		onclick={handleGoToPrevEpisode}
		disabled={currentSeason === 1 && currentEpisode === 1}
	>
		<Prev color={currentSeason === 1 && currentEpisode === 1 ? '#BEBABC' : '#E71D80'} />
	</button>

	<!-- Seasons dropdown -->
	<div class="mx-2">
		<Dropdown options={seasonNums} bind:value={currentSeason} prefix="s" />
	</div>

	<!-- Episodes dropdown -->
	<div class="mx-2">
		<Dropdown options={availableEpisodes} bind:value={currentEpisode} prefix="e" />
	</div>

	<!-- Next episode -->
	<button
		class="p-2"
		onclick={handleGoToNextEpisode}
		disabled={currentSeason === 9 && currentEpisode === 24}
	>
		<Next color={currentSeason === 9 && currentEpisode === 24 ? '#BEBABC' : '#E71D80'} />
	</button>

	<!-- Random episode -->
	<div class="flex items-center">
		<div class="small">OR</div>
		<button class="ml-3 flex items-center" onclick={handleGoToRandomEpisode}>
			<div class="icon flex items-center justify-center"><Random /></div>
			<div class="small accent ml-2 w-28 text-left leading-tight">Go to a random episode</div>
		</button>
	</div>
</div>

<style>
	.icon {
		width: 36px;
		height: 36px;
		background-color: #e71d80;
		border-radius: 50%;
	}
</style>
