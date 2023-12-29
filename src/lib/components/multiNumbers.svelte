<script lang="ts">
    import {fly} from 'svelte/transition'

    export let times: number = 0
    export let next = () => {}
    export let delay: number = 3

    export let length: number = 83
    export let current: number = 0
    export let start: number = 18

    $: if (current >= 0 && current < length) {
        times = current + start;
    }

</script>


<div class="grid">
    {#each Array.from({ length }, (_, i) => i + start) as item, i}
        <div class="item {current == i ? "current" : null}" on:click={() => {current = i, next()}} in:fly|global={{y: 10, duration: 400, delay: 200 + i * delay}}>
            {item}
        </div>
    {/each}
</div>


<style>

    .grid {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        gap: 8px;
        flex-wrap: wrap;
        max-width: 680px;
    }

    .item {
        height: 45px;
        width: 45px;
        border: 1px solid var(--accent);
        color: var(--accent);
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    .current {
        background-color: var(--accent);
        color: var(--white);
    }

    @media screen and (max-width: 900px) {

        .item {
            height: 32px;
            width: 32px;
        }

        .grid {
            max-width: 540px;
        }

    }
</style>