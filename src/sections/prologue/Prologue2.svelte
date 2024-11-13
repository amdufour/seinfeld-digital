<script>
  import { onMount } from 'svelte';
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";  
  gsap.registerPlugin(ScrollTrigger);
  import { scaleLinear } from 'd3-scale';

  /**
	 * @type {number}
	 */
   $: innerWidth = 0
   $: innerHeight = 0

  onMount(() => {
    const yearsScale = scaleLinear()
      .domain([1989, 2012])
      .range([0, innerHeight - 240])

    if (innerWidth >= 768) {
      // Pin timeline
      ScrollTrigger.create({
        trigger: "#timeline-container",
        start: "top top", 
        end: "bottom center",
        pin: "#timeline"
      });
    }

    // Reveal text 1 and timeline
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#timeline-container",
        start: 'top 20%'
      }
    })
    tl1
      .from('#prologue-2', {
        translateY: 30,
        opacity: 0,
        ease: 'power3.out',
        duration: 2
      })
      .from('#prologue-3', {
        translateY: 30,
        opacity: 0,
        ease: 'power3.out',
        duration: 2,
      }, "-=1")
      .from('#timeline-line', {
        height: 0,
        opacity: 0,
        ease: 'power3.out',
        duration: 2,
      }, "-=2")
      .from(['#date-us', '#date-uk'], {
        translateY: 50,
        opacity: 0,
        ease: 'power3.out',
        duration: 2,
      }, "-=2")

    // Reveal text 2 and animate timeline
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#prologue-4",
        start: 'top center'
      }
    })
    tl2
      .from('#prologue-4', {
        translateY: 30,
        opacity: 0,
        ease: 'power3.out',
        duration: 2
      })
      .to('#date-us', {
        translateY: -(innerHeight - 120) / 3 + 60,
        ease: 'power3.out',
        duration: 3
      }, "-=1")
      .to('#date-uk', {
        translateY: -(innerHeight - 120) / 3 * 2 + 60 + yearsScale(1993),
        ease: 'power3.out',
        duration: 3
      }, "-=3")
      .to('#date-andy', {
        translateY: -(innerHeight - 120) + 60 + yearsScale(2012),
        opacity: 1,
        ease: 'power3.out',
        duration: 3
      }, "-=3")
  });
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div id="timeline-container" class="grid grid-cols-1 md:grid-cols-2 container mt-20">
  <div class="col-span-1 px-4">
    <div class="h-screen flex flex-col justify-center">
      <p id="prologue-2">Though the first episode aired in the US in 1989 it wasn't broadcast in the UK until 1993.</p>
      <p id="prologue-3">Even then it was scheduled with such inconsistency on the BBC's night-time line-up and during my university years of '95 to '99 I rarely had access to a TV with a functioning aerial. Although I was aware of its pop-culture phenomenon status, it felt like it had passed me by.</p>
    </div>
    <div class="h-screen flex flex-col justify-center">
      <p id="prologue-4">It wasn't until I was in my 30s (and was a proud owner of a television set), that the series reappeared on UK TV schedules in a prime-time evening slot. I knew it was popular and I now felt compelled to find out for myself. After only a handful of episodes, I was hooked. My path to Seinfeld fandom was established with 9 seasons' worth of shows ahead of me to savour.</p>
    </div>
  </div>
  <div id="timeline" class="col-span-1 px-4 relative">
    <div id="timeline-line" class="bg-white absolute" style={`width: 2px; height: ${innerHeight - 120}px; border-radius: 1px; top: 60px;`}></div>
    <div id="date-1" class="absolute w-full" style={`top: ${(innerHeight - 120) / 3 + 30}px; left: 0`}>
      <div id="date-us" class="flex items-center">
        <div id="year-us" class="year" style={`width: 176px; margin-right: 24px`}>1989</div>
        <div id="circle-us" class="bg-white circle"></div>
        <div id="desc-us" class="text-lg" style={`margin-left: 24px`}>Seinfeld first aired on NBC in the USA</div>
      </div>
    </div>
    <div id="date-2" class="absolute w-full" style={`top: ${(innerHeight - 120) / 3 * 2 + 30}px; left: 0`}>
      <div id="date-uk" class="flex items-center">
        <div id="year-uk" class="year" style={`width: 176px; margin-right: 24px`}>1993</div>
        <div id="circle-uk" class="bg-white circle"></div>
        <div id="desc-uk" class="text-lg" style={`margin-left: 24px`}>Seinfeld first aired on BBC2 in the UK</div>
      </div>
    </div>
    <div id="date-3" class="absolute w-full" style={`top: ${innerHeight - 120 + 30}px; left: 0`}>
      <div id="date-andy" class="flex items-center" style="opacity: 0">
        <div id="year-andy" class="year">2012</div>
        <div id="circle-andy" class="bg-accent pulse circle"></div>
        <div id="desc-andy" class="text-lg" style={`margin-left: 24px`}>Seinfeld returns to prime-time on Sky TV in the UK</div>
      </div>
    </div>
  </div>
</div>

<style>
  #timeline-line {
    left: 137px
  }
  .year {
    width: 100px;
    min-width: 100px;
    margin-right: 24px;
    text-align: right;
    font-size: 1.875rem;
    font-weight: 600;
  }
  @media screen and (min-width: 996px) {
    #timeline-line {
      left: 213px
    }
    .year {
      width: 176px;
      min-width: 176px;
    }
  }
  .circle {
    width: 28px;
    min-width: 28px;
    height: 28px;
    border-radius: 50%;
  }
  .pulse {
    animation: pulse-animation 2s infinite;
  }

  @keyframes pulse-animation {
    0% {
      box-shadow: 0 0 0 0px rgba(231, 29, 128, 0.5);
    }
    100% {
      box-shadow: 0 0 0 20px rgba(231, 29, 128, 0);
    }
  }
</style>