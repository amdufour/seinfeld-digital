<script type="module" lang="ts">
  import { onMount } from 'svelte';
  import { gsap } from 'gsap/all';

  onMount(() => {
    const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '#intro-end',
				start: 'top top',
        end: 'bottom top',
				toggleActions: 'play reverse play reverse'
			}
		});

    tl.to('#intro-end .highlight', {
        webkitTextFillColor: 'transparent',
        backgroundPosition: '200% center',
        duration: 2,
        delay: 1,
        ease: 'power3.out'
    })
  })
</script>

<div class="pt-80 bg-black text-white">
  <div id="intro-end" class="h-screen w-screen">
    <div class="h-screen container flex content-center flex-wrap">
      <div style="max-width: 900px;">How did Jerry Seinfeld and Larry David, with the support of their group of talented writers, achieve such consistent brilliance? Much like a football coach seeks to assemble the right players, in the right combinations, to win a game, we wanted to see how the Seinfeld coaching team used their resources, assembling the right characters, in the right scenes, <span class="highlight">to win the laughter</span>. 
      </div>
    </div>
  </div>
</div>