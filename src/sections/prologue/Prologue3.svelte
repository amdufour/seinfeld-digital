<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger);
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
					Like music, situation comedy has rhythm and it has texture. The rhythm is shaped by its
					temporal structures and pacing. Textures are formed from the arrangements of characters
					and locations, which amalgamate into the comedy.
				</p>
			</div>
		</div>
	</div>
	<div
		id="prologue-videos"
		class="absolute z-0"
		style="height: 1400px; top: 100vh; left: 0; right: 0;"
	>
		<div class="absolute w-80" style="top: 0px; right: 150px;">
			<video playsinline autoplay muted loop poster={cover_img}>
				<source src={video_webm} type="video/webm" />
				<source src={video_mp4} type="video/mp4" />
			</video>
		</div>
		<div class="absolute w-80" style="top: 400px; left: 50px;">
			<video playsinline autoplay muted loop poster={cover_img}>
				<source src={video_webm} type="video/webm" />
				<source src={video_mp4} type="video/mp4" />
			</video>
		</div>
		<div class="absolute w-80" style="top: 600px; left: 50%;">
			<video playsinline autoplay muted loop poster={cover_img}>
				<source src={video_webm} type="video/webm" />
				<source src={video_mp4} type="video/mp4" />
			</video>
		</div>
		<div class="absolute w-80" style="top: 800px; left: 50%; transform: translate(-120%);">
			<video playsinline autoplay muted loop poster={cover_img}>
				<source src={video_webm} type="video/webm" />
				<source src={video_mp4} type="video/mp4" />
			</video>
		</div>
		<div class="absolute w-80" style="top: 1200px; right: 50px;">
			<video playsinline autoplay muted loop poster={cover_img}>
				<source src={video_webm} type="video/webm" />
				<source src={video_mp4} type="video/mp4" />
			</video>
		</div>
	</div>
</div>
