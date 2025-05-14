<script>
    import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger);

    import Laugh from '../../icons/Laugh.svelte';
    import tv_noise from '$lib/assets/tv_noise.png';

    let innerWidth = $state(1600);
	let sideSpacing = $derived(innerWidth >= 1280 ? (innerWidth - 1280) / 2 + 16 + 25 : 30)

    onMount(() => {
        const assetTransform =  {
                scaleY: 0,
                ease: 'power3.out',
                duration: 1
            };

		const tl1 = gsap.timeline({
			scrollTrigger: {
				trigger: '#data-gathering-1',
				start: 'top center',
				toggleActions: 'play reverse play reverse'
			}
		});
		const tl2 = gsap.timeline({
			scrollTrigger: {
				trigger: '#data-gathering-2',
				start: 'top center',
				toggleActions: 'play reverse play reverse'
			}
		});
		const tl3 = gsap.timeline({
			scrollTrigger: {
				trigger: '#data-gathering-3',
				start: 'top center',
				toggleActions: 'play reverse play reverse'
			}
		});


		tl1
            .from(["#data-gathering-1 .text"], {
                xPercent: -140,
                stagger: .1
            })
            .from('#data-gathering-1 img', assetTransform, "-=.3")
            .to('#data-gathering-1 .highlight', {
                webkitTextFillColor: 'transparent',
                backgroundPosition: '200% center',
                duration: 2,
                delay: 1,
                ease: 'power3.out'
            }, "-=2")
            .from(["#data-gathering-1 svg"], {
                yPercent: 140,
                opacity: 0,
                duration: 1,
                ease: 'bounce.out'
            }, "-=1.2");

        tl2
            .from(["#data-gathering-2 .text"], {
                xPercent: 140,
                stagger: .1
            })
            .from('#data-gathering-2 img', assetTransform, "-=.3")
            .to('#data-gathering-2 .highlight', {
                webkitTextFillColor: 'transparent',
                backgroundPosition: '200% center',
                duration: 2,
                delay: 1,
                ease: 'power3.out'
            }, "-=2");

        tl3
            .from(["#data-gathering-3 .text"], {
                xPercent: -140,
                stagger: .1
            })
            .from('#data-gathering-3 .video-container', assetTransform, "-=.3")
            .to('#data-gathering-3 .highlight', {
                webkitTextFillColor: 'transparent',
                backgroundPosition: '200% center',
                duration: 2,
                delay: 1,
                ease: 'power3.out'
            }, "-=2");

    });
</script>

<svelte:window bind:innerWidth />

<div class="w-screen" style="margin-left: -25px;">
    <div class="container py-96">
        <div id="data-gathering-1" class="grid grid-cols-12 mb-48">
            <div class="col-span-6 relative">
                <div class="mask">
                    <div class="text">It doesn’t take a genius to recognise the main goal of a sitcom is to offer situational comedy. It also stands to reason that a reliable indicator of a situation comedy being funny is to measure the reaction of an audience’s laughter through the laugh track. These days it is rare to find laugh tracks on modern sitcoms, but Seinfeld had one and with the show always being filmed in front of a <span class="highlight pl-1">live studio audience</span> - with any scenes filmed outside played back in the studio - and so the laughter heard is authentic.</div>
                </div>
                <div class="absolute w-20 md:w-32 h-20 md:h-32" style="top: -68px; right: -130px;">
                    <Laugh />
                </div>
            </div>
            <div class="col-span-6"></div>
            <div class="col-span-4"></div>
            <div class="col-span-8 mt-8" style="margin-right: -{sideSpacing}px;">
                <img src="https://amdufour.github.io/hosted-data/apis/images/audience.jpg" alt="Jerry Seinfeld talking with the audience during taping." />
                <div class="number text pt-2">Source: <a href="https://www.facebook.com/story.php?story_fbid=539096318663826&id=100076903884453" target="_blank">The Seinfeld World</a></div>
            </div>
        </div>

        <div id="data-gathering-2" class="grid grid-cols-12 mb-48">
            <div class="col-span-1"></div>
            <div class="col-span-7" style="margin-right: -50px;">
                <img src="https://amdufour.github.io/hosted-data/apis/images/data_gathering.png" alt="Data spreadsheet and tv during data gathering." />
            </div>
            <div class="col-span-4 mask">
                <p class="text">We gathered all the data for this project by watching every Seinfeld episode and <span class="highlight">manually logging</span> the events and classifications established to serve the intention of the analysis.</p>
                <p class="text">Laughter has a spectrum of levels, from the subtle smile characteristic of ‘inner’ laughter, through to more external titters, chuckles, chortles, and through to belly laughs or howls. To establish a standard measurement any laughter heard during the episodes counted as simply as laughter, regardless of whether it was loud or fleeting.</p>
            </div>
        </div>

        <div id="data-gathering-3" class="grid grid-cols-12">
            <div class="col-span-8 mask">
                <div class="text">For consistency each distinct moment of laughter was allocated to distinct units of <span class="highlight">5-second durations</span>. When testing out the data collection approach over three sample episodes, the 5-second duration proved to be the most reliable and representative ‘average’ duration, from the gag’s delivery to the audience’s laughter subsiding. Occasionally, laughter would run for longer than 5 seconds, sometimes persisting for 10 and even 15 seconds. In these rare cases, each 5-second unit would count as a laughter moment.</div>
            </div>
            <div class="col-span-12">
                <!-- svelte-ignore a11y_media_has_caption -->
				 <div class="relative video-container" data-speed="1">
					<video playsinline autoplay loop>
						<source
							src="https://amdufour.github.io/hosted-data/apis/videos/MarineBiologist_edited.mp4"
							type="video/mp4"
						/>
					</video>
					<div class="z-1 absolute bottom-0 left-0 right-0 top-0" style="background: rgba(18, 2, 10, 0.3);"></div>
					<div
						class="absolute z-10 bottom-0 left-0 right-0 top-0"
						style="background-image: url('{tv_noise}')"
					></div>
				</div>
            </div>
        </div>
    </div>
</div>