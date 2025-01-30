<script>
	import DataIcon from '../icons/DataIcon.svelte';
	import BrainIcon from '../icons/BrainIcon.svelte';
	import TableIcon from '../icons/TableIcon.svelte';
	import CodeIcon from '../icons/CodeIcon.svelte';
	import SoundIcon from '../icons/SoundIcon.svelte';
	import PaintIcon from '../icons/PaintIcon.svelte';

	const credits = [
		{ name: 'Andy Kirk', role: 'Ideation, Data Analysis, Data Visualisation & Original Design' },
		{ name: 'Anne-Marie Dufour', role: 'Digital Design & Development' },
		{ name: 'Loud Numbers', role: 'Sonification' },
		{ name: 'Mark Knott', role: 'Illustrations' },
		{ name: 'Rob Barker', role: 'Data Collection & Research' }
	];
</script>

<div class="container mt-20 grid grid-cols-1 lg:grid-cols-3">
	<div class="col-span-2 mb-10 px-4">
		<h3>Methodology</h3>
		<div>
			<p>
				The data used in this study did not exist; it had to be manually captured by watching every
				episode and logging the times, categories, and characteristics of different events within
				each.
			</p>
			<p>
				Typically, each episode's data was gathered via two full viewings. The first viewing noted
				the times of discrete scenes starting and finishing, the locations in which the scenes were
				set, and the characters who appeared (and when). The second viewing validated the data and
				recorded which characters caused the laughs (and when). This was a pragmatic solution to
				ensure the best quality data could be obtained in the most efficient way.
			</p>
			<p>
				To help with the efficiency of the data collecting, all periods of screen time were recorded
				in units of 5-second durations. This felt like a sufficient granularity of detail to
				accurately quantify any character's appearance (and aligned with the typical length of time
				recorded for the duration of a laugh). To qualify as a period of screen time, a character
				did not necessarily need to be speaking or even interacting, just that they at least played
				some role in the storyline's progression.
			</p>
			<p>
				Additional data was collected about broadcast dates, viewing figures, plot synopses and
				ratings via <a href="https://www.imdb.com/title/tt0098904/" target="_blank">IMDb</a>.
				Further qualitative enquiries about joke topics, specific patterns in language, and themes
				of representation were tempting to pursue but were considered beyond the scope of the
				enquiry.
			</p>
			<p>
				<a class="flex items-center" href="" target="_blank">
					<DataIcon />
					<span class="mx-2">Access the data</span>
				</a>
			</p>
		</div>
	</div>
	<div class="mb-10 px-4">
		<h3>Credits</h3>
		<div>
			{#each credits as credit, i}
				<div class="my-6 flex">
					<div class="w-14">
						{#if i === 0}
							<BrainIcon />
						{:else if i === 1}
							<CodeIcon />
						{:else if i === 2}
							<SoundIcon />
						{:else if i === 3}
							<PaintIcon />
						{:else}
							<TableIcon />
						{/if}
					</div>
					<div class="pl-4">
						<div class="font-semibold">{credit.name}</div>
						<div class="leading-tight">{credit.role}</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
