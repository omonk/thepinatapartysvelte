<script>
  import router from "page";

  // Include our Routes
  import Home from "./pages/home.svelte";
  import QR from "./pages/qr.svelte";

  let page;
  let params;

  router("/", () => (page = Home));
  router("/qr", () => (page = QR));

  router.start();
</script>

<svelte:component this={page} {params} />
