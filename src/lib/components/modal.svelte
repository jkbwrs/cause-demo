<script lang="ts">
    import { fade, scale } from "svelte/transition";


    export let title: string = ""
    export let transparent: boolean = false

</script>


<div class="modal">
    <div class="bg" on:click on:keypress role="button" tabindex="0" in:fade={{duration: 200}} out:fade={{duration: 200, delay: 200}} />
    <div class="inner {transparent ? "transparent" : ""}" in:scale={{start: 0.9, duration: 400, delay: 200}} out:scale={{start: 0.9, duration: 400}}>
        <div class="header">
            <h3>{title}</h3>
            <img on:click on:keypress src="../close.svg" alt="close" class="close" height="20" width="20">
        </div>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</div>


<style>

    .modal {
        height: 100%;
        width: 100%;
        position: fixed;
        z-index: 210;
        inset: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .bg {
        position: absolute;
        inset: 0;
        z-index: 0;
        height: 100%;
        width: 100%;
        background-color: var(--transparent);
        -webkit-backdrop-filter: blur(12px);
        backdrop-filter: blur(12px);
        cursor: pointer;
    }

    .inner {
        z-index: 10;
        padding: 20px;
        background-color: var(--white);
        border: 1px solid var(--grey);
        border-radius: 6px;
        min-width: 380px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
    }

    .transparent {
        background-color: transparent;
        border: none;
        gap: 12px;
    }

    .header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 12px;
        margin-bottom: 12px;
    }

    .close {
        cursor: pointer;
        transform: rotate(0deg);
        transition: transform 400ms ease;
    }

    .close:hover {
        cursor: pointer;
        transform: rotate(180deg);
    }

    .content {
        width: 100%;
    }

    @media screen and (max-width: 600px) {
        .inner {
            max-width: 90vw;
        }
    }
</style>