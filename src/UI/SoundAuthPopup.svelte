<script>
	import SoundIcon from '../icons/SoundIcon.svelte';
</script>

<div class="backdrop fixed left-0 top-0 flex h-screen w-screen items-center justify-center">
	<div class="popup flex bg-white text-black">
		<SoundIcon width={200} height={165} />
		<div class="w-96 pl-6">
			<p>This project is an immersive audio experience.</p>
			<p>Turn your sound up!</p>
			<div class="mt-9 flex justify-end">
				<button class="btn btn-secondary">No, thanks</button>
				<button class="btn btn-primary ml-6">Allow sound</button>
			</div>
		</div>
	</div>
</div>

<style>
	.backdrop {
		background-color: rgba(48, 56, 67, 0.9);
	}
	.popup {
		padding: 56px 32px;
		box-shadow: rgba(48, 56, 67, 0.15) 0px 8px 24px;
		border-radius: 16px;
	}
	.popup p {
		margin: 12px 0;
	}
</style>
