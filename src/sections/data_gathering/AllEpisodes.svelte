<script>
    import { inview } from 'svelte-inview';
    import EpisodeBars from '../EpisodeBars/EpisodeBars.svelte';

    let { episodesData, reduceStripHeight = $bindable(), stripHeight } = $props();
    
</script>

<div class="h-screen" use:inview={{}} oninview_enter={() => reduceStripHeight()} style="width: calc(100vw - 25);">
    <EpisodeBars {episodesData} barsHeight={stripHeight} />
</div>