<script>
    import { inview } from 'svelte-inview';
    let { episodesData, reduceStripHeight = $bindable() } = $props();
    
</script>

<div class="h-screen" use:inview={{}} oninview_enter={() => reduceStripHeight()}></div>