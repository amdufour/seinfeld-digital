<script>
	import Prologue1 from './Prologue1.svelte';
	import Prologue2 from './Prologue2.svelte';
	import Prologue2Mobile from './Prologue2Mobile.svelte';
	import PrologueVideo from './PrologueVideo.svelte';
	import Prologue3 from './Prologue3.svelte';
	import Prologue4 from './Prologue4.svelte';

	/**
	 * @type {number}
	 */
	$: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<section>
	<Prologue1 />
	<PrologueVideo />
	<!-- {#if innerWidth >= 768}
		<Prologue2 />
	{:else}
		<Prologue2Mobile />
	{/if}
	<Prologue3 />
	<Prologue4 /> -->
</section>
