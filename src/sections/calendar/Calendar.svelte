<script>
	import { onMount } from 'svelte';
	import { scaleTime } from 'd3-scale';
	import { seasons } from '$lib/data/seasons';
	import { episodesInfo } from '$lib/data/episodesInfo';

	/**
	 * @type {number}
	 */
	let innerWidth = $state(1600);
	let innerHeight = $state(800);
	let seasonsWidth = $derived(innerWidth >= 793 ? 130 : 100);
	let headersHeight = $derived(innerWidth >= 793 ? 68 : 36);
	let episodeRadius = $derived(innerWidth >= 793 ? 15 : 7);

	const tvSeasons = [
		{
			season: 'Fall',
			months: ['Sep', 'Oct', 'Nov', 'Dec']
		},
		{
			season: 'Spring',
			months: ['Jan', 'Feb', 'Mar', 'Apr']
		},
		{
			season: 'Summer',
			months: ['May', 'Jun', 'July', 'Aug']
		}
	];

	const getTimeDomain = (/** @type {number} */ season, /** @type {string} */ date) => {
		switch (season) {
			case 1:
				return date === 'July 5 1989'
					? [new Date(1988, 8, 1), new Date(1989, 7, 31)]
					: [new Date(1989, 8, 1), new Date(1990, 7, 31)];
			case 2:
				return [new Date(1990, 8, 1), new Date(1991, 7, 31)];
			case 3:
				return [new Date(1991, 8, 1), new Date(1992, 7, 31)];
			case 4:
				return [new Date(1992, 8, 1), new Date(1993, 7, 31)];
			case 5:
				return [new Date(1993, 8, 1), new Date(1994, 7, 31)];
			case 6:
				return [new Date(1994, 8, 1), new Date(1995, 7, 31)];
			case 7:
				return [new Date(1995, 8, 1), new Date(1996, 7, 31)];
			case 8:
				return [new Date(1996, 8, 1), new Date(1997, 7, 31)];
			default:
				return [new Date(1997, 8, 1), new Date(1998, 7, 31)];
		}
	};

	const getXPosition = (/** @type {number} */ season, /** @type {string} */ date) => {
		const timeScale = scaleTime()
			.domain(getTimeDomain(season, date))
			.range([15, innerWidth - seasonsWidth - 15]);
		return timeScale(new Date(date));
	};

	let getYPosition = $state((/** @type {number} */ season, /** @type {string} */ date) => {});
	onMount(() => {
		getYPosition = (/** @type {number} */ season, /** @type {string} */ date) => {
			const seasonBlock = document
				.getElementById(`catalog-season-${season}`)
				?.getBoundingClientRect();

			if (!seasonBlock) return 0;

			if (season === 1) {
				return date === 'July 5 1989' ? seasonBlock.height / 2 - 50 : seasonBlock.height / 2 - 10;
			} else {
				return seasonBlock.top - headersHeight + seasonBlock.height / 2;
			}
		};
	});
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div class="flex h-screen w-screen">
	<!-- Seasons -->
	<div class="flex flex-col" style="width: {seasonsWidth}px;">
		{#each seasons as season, i}
			<div
				id={`catalog-season-${i + 1}`}
				class="flex flex-col justify-center px-4"
				style="flex-grow: {i === 0 ? 2 : 1}; color: {i > 1
					? '#F9F5F7'
					: '#12020A'}; background: {season.color};
          font-size: {innerWidth >= 793 ? '1.125rem' : '0.875rem'};"
			>
				<div class="uppercase">{season.id}</div>
				<div>{season.years}</div>
			</div>
		{/each}
	</div>

	<!-- Months -->
	<div class="flex grow">
		{#each tvSeasons as tvSeason, i}
			<div
				class="flex"
				style="width: {(innerWidth - seasonsWidth) / 3}px; background: {i === 1
					? '#EEECED'
					: 'transparent'};"
			>
				<div class="grow">
					<div class="flex grow flex-col">
						<div class="mt-2 flex grow justify-center">
							<div>{tvSeason.season}</div>
						</div>
						{#if innerWidth >= 793}
							<div class="flex grow">
								{#each tvSeason.months as month}
									<div class="flex grow justify-center text-base">
										<div>{month}</div>
									</div>
								{/each}
							</div>
						{/if}
					</div>
				</div>
			</div>
		{/each}
	</div>

	<!-- Episodes -->
	<svg
		class="absolute"
		width={innerWidth - seasonsWidth}
		height={innerHeight - headersHeight}
		style="top: {headersHeight}px; left: {seasonsWidth}px;"
	>
		{#each episodesInfo as episode}
			<g
				transform={`translate(${getXPosition(episode.season, episode.date_aired)}, ${getYPosition(episode.season, episode.date_aired)})`}
				style="cursor: default;"
			>
				<circle
					r={episodeRadius}
					fill={seasons.find((s) => s.seasonNum === episode.season)?.color}
				/>
				{#if innerWidth >= 793}
					<text
						class="number"
						text-anchor="middle"
						dominant-baseline="middle"
						dy={1}
						fill={episode.season > 2 ? '#F9F5F7' : '#12020A'}>{episode.episode}</text
					>
				{/if}
			</g>
		{/each}
	</svg>
</div>
