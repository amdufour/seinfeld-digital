<script>
	import Lazy from 'svelte-lazy';
	import SectionTitle from '../SectionTitle.svelte';
	import Marimekko from './Marimekko.svelte';
	import PeakPerformances from './PeakPerformances.svelte';

	let { episodesData } = $props();
</script>

<section id="lead-chars">
	<Lazy keep={true} height="100vh" offset="100vh">
		<div class="bg-black">
			<SectionTitle section="main_char" title="Lead Characters" />
		</div>
	</Lazy>
	<div class="flex h-screen w-screen items-center">
		<div class="container">
			<div>PLACEHOLDER Screen time details</div>
		</div>
	</div>
	<Marimekko />
	<PeakPerformances />
</section>
