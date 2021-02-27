<script>
  export let invite;

  import { onMount } from "svelte";

  onMount(async () => {
    const qrCode = new QRCodeStyling({
      width: 300,
      height: 300,
      data: `https://thepinata.party/id=${invite}`,
      margin: 0,
      qrOptions: { typeNumber: "0", mode: "Byte", errorCorrectionLevel: "Q" },
      imageOptions: { hideBackgroundDots: true, imageSize: 0.5, margin: 0 },
      dotsOptions: { type: "extra-rounded", color: "#af1126" },
      backgroundOptions: { color: "#ffffff", gradient: null },
      image:
        "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTc4LjU4NCw0OS45M2wtMi45ODItNi40MWwtNS45OTMtMTUuOTE5bDYuODMxLTcuODk3YzAuMTU1LTAuMTgsMC4xNjMtMC40NDMsMC4wMTktMC42MzFsLTEuOTI0LTIuNTA4ICBjLTAuMTE0LTAuMTQ4LTAuMzAyLTAuMjIyLTAuNDg1LTAuMTg4bC05LjUxMSwxLjcxNGwxLjIyOS03Ljc5M2MwLjAzMS0wLjIwMS0wLjA2Mi0wLjQwMS0wLjIzNS0wLjUwNiAgYy0wLjE3NS0wLjEwNC0wLjM5Ni0wLjA5NS0wLjU1OCwwLjAyN2wtNC4yMDIsMy4xMzZjLTAuMDgxLDAuMDYtMC4xNDIsMC4xNDMtMC4xNzQsMC4yMzhsLTIuMDY5LDYuMDE5YzAsMC0wLjAwMSwwLjAwMS0wLjAwMSwwLjAwMSAgdjBjMCwwLDAsMC4wMDEsMCwwLjAwMmMtMC4wMjEsMC4wNjEtMC4wMywwLjEyNS0wLjAyNiwwLjE5M2wyLjE5NiwzMy41NGwtMTQuMzU0LDEuNjM4bC0xMy4zNTcsMC4xNjcgIGMtMC4wMDUsMC0wLjAwOSwwLjAwMy0wLjAxNCwwLjAwM2MtMC4wNDMsMC4wMDItMC4wODIsMC4wMTUtMC4xMjMsMC4wMjdjLTAuMDIxLDAuMDA2LTAuMDQ0LDAuMDA1LTAuMDYzLDAuMDE0bC01LjM1MywyLjQyNSAgYy0wLjAwNywwLjAwMy0wLjAxLDAuMDExLTAuMDE3LDAuMDE1Yy0wLjAxMiwwLjAwNi0wLjAyNSwwLjAwNi0wLjAzNywwLjAxNGwtNS43NzEsMy41MTJjLTAuMTY1LDAuMTAxLTAuMjU3LDAuMjg3LTAuMjM3LDAuNDc5ICBjMC4wMiwwLjE5MSwwLjE0NywwLjM1NSwwLjMyOSwwLjQybDUuOTE0LDIuMTA2bDEuMTk5LDE1LjMxN2MwLjAyLDAuMjYsMC4yMzcsMC40NjEsMC40OTgsMC40NjFoMS4zNmwxLjY4LDEwLjI1MyAgYzAuMDM4LDAuMjMxLDAuMjMxLDAuNDA2LDAuNDY2LDAuNDE4YzAuMDA5LDAsMC4wMTksMC4wMDEsMC4wMjcsMC4wMDFjMC4yMjMsMCwwLjQyMS0wLjE0OCwwLjQ4MS0wLjM2NWwyLjg4OC0xMC4zMDhoMS4zNzcgIGMwLjIxNiwwLDAuNDA3LTAuMTM4LDAuNDc1LTAuMzQzbDIuNDY5LTcuNDQ1bDEwLjQzNywwLjg4N2w4LjQ0Nyw1LjAzM2wzLjcxNCwxMi4yNDljMC4wMDIsMC4wMDcsMC4wMSwwLjAxLDAuMDEzLDAuMDE3ICBjMC4wMzEsMC4wOSwwLjA4NSwwLjE2NSwwLjE1NywwLjIyM2MwLjAxMywwLjAxLDAuMDI0LDAuMDE4LDAuMDM4LDAuMDI3YzAuMDY5LDAuMDQ1LDAuMTQ2LDAuMDgxLDAuMjM0LDAuMDg3ICBjMC4wMTIsMC4wMDEsMC4wMjQsMC4wMDEsMC4wMzYsMC4wMDFjMC4wNDgsMCwwLjA5Ny0wLjAwNywwLjE0Ni0wLjAyMWMwLjAwNC0wLjAwMSwwLjAwNy0wLjAwNCwwLjAxLTAuMDA1ICBjMC4wNi0wLjAyLDAuMTEzLTAuMDQ4LDAuMTYxLTAuMDg2YzAuMDEtMC4wMDksMC4wMTctMC4wMiwwLjAyNS0wLjAyOWMwLjAzNC0wLjAzMywwLjA2NS0wLjA2OCwwLjA5LTAuMTEgIGMwLjAxMS0wLjAxOSwwLjAxNi0wLjA0LDAuMDI0LTAuMDYxYzAuMDEyLTAuMDI3LDAuMDI2LTAuMDUyLDAuMDMzLTAuMDgybDIuMjQ1LTEwLjUxM2w3LjY5LTE2LjQ3NiAgYzAuMDA1LTAuMDA5LDAuMDA0LTAuMDIsMC4wMDgtMC4wM2MwLjAwMi0wLjAwNCwwLjAwNy0wLjAwNiwwLjAwOS0wLjAxMWw0LjU0OC0xMi41NDVDNzguNjQ2LDUwLjE4Nyw3OC42NCw1MC4wNSw3OC41ODQsNDkuOTN6ICAgTTczLjkyNywxNy40MTRsMS40OSwxLjk0M2wtNi4zMDEsNy4yODRsLTQuMzkyLTcuNTY4TDczLjkyNywxNy40MTR6IE02MS40OTMsMTMuNjY0bDMuMDk0LTIuMzFsLTEuMDg4LDYuOTA4bC0zLjc2MywwLjUxICBMNjEuNDkzLDEzLjY2NHogTTYyLjM1NSw3OC4yNjJsLTIuMjI0LTEuMzI1Yy0wLjAzMy0wLjAyNC0wLjA2NS0wLjA0NS0wLjEwMy0wLjA2MWwtOC41NS01LjA5M0w0NC40NjUsNjEuNDZsMi4yNjctNS45MTIgIGwxNC4wMzItMS42MDFMNjIuMzU1LDc4LjI2MnogTTMyLjEzNyw1Ni4xODlsLTMuMzU2LDkuNjYxbC0wLjYxNS03Ljg2MkwzMi4xMzcsNTYuMTg5eiBNMjMuMDI2LDYxLjA3Mmw0LjE3OS0yLjU0M2wwLjMyNCw0LjE0NyAgTDIzLjAyNiw2MS4wNzJ6IE0zMi45NzQsODcuNDA4bC0xLjI4OC03Ljg2MmgzLjQ5MUwzMi45NzQsODcuNDA4eiBNMzcuMjMsNzguNTQ2aC03LjQ1NmwtMC44MDEtMTAuMjI4ICBjMC4wMDQtMC4wMDksMC4wMTQtMC4wMTMsMC4wMTctMC4wMjJsNC4zNTktMTIuNTQ3bDEyLjI5My0wLjE1M2wtNS45MjUsMTUuNDUyYy0wLjAwMSwwLjAwMywwLDAuMDA3LTAuMDAxLDAuMDExICBjLTAuMDAyLDAuMDA0LTAuMDA2LDAuMDA3LTAuMDA3LDAuMDExTDM3LjIzLDc4LjU0NnogTTQ0LjAyOSw2Mi41OTdsNi4wOTcsOC45NzJsLTkuMjM2LTAuNzg1TDQ0LjAyOSw2Mi41OTd6IE02Mi40MzYsNzkuNDc0ICBsMC4zOTMsNmwtMi4xMzQtNy4wMzdMNjIuNDM2LDc5LjQ3NHogTTY1LjQxNSw3OS4wMDFjLTAuMDE2LDAuMDM0LTAuMDI4LDAuMDctMC4wMzYsMC4xMDdsLTEuNTA0LDcuMDQ1bC00LjM0Ni02Ni4zNDRsNC4xNDEtMC41NjIgIGw0LjkxNCw4LjQ2N2w2LjA0OSwxNi4wNjlsLTEuNTQxLDE4Ljc3MUw2NS40MTUsNzkuMDAxeiBNNzQuMzg3LDU5LjAwMmwxLjA5OC0xMy4zNjZsMi4xMDYsNC41MjhMNzQuMzg3LDU5LjAwMnoiPjwvcGF0aD48L3N2Zz4=",
      dotsOptionsHelper: {
        colorType: { single: true, gradient: false },
        gradient: {
          linear: true,
          radial: false,
          color1: "#6a1a4c",
          color2: "#6a1a4c",
          rotation: "0",
        },
      },
      cornersSquareOptions: { type: "dot", color: "#006341", gradient: null },
      cornersSquareOptionsHelper: {
        colorType: { single: true, gradient: false },
        gradient: {
          linear: true,
          radial: false,
          color1: "#000000",
          color2: "#000000",
          rotation: "0",
        },
      },
      cornersDotOptions: { type: "", color: "#a63647", gradient: null },
      cornersDotOptionsHelper: {
        colorType: { single: true, gradient: false },
        gradient: {
          linear: true,
          radial: false,
          color1: "#000000",
          color2: "#000000",
          rotation: "0",
        },
      },
      backgroundOptionsHelper: {
        colorType: { single: true, gradient: false },
        gradient: {
          linear: true,
          radial: false,
          color1: "#ffffff",
          color2: "#ffffff",
          rotation: "0",
        },
      },
    });

    qrCode.append(document.getElementById(invite));
  });
</script>

<div id={invite}>
  <!-- <p>{invite}</p> -->
</div>
