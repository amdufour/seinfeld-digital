<script>
	import { soundIsAuth } from '../../stores/soundAuthStore';
	import tv_noise from '$lib/assets/tv_noise.png';

	let innerWidth = $state(1600);
	let sideSpacing = $derived(innerWidth >= 1280 ? (innerWidth - 1280) / 2 + 16 : 30)

	let isMouseOn1 = $state(false);
	let isMouseOn2 = $state(false);
	let isMouseOn3 = $state(false);
	let isMouseOn4 = $state(false);
	let isMouseOn5 = $state(false);
	let isMuted1 = $state(true);
	let isMuted2 = $state(true);
	let isMuted3 = $state(true);
	let isMuted4 = $state(true);
	let isMuted5 = $state(true);

	$effect(() => {
		isMuted1 = !(isMouseOn1 && $soundIsAuth);
		isMuted2 = !(isMouseOn2 && $soundIsAuth);
		isMuted3 = !(isMouseOn3 && $soundIsAuth);
		isMuted4 = !(isMouseOn4 && $soundIsAuth);
		isMuted5 = !(isMouseOn5 && $soundIsAuth);
	});

	const handleMouseEnter = (/** @type {number} */ section) => {
		switch (section) {
			case 1:
				isMouseOn1 = true;
				return;
			case 2:
				isMouseOn2 = true;
				return;
			case 3:
				isMouseOn3 = true;
				return;
			case 4:
				isMouseOn4 = true;
				return;
			case 5:
				isMouseOn5 = true;
				return;
		}
	};
	const handleMouseLeave = (/** @type {number} */ section) => {
		switch (section) {
			case 1:
				isMouseOn1 = false;
				return;
			case 2:
				isMouseOn2 = false;
				return;
			case 3:
				isMouseOn3 = false;
				return;
			case 4:
				isMouseOn4 = false;
				return;
			case 5:
				isMouseOn5 = false;
				return;
		}
	};
</script>

<svelte:window bind:innerWidth />

