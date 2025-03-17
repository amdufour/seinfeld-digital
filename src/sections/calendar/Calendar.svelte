<script>
	import { scaleTime } from 'd3-scale';
	import { forceSimulation, forceX, forceY, forceCollide } from 'd3-force';
	import { seasons } from '$lib/data/seasons';
	import { episodesInfo } from '$lib/data/episodesInfo';

	/**
	 * @type {number}
	 */
	let innerWidth = $state(1600);
	let innerHeight = $state(800);
	let screenSize = $derived({ width: innerWidth, height: innerHeight });
	let seasonsWidth = $derived(screenSize.width >= 793 ? 130 : 100);
	let headersHeight = $derived(screenSize.width >= 793 ? 68 : 36);
	let episodeRadius = $derived(screenSize.width >= 793 ? 15 : 10);

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

	let nodes = $state([]);

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
				return date === 'August 12 1992' || date === 'August 19 1992'
					? [new Date(1991, 8, 1), new Date(1992, 7, 31)]
					: [new Date(1992, 8, 1), new Date(1993, 7, 31)];
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

	$effect(() => {
		const getXPosition = (/** @type {number} */ season, /** @type {string} */ date) => {
			const timeScale = scaleTime()
				.domain(getTimeDomain(season, date))
				.range([15, screenSize.width - seasonsWidth - 15]);
			return timeScale(new Date(date));
		};
		console.log('in effect');
		const getYPosition = (/** @type {number} */ season, /** @type {string} */ date) => {
			const seasonBlock = document
				.getElementById(
					`catalog-season-${date === 'August 12 1992' || date === 'August 19 1992' ? season - 1 : season}`
				)
				?.getBoundingClientRect();

			if (!seasonBlock) return 0;

			if (season === 1) {
				return date === 'July 5 1989' ? seasonBlock.height / 2 - 50 : seasonBlock.height / 2 - 10;
			} else {
				return seasonBlock.top - headersHeight + seasonBlock.height / 2;
			}
		};

		let simulation = forceSimulation(episodesInfo);
		simulation.on('tick', () => {
			console.log('tick');
			nodes = simulation.nodes();
		});

		console.log('run the simulation');
		simulation
			.force('x', forceX((d) => getXPosition(d.season, d.date_aired)).strength(1))
			.force('y', forceY((d) => getYPosition(d.season, d.date_aired)).strength(0.8))
			.force('collide', forceCollide().radius(episodeRadius).strength(1))
			.alpha(0.5)
			.alphaDecay(0.1);
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
		{#each nodes as node}
			<g transform={`translate(${node.x}, ${node.y})`} style="cursor: default;">
				<circle
					r={episodeRadius}
					fill={node.isSpecial
						? '#BEBABC'
						: seasons.find((s) => s.seasonNum === node.season)?.color}
				/>
				{#if innerWidth >= 793}
					<text
						class="number"
						text-anchor="middle"
						dominant-baseline="middle"
						dy={1}
						fill={node.season > 2 && !node.isSpecial ? '#F9F5F7' : '#12020A'}>{node.episode}</text
					>
				{/if}
			</g>
		{/each}
	</svg>
</div>
