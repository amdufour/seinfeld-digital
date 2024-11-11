<script>
  import TitleViz from "./TitleViz.svelte";
</script>

<section class="bg-black text-white h-screen">
  <div class="max-w-screen-xl mx-auto flex flex-col justify-between h-full">
    <div>
      <TitleViz />
      <h1>The Seinfield Chronicles</h1>
      <p class="subtitle">An unnecessary data exploration by <span>Andy Kirk</span></p>
    </div>
    <p class="font-mono text-sm">Brought to the web by Anne-Marie Dufour and to your ears by Miriam Quick and Duncan Geere</p>
  </div>
</section>

<style>
  section {
    padding: 130px 0 50px;
  }
  .subtitle {
    padding-top: 5px;
    font-size: 2.5rem;
  }
</style>