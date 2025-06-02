<script>
  import { characters } from '$lib/data/characters';
  import { getCharacterImagePath } from '../../utils/getCharacterImagePath';
  import Toggle from './Toggle.svelte';
  import HelpIcon from '../../icons/HelpIcon.svelte';

  const supportingChars = $derived(characters.slice(4, characters.length - 1));
  const activeCharacter = $state("Jerry's family");
</script>

<div class="mt-20 mb-52">
  <div class="container">
    <h3 class="my-8">Screen time vs laughter rate</h3>
    <div class="grid grid-cols-12 md:gap-20">
      <div class="col-span-12 md:col-span-3 flex flex-col items-center">
        <div class="small flex items-center gap-2 mb-6" style="max-width: 320px;">
          <span class="shrink"><HelpIcon color="#E71D80" /></span>
          <span class="relative top-1">Select a character to explore their screen time and laughter rate.</span>
        </div>

        <ul class="grid grid-cols-2 gap-6 flex-wrap">
          {#each supportingChars as char}
            <li class="flex justify-center">
              <button class="character-button flex flex-col items-center max-w-28 {activeCharacter === char.id ? 'active' : ''}">
                <div class="character rounded-full bg-contain bg-center opacity-50" 
                    style="background-image: url('{getCharacterImagePath(char.id)}'); width: 75px; height: 75px;"></div>
                <div class="text-center pt-1" style="font-size: 1.25rem; line-height: 1.2;">{char.label}</div>
              </button>
            </li>
          {/each}
          </ul>
      </div>

      <div class="col-span-12 md:col-span-9">
        <Toggle />
      </div>
    </div>
  </div>
</div>

<style>
  .character {
    transition: opacity 0.3s ease-out;
  }
  .character-button:hover .character,
  .character-button.active .character {
    opacity: 1;
  }
</style>