<script>
  import TitleViz from "./TitleViz.svelte";
</script>

<section class="bg-black text-white h-screen">
  <div class="max-w-screen-xl mx-auto h-full">
    <TitleViz />
      <h1>The Seinfield Chronicles</h1>
      <p class="subtitle max-w-4xl">An unnecessary data exploration by <span>Andy Kirk</span>, Anne-Marie Dufour, and Loud Numbers</p>
  </div>
</section>

<style>
  section {
    padding-top: 100px
  }
  .subtitle {
    font-size: 2.1rem;
  }
</style>