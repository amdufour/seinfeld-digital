<script>
  import { createPopper } from "@popperjs/core";
  import UpDownCarets from "../icons/UpDownCarets.svelte";

  let { options, value, prefix } = $props();
  let dropdownPopoverShow = $state(false);

  /**
	 * @type {Element | import("@popperjs/core").VirtualElement}
	 */
  let btnDropdownRef;
  /**
	 * @type {HTMLElement}
	 */
  let popoverDropdownRef;

  const toggleDropdown = () => {
    if (dropdownPopoverShow) {
      dropdownPopoverShow = false;
    } else {
      dropdownPopoverShow = true;
      createPopper(btnDropdownRef, popoverDropdownRef, {
        placement: "bottom-start",
      });
    }
  };
</script>

<!-- TODO: Use native select on mobile and tablet -->
<div class="flex flex-wrap">
  <div class="w-full sm:w-6/12 md:w-4/12 px-4">
    <div class="relative inline-flex align-middle w-full">
      <button 
        class="dropdown flex items-center font-semibold text-2xl pl-2 pr-1 py-1 rounded shadow outline-none focus:outline-none ease-linear transition-all duration-150" 
        type="button" 
        bind:this="{btnDropdownRef}"
        onclick="{toggleDropdown}"
      >
        <span>{prefix}{value}</span><span class="ml-1"><UpDownCarets /></span>
      </button>
      <div 
        bind:this="{popoverDropdownRef}" 
        class="text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 min-w-20 
        {dropdownPopoverShow ? 'block':'hidden'}"
      >
        <ul class="py-1">
          {#each options as option}
            <li>
              <button class={`dropdown-option ${option === value ? 'active' : ''}`}>{prefix}{option}</button>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</div>

<style>
  .dropdown {
    border: 2px solid #E71D80;
    border-radius: 5px;
  }
  .dropdown-option {
    width: 100%;
    padding: 4px 16px;
    text-align: left;
    transition: color 150ms ease-out;
  }
  .dropdown-option:hover,
  .dropdown-option.active {
    color: #E71D80;
  }
  .dropdown-option.active:hover {
    cursor: default;
  }
</style>