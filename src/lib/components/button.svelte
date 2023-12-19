<script lang="ts">
    import { fly } from "svelte/transition";

    export let text: string = ""
    export let link: string = ""
    export let yellow: boolean = true
    export let delay: number = 0
    export let style: string = ""
</script>



{#if !link}
    <button on:click class="button {yellow ? "yellow" : ""}" style={style} in:fly|global={{y: 20, duration: 400, delay: delay}}>
        {text}
    </button>
{:else}
    <a href={link}>
        <button on:click class="button {yellow ? "yellow" : ""}" style={style} in:fly|global={{y: 20, duration: 400, delay: delay}}>
            {text}
        </button>
    </a>
{/if}



<style>

    .button {
        padding: 10px 28px;
        background-color: var(--black);
        border-radius: 4px;
        appearance: none;
        -webkit-appearance: none;
        color: var(--white);
        border: none;
        cursor: pointer;
    }

    .yellow {
        background-color: var(--yellow);
        color: var(--black);
    }


    @media screen and (max-width: 600px) {

        button {
            padding: 10px 12px;
            background-color: var(--black);
            border-radius: 4px;
            appearance: none;
            -webkit-appearance: none;
            color: var(--white);
            border: none;
            cursor: pointer;
        }

    }
</style>