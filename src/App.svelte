<script lang="ts">
  import CopySquare from "./CopySquare.svelte";
  import type { BashStyle } from "./types";

  let colors: BashStyle[] = [];

  //#region Text color

  colors.push({
    name: "Black text",
    code: "\\e[30m",
    cssCode: "black",
    foreground: true,
    whiteFrame: true,
  });
  colors.push({
    name: "Red text",
    code: "\\e[31m",
    cssCode: "red",
    foreground: true,
  });
  colors.push({
    name: "Green text",
    code: "\\e[32m",
    cssCode: "green",
    foreground: true,
  });
  colors.push({
    name: "Brown text",
    code: "\\e[33m",
    cssCode: "brown",
    foreground: true,
  });
  colors.push({
    name: "Cyan text",
    code: "\\e[36m",
    cssCode: "cyan",
    foreground: true,
  });
  colors.push({
    name: "Purple text",
    code: "\\e[35m",
    cssCode: "purple",
    foreground: true,
  });
  colors.push({
    name: "Light Gray text",
    code: "\\e[37m",
    cssCode: "#ccc",
    foreground: true,
  });
  colors.push({
    name: "Light blue text",
    code: "\\e[1;34m",
    cssCode: "#728FCE",
    foreground: true,
  });
  colors.push({
    name: "Blue text",
    code: "\\e[34m",
    cssCode: "blue",
    foreground: true,
    whiteFrame: true,
  });
  colors.push({
    name: "Light red text",
    code: "\\e[1;31m",
    cssCode: "#FF3333",
    foreground: true,
  });

  colors.push({
    name: "Light green text",
    code: "\\e[1;32m",
    cssCode: "#90EE90",
    foreground: true,
    blackText: true,
  });
  colors.push({
    name: "Yellow text",
    code: "\\e[1;33m",
    cssCode: "yellow",
    foreground: true,
  });
  colors.push({
    name: "Light cyan text",
    code: "\\e[1;36m",
    cssCode: "#E0FFFF",
    foreground: true,
  });
  colors.push({
    name: "Light purple text",
    code: "\\e[1;35m",
    cssCode: "#D46FF9",
    foreground: true,
  });
  colors.push({
    name: "Dark gray text",
    code: "\\e[1;30m",
    cssCode: "#A9A9A9",
    foreground: true,
  });
  colors.push({
    name: "White text",
    code: "\\e[1;37m",
    cssCode: "white",
    foreground: true,
  });

  //#endregion Text color

  //#region Bg color

  colors.push({
    name: "Black background",
    code: "\\e[40m",
    cssCode: "black",
    foreground: false,
    whiteFrame: true,
  });
  colors.push({
    name: "Red background",
    code: "\\e[41m",
    cssCode: "red",
    foreground: false,
  });
  colors.push({
    name: "Green background",
    code: "\\e[42m",
    cssCode: "green",
    foreground: false,
  });
  colors.push({
    name: "Brown background",
    code: "\\e[43m",
    cssCode: "brown",
    foreground: false,
  });
  colors.push({
    name: "Cyan background",
    code: "\\e[46m",
    cssCode: "cyan",
    foreground: false,
    blackText: true,
  });
  colors.push({
    name: "Light Gray background",
    code: "\\e[47m",
    cssCode: "#ccc",
    foreground: false,
    blackText: true,
  });
  colors.push({
    name: "Purple background",
    code: "\\e[45m",
    cssCode: "purple",
    foreground: false,
  });
  colors.push({
    name: "Light blue background",
    code: "\\e[1;44m",
    cssCode: "#728FCE",
    foreground: false,
  });
  colors.push({
    name: "Blue background",
    code: "\\e[44m",
    cssCode: "blue",
    foreground: false,
    whiteFrame: true,
  });
  colors.push({
    name: "Light red background",
    code: "\\e[1;41m",
    cssCode: "#FF3333",
    foreground: false,
  });
  colors.push({
    name: "Light green background",
    code: "\\e[1;42m",
    cssCode: "#90EE90",
    foreground: false,
    blackText: true,
  });
  colors.push({
    name: "Yellow background",
    code: "\\e[1;43m",
    cssCode: "yellow",
    foreground: false,
    blackText: true,
  });
  colors.push({
    name: "Light cyan background",
    code: "\\e[1;46m",
    cssCode: "#E0FFFF",
    foreground: false,
    blackText: true,
  });
  colors.push({
    name: "Dark gray background",
    code: "\\e[1;40m",
    cssCode: "#A9A9A9",
    foreground: false,
    blackText: true,
  });
  colors.push({
    name: "Light purple background",
    code: "\\e[1;45m",
    cssCode: "#D46FF9",
    foreground: false,
  });
  colors.push({
    name: "White background",
    code: "\\e[1;47m",
    cssCode: "white",
    foreground: false,
    blackText: true,
  });

  //#endregion Bg color

  colors.push(null);

  //#region Special

  colors.push({
    name: "Bold",
    code: "\\e[1m",
    customStyle: "font-weight:bold",
  });

  colors.push({
    name: "Underline",
    code: "\\e[4m",
    customStyle: "text-decoration: underline",
  });

  colors.push({
    name: "Line through",
    code: "\\e[9m",
    customStyle: "text-decoration: line-through",
  });

  colors.push({
    name: "Normal",
    code: "\\e[0m",
    customStyle: " ",
  });

  colors.push({
    name: "Italic",
    code: "\\e[0m",
    customStyle: "font-style: italic",
  });

  colors.push({
    name: "Disabled",
    code: "\\e[m",
    customStyle: "opacity: 0.5",
  });

  colors.push({
    name: "Inverse",
    code: "\\e[m",
    customStyle: "background: white",
    blackText: true,
  });

  //#endregion Special
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
