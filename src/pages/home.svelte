<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  let content;
  let names = [];
  let id;

  let formGroup = {};

  let formSubmitError = false;
  let hasRsvp = false;

  $: isValid =
    names.length == 0 || names.every((n) => formGroup[n.name] != null);

  onMount(async () => {
    const res = await fetch(`/api/invite/get${location.search}`, {
      credentials: "same-origin",
    });

    if (res.ok) {
      const data = await res.json();

      id = data.id;
      content = data.content;
      names = [...names, ...data.invite.names];

      hasRsvp = data.invite.names.every((n) => n.rsvp !== null);
    }
  });

  async function submitForm() {
    try {
      const rsvp = names.reduce((acc, curr) => {
        const { name } = curr;
        acc[curr.name] = formGroup[name];
        return acc;
      }, {});

      const res = await fetch(`/api/invite/update${location.search}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inviteId: id,
          rsvp,
        }),
      });

      if (res.ok) {
        hasRsvp = true;
      } else {
        throw new Error(res);
      }
    } catch (error) {
      formSubmitError = true;
    }
  }
</script>

<main>
  <div class="logo">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      enable-background="new 0 0 100 100"
      xml:space="preserve"
      ><path
        d="M78.584,49.93l-2.982-6.41l-5.993-15.919l6.831-7.897c0.155-0.18,0.163-0.443,0.019-0.631l-1.924-2.508  c-0.114-0.148-0.302-0.222-0.485-0.188l-9.511,1.714l1.229-7.793c0.031-0.201-0.062-0.401-0.235-0.506  c-0.175-0.104-0.396-0.095-0.558,0.027l-4.202,3.136c-0.081,0.06-0.142,0.143-0.174,0.238l-2.069,6.019c0,0-0.001,0.001-0.001,0.001  v0c0,0,0,0.001,0,0.002c-0.021,0.061-0.03,0.125-0.026,0.193l2.196,33.54l-14.354,1.638l-13.357,0.167  c-0.005,0-0.009,0.003-0.014,0.003c-0.043,0.002-0.082,0.015-0.123,0.027c-0.021,0.006-0.044,0.005-0.063,0.014l-5.353,2.425  c-0.007,0.003-0.01,0.011-0.017,0.015c-0.012,0.006-0.025,0.006-0.037,0.014l-5.771,3.512c-0.165,0.101-0.257,0.287-0.237,0.479  c0.02,0.191,0.147,0.355,0.329,0.42l5.914,2.106l1.199,15.317c0.02,0.26,0.237,0.461,0.498,0.461h1.36l1.68,10.253  c0.038,0.231,0.231,0.406,0.466,0.418c0.009,0,0.019,0.001,0.027,0.001c0.223,0,0.421-0.148,0.481-0.365l2.888-10.308h1.377  c0.216,0,0.407-0.138,0.475-0.343l2.469-7.445l10.437,0.887l8.447,5.033l3.714,12.249c0.002,0.007,0.01,0.01,0.013,0.017  c0.031,0.09,0.085,0.165,0.157,0.223c0.013,0.01,0.024,0.018,0.038,0.027c0.069,0.045,0.146,0.081,0.234,0.087  c0.012,0.001,0.024,0.001,0.036,0.001c0.048,0,0.097-0.007,0.146-0.021c0.004-0.001,0.007-0.004,0.01-0.005  c0.06-0.02,0.113-0.048,0.161-0.086c0.01-0.009,0.017-0.02,0.025-0.029c0.034-0.033,0.065-0.068,0.09-0.11  c0.011-0.019,0.016-0.04,0.024-0.061c0.012-0.027,0.026-0.052,0.033-0.082l2.245-10.513l7.69-16.476  c0.005-0.009,0.004-0.02,0.008-0.03c0.002-0.004,0.007-0.006,0.009-0.011l4.548-12.545C78.646,50.187,78.64,50.05,78.584,49.93z   M73.927,17.414l1.49,1.943l-6.301,7.284l-4.392-7.568L73.927,17.414z M61.493,13.664l3.094-2.31l-1.088,6.908l-3.763,0.51  L61.493,13.664z M62.355,78.262l-2.224-1.325c-0.033-0.024-0.065-0.045-0.103-0.061l-8.55-5.093L44.465,61.46l2.267-5.912  l14.032-1.601L62.355,78.262z M32.137,56.189l-3.356,9.661l-0.615-7.862L32.137,56.189z M23.026,61.072l4.179-2.543l0.324,4.147  L23.026,61.072z M32.974,87.408l-1.288-7.862h3.491L32.974,87.408z M37.23,78.546h-7.456l-0.801-10.228  c0.004-0.009,0.014-0.013,0.017-0.022l4.359-12.547l12.293-0.153l-5.925,15.452c-0.001,0.003,0,0.007-0.001,0.011  c-0.002,0.004-0.006,0.007-0.007,0.011L37.23,78.546z M44.029,62.597l6.097,8.972l-9.236-0.785L44.029,62.597z M62.436,79.474  l0.393,6l-2.134-7.037L62.436,79.474z M65.415,79.001c-0.016,0.034-0.028,0.07-0.036,0.107l-1.504,7.045l-4.346-66.344l4.141-0.562  l4.914,8.467l6.049,16.069l-1.541,18.771L65.415,79.001z M74.387,59.002l1.098-13.366l2.106,4.528L74.387,59.002z"
      /></svg
    >
    <h1>The Piñata Party</h1>
  </div>
  {#if content}
    <div class="md">
      <div class="container">
        {@html content}
        {#if !hasRsvp}
          <p>Please RSVP below:</p>
        {/if}

        {#if id && !hasRsvp}
          <!-- {#if false} -->
          <form
            out:fade
            action="#"
            id="rsvp-form"
            on:submit|preventDefault={submitForm}
          >
            <div class="container">
              {#each names as { name }}
                <p>{name}</p>
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="checkbox">
                  <span class="checkbox__input">
                    <input
                      type="radio"
                      value={true}
                      bind:group={formGroup[name]}
                    />
                    <span class="checkbox__control">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-width="3"
                          d="M1.73 12.91l6.37 6.37L22.79 4.59"
                        />
                      </svg>
                    </span>
                  </span>
                  <span class="radio__label">Yep</span>
                </label>
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="checkbox">
                  <span class="checkbox__input">
                    <input
                      type="radio"
                      value={false}
                      bind:group={formGroup[name]}
                    />
                    <span class="checkbox__control">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-width="3"
                          d="M1.73 12.91l6.37 6.37L22.79 4.59"
                        />
                      </svg>
                    </span>
                  </span>
                  <span class="radio__label">Nope</span>
                </label>
              {/each}

              <button type="submit" disabled={!isValid}>Submit</button>
              {#if formSubmitError}
                <p>
                  Oops, something went wrong... try again? If not let us know
                </p>
              {/if}
            </div>
          </form>
        {:else}
          <div class="rsvp">
            <p>
              Thanks for your RSVP, give us a call if anything changes.
              Hopefully see you soon!
              <br />
              <br />
              <br />
              <i>🤞 🤞 🤞</i>
            </p>
          </div>
        {/if}
      </div>
    </div>
  {/if}
</main>
