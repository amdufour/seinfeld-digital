<script>
	import Lazy from 'svelte-lazy';
	import SectionTitle from '../SectionTitle.svelte';
</script>

<section>
	<Lazy keep={true} height="100vh" offset="100vh">
		<div class="bg-black">
			<SectionTitle section="locations" title="Locations" />
		</div>
	</Lazy>
	<div class="flex h-screen w-screen items-center">
		<div class="container">
			<div>PLACEHOLDER Locations section</div>
		</div>
	</div>
</section>
