<script>
  // @ts-ignore
  import Prologue from "../sections/prologue/Prologue.svelte";
  import Title from "../sections/Title.svelte";
  import Catalog from "../sections/catalog/Catalog.svelte";
  import MethodologyAndCredits from "../sections/MethodologyAndCredits.svelte";
  import Footer from "../sections/Footer.svelte";
</script>

<main>
  <div class="bg-black text-white">
    <Prologue />
    <Title />
  </div>
  <Catalog />
  <MethodologyAndCredits />
  <Footer />
</main>
