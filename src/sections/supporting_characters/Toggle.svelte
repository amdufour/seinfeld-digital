<script>
  import TvIcon from "../../icons/TvIcon.svelte";
  import Laugh from "../../icons/Laugh.svelte";

  let isScreenTimeSelected = $state(true);

  const selectScreenTime = () => {
    isScreenTimeSelected = true;
  };
  const selectLaughRate = () => {
    isScreenTimeSelected = false;
  };
</script>

<div class="relative rounded-full overflow-hidden mb-4" style="width: 608px;">
  <!-- Background color -->
  <div class="button-background relative z-0 {isScreenTimeSelected ? 'left' : 'right'}"></div>

  <!-- Toggle -->
  <div class="flex items-center relative z-10">
    <button 
      class="flex items-center rounded-l-full {isScreenTimeSelected ? 'text-white' : 'text-black'} {isScreenTimeSelected ? 'cursor-default' : 'cursor-pointer'}"
      style="border-color: {isScreenTimeSelected ? '#E71D80' : '#12020A'};"
      onclick={selectScreenTime}>
      <div class="relative" style="top: -2px;"><TvIcon size={32} color={isScreenTimeSelected ? '#F9F5F7' : '#12020A'} /></div>
      <h4 class="ml-2">Screen time</h4>
    </button>
    <button 
      class="flex items-center rounded-r-full {!isScreenTimeSelected ? 'text-white' : 'text-black'} {!isScreenTimeSelected ? 'cursor-default' : 'cursor-pointer'}"
      style="border-color: {!isScreenTimeSelected ? '#E71D80' : '#12020A'};"
      onclick={selectLaughRate}>
      <div class="w-8"><Laugh color={!isScreenTimeSelected ? '#F9F5F7' : '#12020A'} /></div>
      <h4 class="ml-2">Laughter rate</h4>
    </button>
  </div>
</div>

<style>
  button {
    width: 304px;
    padding: 8px 24px 8px;
    border: 1px solid;
    transition: all 300ms ease-out;
  }
  .button-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 304px;
    height: 50px;
    background-color: #E71D80;
    transition: transform 300ms ease-out;
  }
  .button-background.left {
    transform: translateX(0%);
  }
  .button-background.right {
    transform: translateX(100%);
  }
</style>