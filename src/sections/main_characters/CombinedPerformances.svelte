<script>
  import { range } from "d3-array";
  import { characters } from "$lib/data/characters";
  import { getCharacterImagePath } from "../../utils/getCharacterImagePath";
  import HelpIcon from "../../icons/HelpIcon.svelte";

  let { episodesData } = $props()
  $inspect('episodesData', episodesData)

  let currentChars = characters.slice(0, 4);
  let activeCharacter = $state(['JERRY', 'GEORGE', 'ELAINE']);

  let headerHeight = $state(300)
  let containerWidth = $state(1200)

  const sharedMoments = $derived.by(() => {
    const episodes = []
    const otherChars = activeCharacter.slice(1)

    episodesData.forEach(d => {
      const charsData = d.data.filter(e => e.eventCategory === 'CHARACTERS')
      const locationsData = d.data.filter(e => e.eventCategory === 'LOCATION')
      const laughterData = d.data.filter(e => e.eventCategory === 'CAUSES THE LAUGH')
      const groupedCharsData = []
      const groupedLaughterData = []

      charsData.forEach(c => {
        const currentTime = c.eventTimeSeconds
        if (c.eventAttribute === activeCharacter[0]) {
          let hasAllOtherChars = true
          otherChars.forEach(c => {
            if (!charsData.find(m => m.eventAttribute === c && m.eventTimeSeconds === currentTime)) {
              hasAllOtherChars = false
            }
          })
          
          if (hasAllOtherChars) {
            groupedCharsData.push({
              ...c,
              eventAttribute: activeCharacter.map(c => c),
              location: locationsData.find(m => m.eventTimeSeconds === currentTime).eventAttribute
            })

            if (laughterData.find(m => m.eventTimeSeconds === currentTime && activeCharacter.includes(m.eventAttribute))) {
              groupedLaughterData.push({
                ...c,
                eventAttribute: activeCharacter.map(c => c),
                location: locationsData.find(m => m.eventTimeSeconds === currentTime).eventAttribute
              })
            }
          }
        }
      })

      let start
      let currentTime
      let currentScene = 1
      const aggregatedSharedMoments = []
      groupedCharsData.forEach((d, i) => {
        if (!start && !currentTime) {
          start = +d.eventTimeSeconds
          currentTime = +d.eventTimeSeconds
        } else if (+d.eventTimeSeconds > currentTime + 5 || i === groupedCharsData.length - 1 || +d.sceneNumber !== currentScene) {
          aggregatedSharedMoments.push({
            start: start - 5,
            duration: currentTime - start,
            sceneNum: currentScene,
            location: d.location
          })
          start = +d.eventTimeSeconds
          currentTime = +d.eventTimeSeconds
          currentScene = +d.sceneNumber
        } else if (+d.eventTimeSeconds === currentTime + 5) {
          currentTime = +d.eventTimeSeconds
        }
      })

      start = undefined
      currentTime = undefined
      currentScene = 1
      const aggregatedLaughterMoments = []
      groupedLaughterData.forEach((d, i) => {
        if (!start && !currentTime) {
          start = +d.eventTimeSeconds
          currentTime = +d.eventTimeSeconds
        } else if (+d.eventTimeSeconds > currentTime + 5 || i === groupedLaughterData.length - 1 || +d.sceneNumber !== currentScene) {
          if (currentTime - start > 0) {
            aggregatedLaughterMoments.push({
              start: start - 5,
              duration: currentTime - start,
              sceneNum: currentScene,
              location: d.location
            })
          }

          start = +d.eventTimeSeconds
          currentTime = +d.eventTimeSeconds
          currentScene = +d.sceneNumber
        } else if (+d.eventTimeSeconds === currentTime + 5) {
          currentTime = +d.eventTimeSeconds
        }
      })

      episodes.push({
        season: d.season,
        episode: d.episode,
        duration: d.duration,
        onScreenTogether: aggregatedSharedMoments,
        causeLaughterTogether: aggregatedLaughterMoments,
        maxSceneWithSharedLaughter: currentScene
      })
    })

    return episodes
  })
  $inspect('sharedMoments', sharedMoments)

  const hierarchicalData = $derived.by(() => {
    const data = {
      name: 'All episodes',
      children: []
    }

    sharedMoments.forEach(e => {
      const scenes = []
      e.causeLaughterTogether.forEach(l => {
        if (!scenes.includes(l.sceneNum)) scenes.push(l.sceneNum)
      })
      
      const episodeData = {
        name: `season-${e.season}-episode-${e.episode}`,
        season: e.season,
        episode: e.episode,
        duration: e.duration,
        children: scenes.map(s => {
          return {
            name: `season-${e.season}-episode-${e.episode}-scene-${s}`,
            season: e.season,
            episode: e.episode,
            scene: s,
            children: e.causeLaughterTogether.filter(d => d.sceneNum === s)
          }
        })
      }

      data.children.push(episodeData)
    })

    return data
  })
  $inspect('hierarchicalData', hierarchicalData)

  const handleCharacterClick = (charId) => {
    
  }
</script>

<div class="h-screen w-screen mb-60">
  <div class="container" bind:clientWidth={containerWidth}>
    <!-- Header -->
    <div bind:clientHeight={headerHeight} class="mb-8">
      <h3>Better together</h3>
      <div style="max-width: 900px;">A sitcom like Seinfeld is comparable to a sports team: Sometimes players shine as individuals, but mostly it’s about the interactions and combination plays with other team mates.</div>
    </div>
    <div class="grid grid-cols-12 md:gap-8">
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