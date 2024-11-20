<script>
	import { characters } from "../../../data/characters";
  import JerryIcon from "$lib/assets/characters/JerryIcon.jpg"
  import GeorgeIcon from "$lib/assets/characters/GeorgeIcon.jpg"
  import ElaineIcon from "$lib/assets/characters/ElaineIcon.jpg"
  import KramerIcon from "$lib/assets/characters/KramerIcon.jpg"
  import LoverInterestIcon from "$lib/assets/characters/LoveInterestIcon.jpg"
  import FriendIcon from "$lib/assets/characters/FriendIcon.jpg"
  import NeighbourIcon from "$lib/assets/characters/NeighbourIcon.jpg"
  import ColleagueIcon from "$lib/assets/characters/ColleagueIcon.jpg"
  import JerryFamilyIcon from "$lib/assets/characters/JerryFamilyIcon.jpg"
  import GeorgeFamilyIcon from "$lib/assets/characters/GeorgeFamilyIcon.jpg"
  import ElaineFamilyIcon from "$lib/assets/characters/ElaineFamilyIcon.jpg"
  import KramerFamilyIcon from "$lib/assets/characters/KramerFamilyIcon.jpg"
  import OtherPersonIcon from "$lib/assets/characters/OtherPersonIcon.jpg"

  const getImagePath = (/** @type {string} */ id) => {
    switch (id) {
      case "JERRY":
        return JerryIcon;
      case "GEORGE":
        return GeorgeIcon;
      case "ELAINE":
        return ElaineIcon;
      case "KRAMER":
        return KramerIcon;
      case "Love interest":
        return LoverInterestIcon;
      case "Friend/Acquaintance":
        return FriendIcon;
      case "Neighbour":
        return NeighbourIcon;
      case "Work colleague":
        return ColleagueIcon;
      case "Jerry's family":
        return JerryFamilyIcon;
      case "George's family":
        return GeorgeFamilyIcon;
      case "Elaine's family":
        return ElaineFamilyIcon;
      case "Kramer's family":
        return KramerFamilyIcon;
      default:
        return OtherPersonIcon;
    }
  }
</script>

<div class="w-44 pr-4 pt-10">
  <ul>
    {#each characters as character}
      <li class="flex justify-end my-4">
        <div class="small pr-2 text-right">{character.label}</div>
        <div class="image w-8 h-8 rounded-full" style="background-image: url({getImagePath(character.id)});"></div>
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