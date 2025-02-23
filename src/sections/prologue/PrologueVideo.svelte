<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	import StrokedTitleS4E4TheWallet from '../../images/StrokedTitle_S4E4_TheWallet.svelte';

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
			translateY: -70,
			ease: 'power3.out',
			duration: 1,
			delay: 1
		});
	});
</script>

<div class="relative flex h-screen items-center">
	<video playsinline autoplay muted loop>
		<source
			src="https://amdufour.github.io/hosted-data/apis/videos/1a.ElaineArrives.mp4"
			type="video/mp4"
		/>
	</video>
	<div class="readable-layer absolute left-0 top-0 z-10 h-screen w-screen"></div>
	<div id="stroked-title-s4e4-container" class="mask absolute z-20">
		<div id="stroked-title-s4e4" class="">
			<StrokedTitleS4E4TheWallet />
		</div>
	</div>
</div>

<style>
	video {
		object-fit: cover;
		width: 100vw;
		height: 100vh;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 0;
	}
	.readable-layer {
		background: rgba(18, 2, 10, 0.55);
	}
	#stroked-title-s4e4-container {
		left: 4px;
		bottom: 4px;
	}
</style>
