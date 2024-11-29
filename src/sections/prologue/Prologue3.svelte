<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger);
	import Lenis from 'lenis';
	import video_mp4 from '../../videos/prologue-intro-bg.mp4';
	import video_webm from '../../videos/prologue-intro-bg.webm';
	import cover_img from '../../images/S5E9_The-masseuse.jpg';

	onMount(() => {
		// Pin text
		ScrollTrigger.create({
			trigger: '#prologue-videos',
			start: 'top bottom',
			end: 'bottom bottom',
			pin: '#prologue-videos-text'
		});

		// Highlight keywords
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '#prologue-videos-text',
				start: 'top center',
				toggleActions: 'play reverse play reverse'
			}
		});
		tl.to('.highlight', {
			webkitTextFillColor: 'transparent',
			backgroundPosition: '200% center',
			duration: 2,
			delay: 1,
			stagger: 0.5,
			ease: 'power3.out'
		});

		// Add parallax effect to videos
		let videos = gsap.utils.toArray('.parallax');
		videos.forEach((video) => {
			const speed = video.dataset.speed;
			gsap.to(video, {
				yPercent: speed * 50,
				ease: 'none',
				scrollTrigger: {
					trigger: video,
					start: 'top bottom',
					scrub: true
				}
			});
		});

		// Smooth scroll
		const lenis = new Lenis();

		/**
		 * @param {number} time
		 */
		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	});
</script>

<div class="relative">
	<div id="prologue-videos-text" class="relative z-10 flex h-screen items-center">
		<div class="container grid grid-cols-1 lg:grid-cols-2">
			<div class="col-span-1 px-4">
				<p class="accent">
					[PLACEHOLDER: Bridge between Andy's curiosity about Seinfeld's success and the show's
					musicality/texture.]
				</p>
				<p>
					Like music, situation comedy has rhythm and it has texture. The <span class="highlight"
						>rhythm</span
					>
					is shaped by its temporal structures and pacing. <span class="highlight">Textures</span> are
					formed from the arrangements of characters and locations, which amalgamate into the comedy.
				</p>
			</div>
		</div>
	</div>
	<div
		id="prologue-videos"
		class="absolute z-0"
		style="height: 1400px; top: 100vh; left: 0; right: 0;"
	>
		<div class="parallax absolute w-80" data-speed="-1" style="top: 0px; right: 150px;">
			<video playsinline autoplay muted loop poster={cover_img}>
				<source src={video_webm} type="video/webm" />
				<source src={video_mp4} type="video/mp4" />
			</video>
		</div>
		<div class="parallax absolute w-80" data-speed="-2" style="top: 400px; left: 50px;">
			<video playsinline autoplay muted loop poster={cover_img}>
				<source src={video_webm} type="video/webm" />
				<source src={video_mp4} type="video/mp4" />
			</video>
		</div>
		<div class="parallax absolute w-80" data-speed="-6" style="top: 600px; left: 50%;">
			<video playsinline autoplay muted loop poster={cover_img}>
				<source src={video_webm} type="video/webm" />
				<source src={video_mp4} type="video/mp4" />
			</video>
		</div>
		<div
			class="parallax absolute w-80"
			data-speed="-8"
			style="top: 800px; left: 50%; transform: translate(-120%);"
		>
			<video playsinline autoplay muted loop poster={cover_img}>
				<source src={video_webm} type="video/webm" />
				<source src={video_mp4} type="video/mp4" />
			</video>
		</div>
		<div class="parallax absolute w-80" data-speed="-4" style="top: 1200px; right: 50px;">
			<video playsinline autoplay muted loop poster={cover_img}>
				<source src={video_webm} type="video/webm" />
				<source src={video_mp4} type="video/mp4" />
			</video>
		</div>
	</div>
</div>

<style>
	.highlight {
		background: rgb(253, 232, 36);
		background: linear-gradient(
			90deg,
			rgba(253, 232, 36, 1) 0%,
			rgba(184, 206, 50, 1) 12.5%,
			rgba(125, 186, 87, 1) 25%,
			rgba(76, 178, 120, 1) 37.5%,
			rgba(29, 163, 136, 1) 50%,
			rgba(34, 138, 141, 1) 62.5%,
			rgba(47, 112, 142, 1) 75%,
			rgba(57, 87, 141, 1) 87.5%,
			rgba(69, 55, 130, 1) 100%
		);
		background-size: 200% auto;
		background-clip: text;
	}
</style>
