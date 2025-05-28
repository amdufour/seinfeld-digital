<script>
  import { onMount } from 'svelte';
	import { gsap } from 'gsap/dist/gsap';

  onMount(() => {
    gsap.set('#supporting_chars_screen_1 p', { translateY: 100, opacity: 0 });

    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: '#supporting_chars_screen_1',
        start: 'top center'
      }
    });
    tl1
      .to('#supporting_chars_screen_1 p', {
        translateY: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        stagger: { each: 0.3 }
      })
      .to('#supporting_chars_screen_1 .highlight', {
        webkitTextFillColor: 'transparent',
        backgroundPosition: '200% center',
        duration: 2,
        delay: 1,
        ease: 'power3.out'
      }, '<-0.5');
    });
</script>

<div id="supporting_chars" class="bg-black text-white">
  <!-- Screen 1 -->
  <div id="supporting_chars_screen_1" class="h-screen w-screen">
    <div class="container">
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-7 h-screen flex flex-col justify-center">
          <p>As a show grows, it is inevitable that so does the universe of different characters. And as the list of potential characters grows, so too does the temptation to use them more to deliver the storylines.</p>
          <p>In any sitcom, you will have permanent lead characters, supporting or recurring characters, and transient characters. At the start of the data-gathering exercise, it wasn't necessarily obvious how to best categorise and distinguish those non-lead characters.</p>
          <p><span class="highlight">Supporting characters</span> come and go but will appear quite frequently, are quite popular, and are usually played by the same actors for continuity. <span class="highlight">Transient characters</span> tend to appear just once, are often unnamed, and primarily exist to help progress a single strand of an episode story.</p>
        </div>
      </div>
    </div>
  </div>
</div>