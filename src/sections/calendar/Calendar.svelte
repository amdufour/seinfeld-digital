<script>
	import { seasons } from '$lib/data/seasons';

	/**
	 * @type {number}
	 */
	let innerWidth = $state(1600);
	let innerHeight = $state(800);

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
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div class="flex h-screen w-screen">
	<!-- Seasons -->
	<div class="flex flex-col" style="width: 130px;">
		{#each seasons as season, i}
			<div
				class="flex flex-col justify-center px-4"
				style="flex-grow: {i === 0 ? 2 : 1}; color: {i > 1
					? '#F9F5F7'
					: '#12020A'}; background: {season.color};"
			>
				<div class="uppercase">{season.id}</div>
				<div>{season.years}</div>
			</div>
		{/each}
	</div>

	<!-- Months -->
	<div class="flex grow">
		{#each tvSeasons as tvSeason, i}
			<div class="flex grow" style="background: {i === 1 ? '#EEECED' : 'transparent'};">
				<div class="grow">
					<div class="flex grow flex-col">
						<div class="mt-2 flex grow justify-center">
							<div>{tvSeason.season}</div>
						</div>
						<div class="flex grow">
							{#each tvSeason.months as month}
								<div class="flex grow justify-center text-base">
									<div>{month}</div>
								</div>
							{/each}
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
