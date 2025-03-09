<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	import StrokedTitleS4E4TheWallet from '../../images/StrokedTitle_S4E4_TheWallet.svelte';
	import StrokedTitle_S4E4_TheWallet_sm from '../../images/StrokedTitle_S4E4_TheWallet_sm.svelte';

	let innerWidth = $state(1200);
	let isMuted = $state(true);

	const handleMouseEnter = () => {
		isMuted = false;
	};
	const handleMouseLeave = () => {
		isMuted = true;
	};

	onMount(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '#stroked-title-s4e4',
				start: 'bottom bottom',
				end: 'top center',
				toggleActions: 'play reverse play reverse'
			}
		});
		tl.from('#stroked-title-s4e4', {
			translateY: innerWidth >= 1200 ? -70 : -100,
			ease: 'power3.out',
			duration: 1,
			delay: 1
		});
	});
</script>

<svelte:window bind:innerWidth />

<div
	class="relative flex h-screen items-center"
	role="presentation"
	onmouseenter={handleMouseEnter}
	onmouseleave={handleMouseLeave}
>
	<!-- svelte-ignore a11y_media_has_caption -->
	<video playsinline autoplay bind:muted={isMuted} loop>
		<source
			src="https://amdufour.github.io/hosted-data/apis/videos/1a.ElaineArrives.mp4"
			type="video/mp4"
		/>
	</video>
	<div class="readable-layer z-1 absolute left-0 top-0 h-screen w-screen"></div>
	<div id="stroked-title-s4e4-container" class="mask z-2 absolute bottom-0 left-0">
		<div id="stroked-title-s4e4" class="">
			{#if innerWidth >= 1200}
				<StrokedTitleS4E4TheWallet />
			{:else}
				<StrokedTitle_S4E4_TheWallet_sm />
			{/if}
		</div>
	</div>
</div>

<style>
	video {
		object-fit: cover;
		width: 100vw;
		height: auto;
	}
	@media screen and (min-width: 1200px) {
		video {
			height: 100vh;
		}
	}
	.readable-layer {
		background: rgba(18, 2, 10, 0.55);
	}
</style>
