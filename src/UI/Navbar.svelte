<script>
	import { soundIsAuth } from '../stores/soundAuthStore';
	import { catalogIsInView } from '../stores/catalogIsInView';
	import AudioOn from '../icons/AudioOn.svelte';
	import AudioOff from '../icons/AudioOff.svelte';
	import Burger from '../icons/Burger.svelte';
	import MainMenu from './MainMenu.svelte';

	let innerWidth = $state(1200);
	let showMenu = $state(false);

	const toggleSound = () => {
		$soundIsAuth = !$soundIsAuth;
	};

	const toggleMenu = () => {
		showMenu = !showMenu;
	};
</script>

<svelte:window bind:innerWidth />

<div
	class="fixed right-0 top-0 flex h-14 items-center"
	style="height: {catalogIsInView && innerWidth >= 540 ? 82 : 56}px; z-index: {catalogIsInView &&
	innerWidth <= 539
		? 0
		: 10};"
>
	<div class="flex" style="padding-right: {innerWidth > 1600 ? (innerWidth - 1600) / 2 : 32}px;">
		<button onclick={toggleSound}>
			{#if $soundIsAuth}
				<AudioOn color={catalogIsInView && innerWidth >= 540 ? '#F9F5F7' : '#E71D80'} />
			{:else}
				<AudioOff color={catalogIsInView && innerWidth >= 540 ? '#F9F5F7' : '#BEBABC'} />
			{/if}
		</button>
		<button class="ml-4" onclick={toggleMenu} disabled={showMenu}
			><Burger color={catalogIsInView && innerWidth >= 540 ? '#F9F5F7' : '#E71D80'} /></button
		>
	</div>
</div>
{#if showMenu}
	<MainMenu {toggleMenu} />
{/if}
