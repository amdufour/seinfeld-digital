<script>
	import SectionTitle from '../SectionTitle.svelte';
	import Marimekko from './Marimekko.svelte';

	let { episodesData } = $props();
</script>

<section>
	<!-- <SectionTitle section="main_char" title="Lead Characters" /> -->
	<!-- <div class="flex h-screen w-screen items-center">
		<div class="container">
			<div>PLACEHOLDER Screen time details</div>
		</div>
	</div> -->
	<Marimekko />
</section>
