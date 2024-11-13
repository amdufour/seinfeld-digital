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
        translateY: 70,
        opacity: 1,
        duration: 2,
        ease: 'elastic.out(1,0.4)'
      }, "+=.3")

    // Hide down icon
    // TODO: Animation doesn't work?
    gsap.to('#down-icon', {
      opacity: 0,
      duration: 5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '#down-icon',
        start: 'top center'
      }
    })
  });
</script>

<div class="h-screen flex items-center relative">
  <div class="container">
    <div id="prologue-1">I was a late arrival to Seinfeld.</div>
  </div>
  <div id="down-icon">
    <DownIcon />
  </div>
</div>

<style>
  #prologue-1 {
    opacity: 0;
    transform: translateY(30px);
  }
  #down-icon {
    position: absolute;
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
  }
</style>