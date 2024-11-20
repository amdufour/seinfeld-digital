<script>
	import { characters } from "../../../data/characters";
  import { getCharacterImagePath } from "../../../utils/getCharacterImagePath";
</script>

<div class="w-44 pr-4 pt-10">
  <ul>
    {#each characters as character}
      <li class="flex justify-end my-4">
        <div class="small pr-2 text-right">{character.label}</div>
        <div class="image w-8 h-8 rounded-full" style="background-image: url({getCharacterImagePath(character.id)});"></div>
      </li>
    {/each}
  </ul>
</div>

<style>
  .image {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
</style>