<script lang="ts">
    import Button from '$lib/components/button.svelte';
    import Modal from '$lib/components/modal.svelte';
    import RadialChart from '$lib/components/radialChart.svelte';
    import TreeChart from '$lib/components/treeChart.svelte';
    import Warning from '$lib/components/warning.svelte';
    import { fly, scale } from 'svelte/transition';
    import type { PageData } from './$types';
    import {user} from "$lib/states"

    export let data: PageData;

    let empty: boolean = false;
    let showModal: boolean = false;
    let bloodTest: boolean = false;

    interface MineralData {
        [key: string]: number;
    }

    interface TransformedMineral {
        name: string;
        value: number;
    }

    let transformedMineralData: { values: number[], labels: string[] };
    let transformedSonstigeData: { values: number[], labels: string[] };

    const transformMinerals = (minerals: MineralData): TransformedMineral[] => {
        return Object.entries(minerals).map(([name, value]) => ({ name, value }));
    };

    const transformForRadialChart = (minerals: TransformedMineral[]): { values: number[], labels: string[] } => {
        const values = minerals.map(mineral => mineral.value);
        const labels = minerals.map(mineral => mineral.name);
        return { values, labels };
    };

    $: {
        const mineralArray = transformMinerals(data.info.minerals);
        transformedMineralData = transformForRadialChart(mineralArray);
        const sonstigeArray = transformMinerals(data.info.other);
        transformedSonstigeData = transformForRadialChart(sonstigeArray);
    }
</script>


<svelte:head>
    <title>Dashboard</title>
    <meta name="description" content="Entdecken Sie Ihr persönliches Ernährungs-Dashboard.">
</svelte:head>


{#if $user != null}

    {#if empty}
        <div class="empty">
            <div class="empty-content">
                <h1 in:fly|global={{y: 20, duration: 400, delay: 200}}>Cause <br/> we're Unique</h1>
                <p style="margin-bottom: 20px" in:fly|global={{y: 20, duration: 400, delay: 400}}>Du hast noch keinen Nutrition Mix erstellt, <br> erstelle diesen jetzt</p>
                <Button link="/mix" text="Start now" delay={600} />
            </div>
            <img src="../fingerprint.svg" alt="Fingerprint" class="fingerprint" in:scale|global={{start: 0.9, duration: 800}}>
        </div>
    {:else}
        <div class="dashboard">
            <div class="header">
                <h1 in:fly|global={{y: 20, duration: 400, delay: 200}}>Dein Mix</h1>
                {#if bloodTest}
                    <Button text="Bluttest Ergebnisse" style="background-color: var(--accent)" yellow={false} on:click={() => showModal = true} />
                {/if}
            </div>
            {#if !bloodTest}
                <Warning delay={300} />
            {/if}
            <TreeChart delay={400} />
            <div class="charts">
                <RadialChart data={transformedMineralData} title="Mineralien & Spurenelemente" delay={500} />
                <RadialChart data={transformedSonstigeData} title="Sonstiges" delay={700} />
            </div>
        </div>
    {/if}


    {#if !empty && showModal}
        <Modal title="Bluttest Ergebnisse" on:click={() => showModal = false}>
            <p class="description">Deine Bluttest Ergebnisse sind noch nicht verfügbar, <br> wir benachrichtigen dich sobald diese verfügbar sind.</p>

        </Modal>
    {/if}

{/if}



<style>

    .empty {
        z-index: 10;
        height: calc(100vh - 60px);
        width: 90%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        text-align: center;
    }

    .empty-content {
        z-index: 10;
    }

    .dashboard {
        z-index: 10;
        max-width: 1220px;
        width: 90vw;
        margin: 0 auto;
        padding-bottom: 100px;
    }

    .fingerprint {
        z-index: 0;
        position: absolute;
        inset: auto 0;
        margin: 0 auto 0 auto;
        max-height: 90vh;
        max-width: 90%;
    }

    h1 {
        margin-bottom: 12px;
    }

    .charts {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }

    .header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }

    .description {
        font-size: 14px;
        margin: 0 0 20px 0;
    }

    @media screen and (max-width: 1100px) {
        .charts {
            grid-template-columns: 1fr;
        }
    }

    @media screen and (max-width: 600px) {
        h1 {
            margin-bottom: 0px;
        }
    }

</style>