<script>
	import { fly } from 'svelte/transition';
	import SoundIcon from '../icons/SoundIcon.svelte';
	import { soundIsAuth, soundAuthModaleIsOpen } from '../stores/soundAuthStore';

	const updateSoundAuth = (/** @type {boolean} */ isAuth) => {
		$soundIsAuth = isAuth;
		$soundAuthModaleIsOpen = false;
	};
</script>

<div
	class="sound-auth bg-white text-black"
	in:fly={{ duration: 500, y: 165 }}
	out:fly={{ duration: 500, y: 165 }}
>
	<div class="container flex items-center justify-between">
		<div class="flex items-center">
			<SoundIcon width={100} height={165 / 2} />
			<div class="ml-4 mt-2">
				<p>This project is an immersive audio experience. Turn your sound up!</p>
			</div>
		</div>
		<div class="ml-16 flex justify-end">
			<button class="btn btn-secondary" onclick={() => updateSoundAuth(false)}>No, thanks</button>
			<button class="btn btn-primary ml-4" onclick={() => updateSoundAuth(true)}>Allow sound</button
			>
		</div>
	</div>
</div>

<style>
	.sound-auth {
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 100;
		width: 100vw;
		padding: 40px 32px;
		box-shadow: rgba(48, 56, 67, 0.15) 0px 8px 24px;
	}
	.sound-auth p {
		margin: 0;
	}
</style>
