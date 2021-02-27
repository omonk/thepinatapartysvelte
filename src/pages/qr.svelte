<script>
  import { onMount } from "svelte";
  import MakeQrCode from "./MakeQR.svelte";

  let invites = [];

  onMount(async () => {
    const res = await fetch("/api/invites/get");

    if (res.ok) {
      const body = await res.json();
      const { inviteKeys } = body;

      invites = inviteKeys;
    }
  });
</script>

<main>
  <div class="qr-container">
    {#each invites as invite}
      <MakeQrCode {invite} />
    {/each}
  </div>
</main>
