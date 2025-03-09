<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger);
	import Lenis from 'lenis';
	import { soundIsAuth } from '../../stores/soundAuthStore';

	onMount(() => {
		// Add links

		// Handle horizontal scroll
		let sections = gsap.utils.toArray('.scroll section');

		let scrollTween = gsap.to(sections, {
			xPercent: -100 * (sections.length - 1),
			ease: 'none',
			scrollTrigger: {
				trigger: '.scroll',
				pin: true,
				scrub: 1,
				snap: 1 / (sections.length - 1),
				// base vertical scrolling on how wide the container is so it feels more natural.
				// @ts-ignore
				end: () => '+=' + document.querySelector('.scroll').offsetWidth
			}
		});

		sections.forEach((section) => {
			gsap.from(section.querySelector('h2'), {
				opacity: 0,
				y: -100,
				scrollTrigger: {
					containerAnimation: scrollTween,
					trigger: section.querySelector('h2'),
					start: 'left center',
					scrub: 1,
					toggleActions: 'play none none reverse'
				}
			});
		});

		// smooth scroll
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

	const videos = $state([
		{
			id: 'vid-container-0',
			fileName: '6c.ShowAboutNothing',
			description: [
				{
					type: 'text',
					content:
						'It only took a handful of episodes for me to find myself completely hooked. Seinfeld was written in a different key, deviating from the traditional rules of sitcoms, focusing on - and amplifying of - the minutiae of daily life, earning its reputation as ‘'
				},
				{
					type: 'link',
					href: 'https://www.latimes.com/archives/la-xpm-1993-03-04-ca-474-story.html',
					content: 'the show about nothing'
				},
				{ type: 'text', content: '’.' }
			],
			isMuted: true
		},
		{
			id: 'vid-container-1',
			fileName: '32.Minutiae',
			description: [
				{
					type: 'text',
					content:
						'I loved the irreverent characters - with their absurd obsessions and neurotic tendencies - and the hilariously avoidable situations they found themselves in.'
				}
			],
			isMuted: true
		},
		{
			id: 'vid-container-2',
			fileName: '11a.GoodSamaritan',
			description: [
				{
					type: 'text',
					content:
						'It rejected the classic three-act story, sidestepping sentimentality and the pursuit of resolution. With its mantra of ‘no hugging*, no learning’ the lead characters were insecure and entertainingly flawed, lacking any desire and capability for personal growth. ( * the earlier clip notwithstanding! )'
				}
			],
			isMuted: true
		},
		{
			id: 'vid-container-3',
			fileName: '13.TheNose',
			description: [
				{ type: 'text', content: 'As with any shows from its time, as ' },
				{
					type: 'link',
					href: 'https://www.theguardian.com/culture/2024/oct/16/jerry-seinfeld-tom-papa-breaking-bad-podcast-interview-politics-comedy-extreme-left-pc-crap-#:~:text=%E2%80%9CDoes%20culture%20change,my%20skiing%20analogy.%E2%80%9D',
					content: 'culture and society evolves'
				},
				{
					type: 'text',
					content:
						' a contemporary lens exposes negative stereotypes and flashes of chauvinism and sizeism, to name but two isms. The amoral instincts of these '
				},
				{
					type: 'link',
					href: 'https://www.theguardian.com/tv-and-radio/2018/may/10/no-hugging-no-learning-20-years-on-seinfelds-mantra-still-looms-large',
					content: 'anti-heroes'
				},
				{
					type: 'text',
					content:
						' was most on-show in their romantic encounters and when faced with the slightest adversity or irrational annoyance.'
				}
			],
			isMuted: true
		},
		{
			id: 'vid-container-4',
			fileName: '14.ElaineDancing',
			description: [{ type: 'text', content: 'And then there’s the dancing.' }],
			isMuted: true
		}
	]);

	const handleVideoMouseEnter = (/** @type {{ target: any; }} */ e) => {
		if ($soundIsAuth) {
			// @ts-ignore
			videos.find((vid) => vid.id === e.target.classList[0]).isMuted = false;
		}
	};
	const handleVideoMouseLeave = (/** @type {{ target: any; }} */ e) => {
		// @ts-ignore
		videos.find((vid) => vid.id === e.target.classList[0]).isMuted = true;
	};
</script>

<div class="outer h-screen" style="margin-bottom: 1300vh;">
	<div class="scroll flex" style="width: 500vw;">
		{#each videos as video, i}
			<section class={`section-${i + 1} h-screen w-screen`}>
				<div class="background"></div>
				<div class="content flex flex-col items-center">
					<div
						class={`vid-container-${i}`}
						role="presentation"
						onmouseenter={handleVideoMouseEnter}
						onmouseleave={handleVideoMouseLeave}
					>
						<div class="relative">
							<!-- svelte-ignore a11y_media_has_caption -->
							<video playsinline autoplay bind:muted={video.isMuted} loop>
								<source
									src={`https://amdufour.github.io/hosted-data/apis/videos/${video.fileName}.mp4`}
									type="video/mp4"
								/>
							</video>
							<div class="overlay"></div>
						</div>
						<p class="show-description">
							{#each video.description as desc}
								{#if desc.type === 'link'}
									<a href={desc.href} target="_blank">{desc.content}</a>
								{:else}
									<span>{desc.content}</span>
								{/if}
							{/each}
						</p>
					</div>
				</div>
			</section>
		{/each}
	</div>
</div>

<style>
	.scroll {
		background: linear-gradient(
			145deg,
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
	}
	section {
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
	}
	.background {
		position: absolute;
		z-index: 0;
		top: 0;
		width: 500vw;
		height: 100vh;
		background: linear-gradient(
			145deg,
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
	}
	.section-1 .background {
		left: 0;
	}
	.section-2 .background {
		left: -100vw;
	}
	.section-3 .background {
		left: -200vw;
	}
	.section-4 .background {
		left: -300vw;
	}
	.section-5 .background {
		left: -400vw;
	}
	.content {
		position: relative;
		z-index: 2;
	}
	video,
	.overlay {
		width: 975px;
		max-width: 100%;
	}
	.show-description {
		max-width: 800px;
	}
</style>
