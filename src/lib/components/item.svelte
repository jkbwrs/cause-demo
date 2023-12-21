<script lang="ts">
    import { fly } from "svelte/transition";

    export let title: string = ""
    export let icon: string = ""
    export let delay: number = 0
    export let current: string = ""
    export let value: string = ""

    let selected: boolean = false

    $: {
        if (current === value) selected = true
        else selected = false
    }
</script>

<div class="item {selected ? "current" : ""}" on:click in:fly={{y: 20, duration: 400, delay: delay}}>
    <img class="icon" src="../{icon}.svg" alt={title} width="45" height="45">
    <p class="title">{title}</p>
</div>


<style>

    .item {
        padding: 20px;
        border: 1px solid var(--accent);
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 12px;
        height: 120px;
        width: 250px;
        cursor: pointer;
        transition: background-color 400ms ease;
    }

    .item:hover {
        background-color: var(--lightgrey);
    }

    .icon {
        width: 32px;
        height: 32px;
    }

    .title {
        color: var(--accent);
    }

    .current {
        background-color: var(--lightgrey);
    }

    @media screen and (max-width: 600px) {
        .item {
            padding: 12px;
            border: 1px solid var(--accent);
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 12px;
            height: 100px;
            width: 45%;
            cursor: pointer;
            transition: background-color 400ms ease;
        }

        .title {
            font-size: 12px;
        }
    }
</style>