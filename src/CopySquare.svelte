<script lang="ts">
    import type { BashColor, BashNotColor, BashStyle } from "./types";

    export let idx: number;
    export let color: BashStyle | null;

    const rotates = [-5, -12, 18, 0, -20, 18, 5];

    function getCssProps(color: BashStyle, idx: number) {
        if (!color) return "";

        let style: any = {
            transform: `rotate(${rotates[idx % 7]}deg)`,
        };

        const isBashColor = !(color as BashNotColor)?.customStyle;
        if (isBashColor) {
            const bashColor = color as BashColor;
            style.color = `${
                bashColor.foreground ? bashColor.cssCode : "inherit"
            }`;
            style.backgroundColor = `${
                !bashColor.foreground ? bashColor.cssCode : "inherit"
            }`;
        } else {
            const bashColor = color as BashNotColor;
            style.additional = bashColor.customStyle;
        }

        return [
            `--rotate-transform: ${style.transform};`,
            `
        color: ${style.color ?? "inherit"};
        background-color: ${style.backgroundColor ?? "inherit"};
        ${style.additional ? "font-family:serif;" + style.additional : ""}
        `,
        ];
    }

    $: cssStyle = getCssProps(color, idx);

    let copied = false;
    let alreadyCopied = false;

    function copy(color: BashStyle) {
        // Get the text field

        // Copy the text inside the text field
        navigator.clipboard.writeText(color.code);
        copied = true;
        alreadyCopied = true;
        setTimeout(() => (copied = false), 500);
    }
</script>

{#if !!color}
    <button
        on:click={() => copy(color)}
        style={(color.whiteFrame ? "background: white;" : "") +
            (color.blackText ? "color: black;" : "")}
        class={(alreadyCopied ? "already-copied" : "") +
            (copied ? " copied" : "")}
    >
        <p style={cssStyle[0]}><span style={cssStyle[1]}>{color.name}</span></p>
    </button>
{:else}
    <div><h2>&#8595;Specials&#8595;</h2></div>
{/if}

<style>
    div,
    button {
        font-size: inherit;
        background: inherit;
        font-family: inherit;
        color: inherit;

        display: flex;
        align-items: center;
        justify-content: center;
        border: solid 0.1em white;
        margin: 0.4em;
        position: relative;
    }
    div {
        background: white;
        color: black;
    }

    button:after {
        position: absolute;
        content: "Copied!";
        display: block;
        width: 100%;
        font-size: 2.5em;
        font-family: inherit;
        padding-top: calc(50% - 2em);
        padding-bottom: calc(50% - 2em);
        text-align: center;
        color: white;
        background: rgb(0, 50, 5);
        background: linear-gradient(
            0deg,
            rgba(0, 50, 5, 1) 0%,
            rgba(0, 0, 0, 1) 100%
        );

        transform: scale(0);
    }

    button.already-copied:after {
        transition: 0.2s ease;
    }

    button.copied:after {
        transform: scale(1);
    }

    button:hover {
        transition: 0.2s ease;
        transform: scale(1.05);
        cursor: pointer;
    }

    p {
        text-align: center;
        font-size: 2.5em;
        width: fit-content;
        transform: var(--rotate-transform);
        margin: 1em;
    }
    h2 {
        font-size: 3em;
        text-decoration: underline double;
    }

    @media (max-width: 480px) {
        p {
            transform: none !important;
        }
        button:after {
            padding-top: 1em !important;
            padding-bottom: 1em !important;
        }
    }

    @media (min-aspect-ratio: 2.2/1) {
        p {
            transform: none !important;
        }
    }
</style>
