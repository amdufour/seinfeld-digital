<script>
	import { soundIsAuth } from '../stores/soundAuthStore';
	import AudioOn from '../icons/AudioOn.svelte';
	import AudioOff from '../icons/AudioOff.svelte';
	import Burger from '../icons/Burger.svelte';

	const toggleSound = () => {
		$soundIsAuth = !$soundIsAuth;
	};
</script>

<div class="fixed left-0 top-0 z-10 flex h-14 w-screen items-center">
	<div class="container flex justify-end">
		<button onclick={toggleSound}>
			{#if $soundIsAuth}
				<AudioOn />
			{:else}
				<AudioOff />
			{/if}
		</button>
		<button class="ml-4"><Burger /></button>
	</div>
</div>