<section id="the-show">
	<div class="container">
		<!-- The show about nothing -->
		<div 
			class="grid grid-cols-12 gap-4 mb-24" role="presentation"
			onmouseenter={() => handleMouseEnter(1)}
			onmouseleave={() => handleMouseLeave(1)}
		>
			<div class="col-span-7 md:col-span-4">It only took a handful of episodes for me to find myself completely hooked. Seinfeld was written in a different key, deviating from the traditional rules of sitcoms, focusing on - and amplifying of - the minutiae of daily life, earning its reputation as <a href="https://www.latimes.com/archives/la-xpm-1993-03-04-ca-474-story.html" target="_blank">the show about nothing</a>.</div>
			<div class="col-span-5">
				<!-- svelte-ignore a11y_media_has_caption -->
				 <div class="relative">
				<video playsinline autoplay bind:muted={isMuted1} loop>
					<source
						src="https://amdufour.github.io/hosted-data/apis/videos/6c.ShowAboutNothing.mp4"
						type="video/mp4"
					/>
				</video>
				<div class="readable-layer z-1 absolute bottom-0 left-0 right-0 top-0"></div>
				<div
					class="absolute bottom-0 left-0 right-0 top-0"
					style="background-image: url('{tv_noise}')"
				></div>
				</div>
				<h5 class="mt-2">S4E3 - The Pitch</h5>
			</div>
		</div>
		
		<!--  Irreverent characters -->
		<div 
			class="grid grid-cols-12 gap-4 mb-52" role="presentation"
			style="margin-left: -{sideSpacing}px;"
			onmouseenter={() => handleMouseEnter(2)}
			onmouseleave={() => handleMouseLeave(2)}
		>
			<div class="col-span-5 md:col-span-7">
				<!-- svelte-ignore a11y_media_has_caption -->
				 <div class="relative">
					<video playsinline autoplay bind:muted={isMuted2} loop>
						<source
							src="https://amdufour.github.io/hosted-data/apis/videos/32.Minutiae.mp4"
							type="video/mp4"
						/>
					</video>
					<div class="readable-layer z-1 absolute bottom-0 left-0 right-0 top-0"></div>
					<div
						class="absolute bottom-0 left-0 right-0 top-0"
						style="background-image: url('{tv_noise}')"
					></div>
				</div>
				<h5 class="mt-2">S8E3 - The Bizzaro Jerry</h5>
			</div>
			<div class="col-span-7 md:col-span-5">I loved the irreverent characters - with their absurd obsessions and neurotic tendencies - and the hilariously avoidable situations they found themselves in.</div>
		</div>

		<!--  No hugging, no learning -->
		<div 
			class="grid grid-cols-12 gap-4 mb-52" role="presentation"
			style="margin-left: {innerWidth >= 768 ? -sideSpacing : 0}px;"
			onmouseenter={() => handleMouseEnter(3)}
			onmouseleave={() => handleMouseLeave(3)}
		>
			<div class="col-auto md:col-span-1"></div>
			<div class="col-span-12 md:col-span-10">
			<div>It rejected the classic three-act story, sidestepping sentimentality and the pursuit of resolution. With its mantra of <span class="em">no hugging*, no learning</span> the lead characters were insecure and entertainingly flawed, lacking any desire and capability for personal growth.</div>
			<div class="number mt-2 mb-4">* the earlier clip not withstanding!</div>
			<div>
				<!-- svelte-ignore a11y_media_has_caption -->
				 <div class="relative">
				<video playsinline autoplay bind:muted={isMuted3} loop>
					<source
						src="https://amdufour.github.io/hosted-data/apis/videos/11a.GoodSamaritan.mp4"
						type="video/mp4"
					/>
				</video>
				<div class="readable-layer z-1 absolute bottom-0 left-0 right-0 top-0"></div>
				<div
					class="absolute bottom-0 left-0 right-0 top-0"
					style="background-image: url('{tv_noise}')"
				></div>
				</div>
				<h5 class="mt-2">S9E24 - The Good Samaritan Law</h5>
			</div>
			</div>
		</div>

		<!-- Anti heroes -->
		<div 
			class="grid grid-cols-12 gap-4 mb-44" role="presentation"
			style="margin-right: {innerWidth >= 768 ? -sideSpacing + 32 : -sideSpacing}px;"
			onmouseenter={() => handleMouseEnter(4)}
			onmouseleave={() => handleMouseLeave(4)}
		>
			<div class="col-span-1 md:col-span-2"></div>
			<div class="col-span-6 md:col-span-5">As with any shows from its time, as <a href="https://www.theguardian.com/culture/2024/oct/16/jerry-seinfeld-tom-papa-breaking-bad-podcast-interview-politics-comedy-extreme-left-pc-crap-#:~:text=%E2%80%9CDoes%20culture%20change,my%20skiing%20analogy.%E2%80%9D" target="_blank">culture and society evolve</a> a contemporary lens exposes negative stereotypes and flashes of chauvinism and sizeism, to name but two isms. The amoral instincts of these <a href="https://www.theguardian.com/tv-and-radio/2018/may/10/no-hugging-no-learning-20-years-on-seinfelds-mantra-still-looms-large" target="_blank">anti-heroes</a> was most on-show in their romantic encounters and when faced with the slightest adversity or irrational annoyance.</div>
			<div class="col-span-5 md:col-span-5">
				<!-- svelte-ignore a11y_media_has_caption -->
				 <div class="relative">
				<video playsinline autoplay bind:muted={isMuted4} loop>
					<source
						src="https://amdufour.github.io/hosted-data/apis/videos/13a.TheNose.mp4"
						type="video/mp4"
					/>
				</video>
				<div class="readable-layer z-1 absolute bottom-0 left-0 right-0 top-0"></div>
				<div
					class="absolute bottom-0 left-0 right-0 top-0"
					style="background-image: url('{tv_noise}')"
				></div>
				</div>
				<h5 class="mt-2">S3E9 - The Nose Job</h5>
			</div>
		</div>


		<!--  The dancing -->
		<div 
			class="grid grid-cols-12 gap-4 pb-52" role="presentation"
			style="margin-left: {innerWidth >= 768 ? -sideSpacing : 0}px;"
			onmouseenter={() => handleMouseEnter(5)}
			onmouseleave={() => handleMouseLeave(5)}
		>
			<div class="col-auto md:col-span-2"></div>
			<div class="col-span-12 md:col-span-10">
				<div class="mb-2">And then there’s the dancing.</div>
				<div>
					<!-- svelte-ignore a11y_media_has_caption -->
					<div class="relative">
					<video playsinline autoplay bind:muted={isMuted5} loop>
						<source
							src="https://amdufour.github.io/hosted-data/apis/videos/14.ElaineDancing.mp4"
							type="video/mp4"
						/>
					</video>
					<div class="readable-layer z-1 absolute bottom-0 left-0 right-0 top-0"></div>
					<div
						class="absolute bottom-0 left-0 right-0 top-0"
						style="background-image: url('{tv_noise}')"
					></div>
					</div>
					<h5 class="mt-2">S8E4 - The Little Kicks</h5>
				</div>
			</div>
		</div>
	</div>
</section>