<script>
	import { fade, slide } from 'svelte/transition';
	import SoundIcon from '../icons/SoundIcon.svelte';
	import { soundIsAuth, soundAuthModaleIsOpen } from '../stores/soundAuthStore';

	const closeModale = () => {
		const scrollY = document.body.style.top;
		document.body.style.position = '';
		document.body.style.top = '';
		window.scrollTo(0, parseInt(scrollY || '0') * -1);
	};

	const updateSoundAuth = (/** @type {boolean} */ isAuth) => {
		$soundIsAuth = isAuth;
		$soundAuthModaleIsOpen = false;
		closeModale();
	};
</script>

<div
	in:slide={{ duration: 800 }}
	out:fade={{ duration: 200 }}
	class="backdrop fixed left-0 top-0 z-20 flex h-screen w-screen items-center justify-center"
>
	<div class="popup flex bg-white text-black">
		<SoundIcon width={200} height={165} />
		<div class="w-96 pl-6">
			<p>This project is an immersive audio experience.</p>
			<p>Turn your sound up!</p>
			<div class="mt-9 flex justify-end">
				<button class="btn btn-secondary" onclick={() => updateSoundAuth(false)}>No, thanks</button>
				<button class="btn btn-primary ml-4" onclick={() => updateSoundAuth(true)}
					>Allow sound</button
				>
			</div>
		</div>
	</div>
</div>

<style>
	.backdrop {
		background-color: rgba(48, 56, 67, 0.9);
	}
	.popup {
		padding: 40px 32px;
		box-shadow: rgba(48, 56, 67, 0.15) 0px 8px 24px;
		border-radius: 16px;
	}
	.popup p {
		margin: 12px 0;
	}
</style>
