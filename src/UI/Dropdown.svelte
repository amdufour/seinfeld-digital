<script>
  import UpDownCarets from "$lib/assets/UpDownCarets.svg";

  let { options, value = $bindable(), prefix } = $props();
</script>

<div class="dropdown">
  <select 
    bind:value={value}
    style="background-image: url({UpDownCarets});"
  >
    {#each options as option}
      <option value={option}>{prefix}{option}</option>
    {/each}
  </select>
</div>

<style>
  .dropdown select {
    appearance: none;
    outline: none;
    min-width: 100px;
    padding: 0px 8px;
    font-size: 1.5625rem;
    font-weight: 600;
    background-color: transparent;
    background-repeat: no-repeat;
    background-size: auto 27px;
    background-position: right 4px center;
    border: 2px solid #E71D80;
    border-radius: 5px;
  }
</style>