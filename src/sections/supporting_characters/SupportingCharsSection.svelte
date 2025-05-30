<script>
	import Lazy from 'svelte-lazy';
	import SectionTitle from '../SectionTitle.svelte';
	import Intro from './Intro.svelte';
	import Marimekko from './Marimekko.svelte';
</script>

<section>
	<Lazy keep={true} height="100vh" offset="100vh">
		<div class="bg-black">
			<SectionTitle section="supp_char" title="Supporting Characters" />
		</div>
	</Lazy>
	<Intro />
	<div class="flex h-screen w-screen items-center">
		<div class="container">
			<div>PLACEHOLDER Supporting Characters section</div>
		</div>
	</div>
	<Marimekko />
</section>
