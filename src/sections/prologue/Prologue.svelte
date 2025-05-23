<script>
	import PrologueLateArrival from './PrologueLateArrival.svelte';
	import PrologueTimeline from './PrologueTimeline.svelte';
	import PrologueTheShow from './PrologueTheShow.svelte';
	import PrologueVideo from './PrologueVideo.svelte';
	import PrologueRythmAndTexture from './PrologueRythmAndTexture.svelte';
	import PrologueBook from './PrologueBook.svelte';

	/**
	 * @type {number}
	 */
	// $: innerWidth = 0;
</script>

<!-- <svelte:window bind:innerWidth /> -->

<section>
	<PrologueLateArrival />
	<!-- <PrologueVideo />
	<PrologueTimeline />
	<PrologueTheShow />
	<PrologueRythmAndTexture />
	<PrologueBook /> -->
</section>
