<script>
  import { onMount } from 'svelte';
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";  
  gsap.registerPlugin(ScrollTrigger);

  /**
	 * @type {number}
	 */
   $: innerHeight = 0

  onMount(() => {
    // Pin timeline
    ScrollTrigger.create({
      trigger: "#timeline-container",
      start: "top top", 
      end: "bottom bottom",
      pin: "#timeline"
    });

    // Reveal text 1 and timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#timeline-container",
        start: 'top 20%'
      }
    })
    tl
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
        ease: 'power3.out',
        duration: 2,
      }, "-=2")
  });
</script>

<svelte:window bind:innerHeight />

<div id="timeline-container" class="grid grid-cols-1 lg:grid-cols-2 container">
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
    <div id="timeline-line" class="bg-white absolute" style={`width: 2px; height: ${innerHeight - 120}px; border-radius: 1px; top: 60px; left: 214px`}></div>
    <div id="date-1" class="absolute w-full" style={`top: ${(innerHeight - 120) / 3 + 30}px; left: 0`}>
      <div class="mask w-full" style={`height: 60px`}>
        <div id="date-us" class="flex items-center" style="height: 60px">
          <div id="year-us" class="text-3xl font-semibold relative text-right" style={`width: 185px; margin-right: 15px`}>1989</div>
          <div id="circle-us" class="bg-white" style={`width: 28px; height: 28px; border-radius: 50%;`}></div>
          <div id="desc-us" class="text-lg" style={`margin-left: 15px`}>Seinfeld first aired on NBC in the USA</div>
        </div>
      </div>
    </div>
    <div id="date-2" class="absolute w-full" style={`top: ${(innerHeight - 120) / 3 * 2 + 30}px; left: 0`}>
      <div class="mask w-full" style={`height: 60px`}>
        <div id="date-uk" class="flex items-center" style="height: 60px">
          <div id="year-uk" class="text-3xl font-semibold relative text-right" style={`width: 185px; margin-right: 15px`}>1993</div>
          <div id="circle-uk" class="bg-white" style={`width: 28px; height: 28px; border-radius: 50%;`}></div>
          <div id="desc-uk" class="text-lg" style={`margin-left: 15px`}>Seinfeld first aired on BBC2 in the UK</div>
        </div>
      </div>
    </div>
  </div>
</div>