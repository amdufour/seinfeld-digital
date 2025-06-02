<script>
  import { characters } from '$lib/data/characters';
  import { getCharacterImagePath } from '../../utils/getCharacterImagePath';
  import Toggle from './Toggle.svelte';

  const supportingChars = $derived(characters.slice(4, characters.length - 1));

</script>

<div class="h-screen">
  <div class="container">
    <h3 class="my-8">Screen time vs laughter rate</h3>
    <div class="grid grid-cols-12 md:gap-20">
      <div class="col-span-12 md:col-span-3 flex items-center">
        <div class="grid grid-cols-2 gap-6 flex-wrap">
          {#each supportingChars as char}
            <div class="supporting-char flex flex-col items-center max-w-28">
              <div class="character rounded-full bg-contain bg-center" 
                   style="background-image: url('{getCharacterImagePath(char.id)}'); width: 75px; height: 75px;"></div>
              <div class="text-center pt-1" style="font-size: 1.25rem; line-height: 1.2;">{char.label}</div>
            </div>
          {/each}
        </div>
      </div>

      <div class="col-span-12 md:col-span-9">
        <Toggle />
      </div>
    </div>
  </div>
</div>
