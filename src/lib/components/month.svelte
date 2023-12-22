<script lang="ts">
    import { fly } from "svelte/transition";

    export let current: number = 6
    export let delay: number = 300

    let netto: number = 0
    let mwst: number = 0
    let brutto: number = 0


    $: if (current === 1) {
        netto = 100
        mwst = 19
        brutto = 119
    } else if (current === 2) {
        netto = 183
        mwst = 35
        brutto = 218
    } else if (current === 3) {
        netto = 250
        mwst = 47
        brutto = 297
    } else if (current === 6) {
        netto = 479
        mwst = 91
        brutto = 570
    }

</script>


<div class="month" in:fly|global={{y: 20, duration: 400, delay: delay}}>
    <div class="step {current === 1 ? "current" : ""}" on:click={() => current = 1}>
        <p class="title">1 Monate</p>
        <p class="description">Basispreis</p>
    </div>

    <div class="step {current === 2 ? "current" : ""}" on:click={() => current = 2}>
        <p class="title">2 Monate</p>
        <p class="description">8% günstiger</p>
    </div>

    <div class="step {current === 3 ? "current" : ""}" on:click={() => current = 3}>
        <p class="title">3 Monate</p>
        <p class="description">16% günstiger</p>
    </div>

    <div class="step {current === 6 ? "current" : ""}" on:click={() => current = 6}>
        <p class="title">6 Monate</p>
        <p class="description">20% günstiger</p>
    </div>
</div>

<div class="pricing" in:fly|global={{y: 20, duration: 400, delay: delay + 100}}>
    <div class="left">
        <p>Netto:</p>
        <p>MwSt.:</p>
        <p>Brutto:</p>
    </div>

    <div class="right">
        <p>{netto},00 €</p>
        <p>{mwst},00 €</p>
        <p>{brutto},00 €</p>
    </div>
</div>


<style>

    .month {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid var(--accent);
        border-radius: 12px;
        width: 500px;
        max-width: 90vw;
        margin: 0 auto;
        overflow: hidden;
        margin-bottom: 12px;
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

    .pricing {
        width: 500px;
        max-width: 90vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 12px;
        padding: 40px;
        border: 1px solid var(--accent);
        border-radius: 12px;
        margin: 0 auto;
        margin-bottom: 12px;
    }

    .left, .right {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .left {
        text-align: left;
    }

    .right {
        text-align: right;
    }

    .title {
        margin: 0 0 4px 0;
        font-size: 15px;
        color: var(--accent);
        font-family: 'Ardela', sans-serif;
    }

    .description {
        font-size: 10px;
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