<script lang="ts">
    import { fly } from "svelte/transition";


    export let title: string = ""
    export let icon: string = ""
    export let arrow: boolean = false
    export let arrowIcon: string = ""
    export let arrowIconSize: number = 16
    export let isChecked: boolean = false
    export let delay: number = 0
    export let style: string = ""

</script>

<div class="item {arrow ? "hover" : null}" on:click style="opacity: {isChecked ? "0.4" : "1"}; {arrow ? "width: 100%; cursor: pointer" : ''}; {style}" in:fly|global={{y: 20, duration: 400, delay: delay}}>
    <div class="left">
        <img src="../{icon}.svg" alt={title} width="35" height="35">
        <h3 class="title">{title}</h3>
    </div>

    {#if arrow}
        <img src="../{arrowIcon ? arrowIcon : "arrow"}.svg" alt="arrow" class="arrow" height={arrowIconSize} width={arrowIconSize} >
    {:else}
        <input type="checkbox" class="checkbox" bind:checked={isChecked}>
    {/if}
</div>


<style>

    .item {
        max-width: 100%;
        width: 320px;
        height: 60px;
        border: 1px solid var(--grey);
        border-radius: 4px;
        margin: 0 auto 12px auto;
        padding: 0 12px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        transition: background-color 400ms ease;
    }

    .item.hover:hover {
        background-color: var(--lightgrey);
    }

    .left {
        display: flex;
        gap: 12px;
        align-items: center;
    }

    .title {
        font-size: 16px;
    }

    .icon {

    }

    .arrow {
        margin-left: auto;
    }

    .checkbox {
        appearance: none;
        -webkit-appearance: none;
        margin-left: auto;
        height: 22px;
        width: 22px;
        border: 2px solid var(--accent);
        background-color: transparent;
        cursor: pointer;
        border-radius: 4px;
        position: relative;
        opacity: 0.5;
        pointer-events: none;
    }

    .checkbox:checked {
        background-color: var(--accent);
        opacity: 1;
    }

    .checkbox:checked::after {
        content: '✓';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        color: var(--white);
        font-size: 16px;
    }

</style>