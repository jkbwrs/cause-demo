<script lang="ts">
    import { fly } from "svelte/transition";

    export let current: string = ""
    export let delay: number = 300
</script>


<div class="container" in:fly|global={{y: 20, duration: 400, delay: delay}}>
    <div class="step {current === "3" ? "current" : ""}" on:click={() => current = "3"}>
        <p class="title">3 Monate</p>
        <p class="description">Basispreis</p>
    </div>

    <div class="step {current === "6" ? "current" : ""}" on:click={() => current = "6"}>
        <p class="title">6 Monate</p>
        <p class="description">10% günstiger</p>
    </div>

    <div class="step {current === "9" ? "current" : ""}" on:click={() => current = "9"}>
        <p class="title">9 Monate</p>
        <p class="description">15% günstiger</p>
    </div>

    <div class="step {current === "12" ? "current" : ""}" on:click={() => current = "12"}>
        <p class="title">12 Monate</p>
        <p class="description">20% günstiger</p>
    </div>
</div>


<style>

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid var(--accent);
        border-radius: 12px;
        width: 600px;
        margin: 0 auto;
        overflow: hidden;
    }

    .step {
        height: 70px;
        width: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        cursor: pointer;
    }

    .current {
        background-color: var(--accent);
    }

    .title {
        margin: 0;
        font-size: 18px;
        color: var(--accent);
        font-family: 'Ardela', sans-serif;
    }

    .description {
        font-size: 12px;
        margin: 0;
        color: var(--accent);
    }

    .current .title,
    .current .description {
        color: var(--white);
    }

    @media screen and (max-width: 600px) {
        .container {
            width: 90vw;
        }

        .title {
            font-size: 12px;
        }

        .description {
            font-size: 10px;
        }
    }

</style>