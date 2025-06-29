<script>
  import { pack } from "d3-hierarchy"
  import { jsonToHierarchy } from "../../utils/jsonToHierarchy"
  import { characters } from "$lib/data/characters";
  import { combinedPerformances } from "$lib/data/combinedPerformances";
  import { getCharacterImagePath } from "../../utils/getCharacterImagePath";
  import HelpIcon from "../../icons/HelpIcon.svelte";

  let { episodesData } = $props()

  let currentChars = characters.slice(0, 4);
  let activeCharacter = $state(['JERRY', 'KRAMER']);
  const sharedData = $derived(combinedPerformances[activeCharacter.join('-')])
  $inspect(activeCharacter.join('-'))
  
  const handleCharacterClick = (char) => {
    let updatedActiveCharacters = [...activeCharacter]
    if (activeCharacter.includes(char.id)) {
      // Unselect character
      const charIndex = updatedActiveCharacters.indexOf(char.id)
      updatedActiveCharacters = updatedActiveCharacters.filter(c => c !== char.id)
    } else {
      // Select character
      updatedActiveCharacters.push(char.id)
    }
    
    activeCharacter = updatedActiveCharacters
  }

  let screenHeight = $state(800)
  let headerHeight = $state(300)
  let vizContainerWidth = $state(1200)
  // let vizContainerHeight = $derived(Math.max(screenHeight - headerHeight - 100, 600))
  $inspect('sharedData', sharedData)
  
  // Is data updating properly?
  const packLayoutGenerator = $derived(pack().size([vizContainerWidth, 600]).padding(3))
  const root = $derived.by(() => {
    const hierarchicalData = jsonToHierarchy(sharedData)
    const initialRoot = hierarchicalData[0].sum(d => d.duration)

    packLayoutGenerator(initialRoot)

    return initialRoot
  })
  $inspect('circlePackData', root.descendants())
</script>

<svelte:window bind:innerHeight={screenHeight} />

<div class="h-screen w-screen mb-60">
  <div class="container">
    <!-- Header -->
    <div bind:clientHeight={headerHeight} class="mb-8">
      <h3>Better together</h3>
      <div style="max-width: 900px;">A sitcom like Seinfeld is comparable to a sports team: Sometimes players shine as individuals, but mostly it’s about the interactions and combination plays with other team mates.</div>
    </div>
    <div class="grid grid-cols-12 md:gap-8">

      <!-- Buttons -->
      <div class="col-span-12 md:col-span-2 flex flex-col items-center relative">
        <div class="hint small flex items-center gap-2 mb-6" style="max-width: 320px;">
          <span class="shrink"><HelpIcon color="#E71D80" /></span>
          <span class="relative top-1">Select a combination of characters to reveal their group performances</span>
        </div>
        <ul class="grid gap-6 flex-wrap grid-cols-1">
          {#each currentChars as char}
            <li class="flex justify-center">
              <button 
                class="character-button flex flex-col items-center max-w-28 {activeCharacter.includes(char.id) ? 'active' : ''}"
                onclick={() => handleCharacterClick(char)}>
                <div class="character rounded-full bg-contain bg-center opacity-50" 
                    style="background-image: url('{getCharacterImagePath(char.id)}'); width: 75px; height: 75px;"></div>
                <div class="text-center pt-1" style="font-size: 1.25rem; line-height: 1.2;">{char.label}</div>
              </button>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Visualizations -->
      <div bind:clientWidth={vizContainerWidth} class="col-span-8">
        {#if activeCharacter.length < 2}
          <div>Select at least two characters</div>
        {:else}
          <svg width={vizContainerWidth} height={600} style="border: 1px solid cyan;">
            {#each root.descendants() as circle}
              <circle
                cx={circle.x}
                cy={circle.y}
                r={circle.r}
                fill="none"
                stroke="black"
              />
            {/each}
          </svg>
        {/if}
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