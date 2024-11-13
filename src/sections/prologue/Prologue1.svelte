<script>
  import { onMount } from 'svelte';
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";  
  gsap.registerPlugin(ScrollTrigger);

  import DownIcon from '../../icons/DownIcon.svelte';

  onMount(() => {
    // Reveal first sentence and down icon
    const tl = gsap.timeline()
    tl
      .to('#prologue-1', {
        translateY: -30,
        opacity: 1,
        ease: 'power3.out',
        duration: 2,
        delay: 1
      })
      .to('#down-icon', {
        translateY: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out'
      }, "-=.5")

    // Hide down icon
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '#prologue-1',
        start: 'top top'
      }
    })
    tl2.to('#down-icon', {
      translateY: -40,
      duration: 1,
      ease: 'power3.out',
    })
  });
</script>

<div class="h-screen flex items-center relative">
  <div class="container">
    <div id="prologue-1">I was a late arrival to Seinfeld.</div>
  </div>
  <div class="down-icon-container mask">
    <div id="down-icon">
      <DownIcon />
    </div>
  </div>
</div>

<style>
  #prologue-1 {
    opacity: 0;
    transform: translateY(30px);
  }
  .down-icon-container {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
  }
  #down-icon {
    opacity: 0;
    transform: translateY(-40px);
  }
</style>