<script>
	import Lazy from 'svelte-lazy';
	import PrologueLateArrival from './PrologueLateArrival.svelte';
	import PrologueTimeline from './PrologueTimeline.svelte';
	import PrologueTheShow from './PrologueTheShow.svelte';
	import PrologueVideo from './PrologueVideo.svelte';
	import PrologueRythmAndTexture from './PrologueRythmAndTexture.svelte';
	import PrologueBook from './PrologueBook.svelte';

	let { ScrollTrigger } = $props();
</script>

<section>
	<PrologueLateArrival />
	<PrologueVideo />
	<PrologueTimeline {ScrollTrigger} />
	<Lazy keep={true} height="100vh">
		<PrologueTheShow />
	</Lazy>
	<Lazy keep={true} height="100vh">
		<PrologueRythmAndTexture {ScrollTrigger} />
	</Lazy>
	<Lazy keep={true} height="100vh">
		<PrologueBook {ScrollTrigger} />
	</Lazy>
</section>
