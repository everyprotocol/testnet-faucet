<script>
  import "../app.css";
  import Footer from "$lib/components/Footer.svelte";
  import NavBar from "$lib/components/NavBar.svelte";
</script>

<svelte:head>
  <title>Every Faucet</title>
</svelte:head>

<div class="w-full">
  <NavBar />
  <slot />
  <Footer />
</div>
