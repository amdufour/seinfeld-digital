<script>
	import { fade, fly } from 'svelte/transition';
	import CloseIcon from '../icons/CloseIcon.svelte';

	let { toggleMenu } = $props();
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div in:fade={{ duration: 250 }} out:fade={{ duration: 250 }} class="backdrop">
	<div
		in:fly={{ duration: 250, x: 500 }}
		out:fly={{ duration: 250, x: 500 }}
		class="menu-container h-screen"
	>
		<div>Menu</div>
		<button class="menu-close-button" onclick={toggleMenu}>
			<CloseIcon color="#E71D80" />
		</button>
	</div>
</div>

<style>
	.menu-container {
		position: absolute;
		top: 0;
		right: 0px;
		z-index: 100;
		width: 500px;
		max-width: 100vw;
		padding: 24px;
		background-color: #12020a;
		color: #e71d80;
	}
	.menu-close-button {
		position: absolute;
		top: 24px;
		right: 24px;
	}
</style>
