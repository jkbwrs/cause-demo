<script lang="ts">
    import { fly } from "svelte/transition";
    import Progress from "./progress.svelte";


    export let title: string = ""
    export let description: string = ""
    export let progress: boolean = true

    export let step: number = 0
    export let current: number = 0
</script>


<div class="step">
    <div class="header">
        <h2 class="title" in:fly|global={{y: 20, duration: 400}}>{title}</h2>
        <p class="description" in:fly|global={{y: 20, duration: 400, delay: 200}}>{description}</p>
    </div>
    <div class="content">
        <slot></slot>
    </div>
</div>

{#if progress}
    <div class="progress">
        <Progress bind:steps={step} bind:current={current} />
    </div>
{/if}


<style>

    .step {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 20px;
        position: absolute;
        text-align: center;
    }

    .header {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-bottom: 24px;
        max-width: 550px;
    }

    .title {
        margin-bottom: 12px;
    }

    .description {

    }

    .content {
        width: 100%;
    }

    .progress {
        position: absolute;
        inset: auto auto 20px auto;
        width: 420px;
        max-width: 80vw;
    }
</style>