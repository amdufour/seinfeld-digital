<script>
  import HelpIcon from "../../icons/HelpIcon.svelte";
  import { characters } from "$lib/data/characters";
  import { getCharacterImagePath } from "../../utils/getCharacterImagePath";

  const mainChars = $derived(characters.slice(0, 4));

  let headerHeight = $state(100);
</script>

<div class="w-screen pb-80">
  <div class="container">
    <!-- Header -->
    <div bind:clientHeight={headerHeight} class="mb-8">
      <h3>Peak and bottom performances</h3>
      <div style="max-width: 900px;">If we consider the simplistic, but not unreasonable, goal of a sitcom is to cause laughter, the peak performance of a character can be identified as an episode in which they generated a high number of laughs while they were on screen (laughter rate), they were allocated a high proportion of all the laughs in that episode (laughter share), and they were on screen for a long duration (screen-time).
    </div>
    </div>

    <div class="flex">
      <!-- Character Selector -->
      <div class="flex flex-col items-center">
        <div class="small flex items-center gap-2" style="max-width: 220px;">
          <span class="shrink"><HelpIcon /></span>
          <span class="relative top-1">Select a character to reveal their performances.</span>
        </div>
        <ul class="flex flex-col mt-4">
          {#each mainChars as char}
            <li class="my-2">
              <button class="flex flex-col character-button">
                <div class="character rounded-full bg-contain bg-center opacity-50" 
                     style="background-image: url('{getCharacterImagePath(char.id)}'); width: 75px; height: 75px;"></div>
                <div>{char.label}</div>
              </button>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</div>

<style>
  .character {
    transition: opacity 0.3s ease-out;
  }
  .character-button:hover .character {
    opacity: 1;
  }
</style>