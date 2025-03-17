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
			months: ['May', 'Jun', 'Jul', 'Aug']
		}
	];

	/**
	 * @type {any[]}
	 */
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

	const timeScale = $derived(
		scaleTime()
			.domain(getTimeDomain(1, 'July 6 1989')) // [new Date(1989, 8, 1), new Date(1990, 7, 31)]
			.range([15, screenSize.width - seasonsWidth - 15])
	);

	const globalTimeScale = (/** @type {string} */ month) => {
		switch (month) {
			case 'Sep':
				return timeScale(new Date('October 1 1989'));
			case 'Oct':
				return timeScale(new Date('November 1 1989'));
			case 'Nov':
				return timeScale(new Date('December 1 1989'));
			case 'Dec':
				return timeScale(new Date('January 1 1990'));
			case 'Jan':
				return timeScale(new Date('February 1 1990'));
			case 'Feb':
				return timeScale(new Date('March 1 1990'));
			case 'Mar':
				return timeScale(new Date('April 1 1990'));
			case 'Apr':
				return timeScale(new Date('May 1 1990'));
			case 'May':
				return timeScale(new Date('June 1 1990'));
			case 'Jun':
				return timeScale(new Date('July 1 1990'));
			case 'Jul':
				return timeScale(new Date('August 1 1990'));
			default:
				return timeScale(new Date('August 31 1990'));
		}
	};

	const monthScale = (/** @type {string} */ month) => {
		let date1;
		let date2;
		switch (month) {
			case 'Sep':
				date1 = timeScale(new Date('September 15 1989'));
				date2 = timeScale(new Date('September 15 1989'));
				break;
			case 'Oct':
				date1 = timeScale(new Date('October 15 1989'));
				date2 = timeScale(new Date('October 16 1989'));
				break;
			case 'Nov':
				date1 = timeScale(new Date('November 15 1989'));
				date2 = timeScale(new Date('November 15 1989'));
				break;
			case 'Dec':
				date1 = timeScale(new Date('December 15 1989'));
				date2 = timeScale(new Date('December 16 1989'));
				break;
			case 'Jan':
				date1 = timeScale(new Date('January 15 1990'));
				date2 = timeScale(new Date('January 16 1990'));
				break;
			case 'Feb':
				date1 = timeScale(new Date('February 14 1990'));
				date2 = timeScale(new Date('February 14 1990'));
				break;
			case 'Mar':
				date1 = timeScale(new Date('March 15 1990'));
				date2 = timeScale(new Date('March 16 1990'));
				break;
			case 'Apr':
				date1 = timeScale(new Date('April 15 1990'));
				date2 = timeScale(new Date('April 15 1990'));
				break;
			case 'May':
				date1 = timeScale(new Date('May 15 1990'));
				date2 = timeScale(new Date('May 16 1990'));
				break;
			case 'Jun':
				date1 = timeScale(new Date('June 15 1990'));
				date2 = timeScale(new Date('June 15 1990'));
				break;
			case 'Jul':
				date1 = timeScale(new Date('July 15 1990'));
				date2 = timeScale(new Date('July 16 1990'));
				break;
			default:
				date1 = timeScale(new Date('August 15 1990'));
				date2 = timeScale(new Date('August 16 1990'));
				break;
		}

		return date1 + (date2 - date1) / 2;
	};

	$effect(() => {
		const getXPosition = (/** @type {number} */ season, /** @type {string} */ date) => {
			const timeScale = scaleTime()
				.domain(getTimeDomain(season, date))
				.range([15, screenSize.width - seasonsWidth - 15]);
			return timeScale(new Date(date));
		};

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

	<svg
		class="absolute"
		width={innerWidth - seasonsWidth}
		height={innerHeight}
		style="top: 0px; left: {seasonsWidth}px;"
	>
		<rect
			x={timeScale(new Date('January 1 1990'))}
			y={0}
			width={timeScale(new Date('May 1 1990')) - timeScale(new Date('January 1 1990'))}
			height={innerHeight}
			fill="#EEECED"
		/>
		<!-- Seasons and Months -->
		{#each tvSeasons as tvSeason, i}
			<!-- Season labels -->
			<text
				x={i === 0
					? timeScale(new Date('November 1 1989'))
					: i === 1
						? timeScale(new Date('March 1 1990'))
						: timeScale(new Date('July 1 1990'))}
				y={24}
				text-anchor="middle"
				dominant-baseline="middle"
			>
				{tvSeason.season}
			</text>

			<!-- Month labels -->
			{#each tvSeason.months as month}
				<text
					class="text-base"
					x={monthScale(month)}
					y={56}
					text-anchor="middle"
					dominant-baseline="middle"
				>
					{month}
				</text>
			{/each}
		{/each}

		<!-- Month separators -->
		{#each tvSeasons as season}
			{#each season.months as month}
				{#if month !== 'Aug'}
					<line
						x1={globalTimeScale(month)}
						y1={44}
						x2={globalTimeScale(month)}
						y2={innerHeight - 44}
						stroke="#BEBABC"
					/>
				{/if}
			{/each}
		{/each}

		<!-- Episodes -->
		{#each nodes as node}
			<g transform={`translate(${node.x}, ${node.y + headersHeight})`} style="cursor: default;">
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
