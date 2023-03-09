<script lang="ts">
  import { colors } from "./colors";
  import CopySquare from "./CopySquare.svelte";
  import type { BashStyle } from "./types";
</script>

<header><h1>Bash color palette</h1></header>
<div>
  <main>
    {#each colors as color, idx}
      <CopySquare {idx} {color} />
    {/each}
  </main>
</div>

<style>
  header {
    width: 90%;
    margin-left: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 0.1em solid white;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  main {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5%;
    margin: 1em;
    max-width: 90em;
    max-height: 90em;

    width: 100%;
    height: 100%;
    aspect-ratio: 1/1;
  }

  @media (max-width: 480px) {
    main {
      font-size: 1.25em;
      grid-template-columns: auto auto;
      grid-template-rows: auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto;
      aspect-ratio: auto;

      max-width: none;
      max-height: none;
      height: 100%;
      width: 100%;
    }
  }

  @media (min-aspect-ratio: 2.2/1) {
    main {
      font-size: 3em;
      aspect-ratio: auto;
      max-width: none;
      max-height: none;
    }
  }
</style>
