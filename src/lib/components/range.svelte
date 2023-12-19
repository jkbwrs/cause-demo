<script lang="ts">
    import { fly } from "svelte/transition";

    export let min: number = 0;
    export let max: number = 100;
    export let value: number = 20;
    export let delay: number = 20;
    export let width: string = "400";
    export let suffix: string = ""
</script>

<div class="slider-container" style="width: {width}px" in:fly={{y: 20, duration: 400, delay: delay}}>
    <div class="slider-labels">
        <span class="slider-label">{min + suffix}</span>
        <span class="slider-label">{max + suffix}</span>
    </div>
    <input type="range" bind:value={value} on:input min={min} max={max} style="--percent: {(value-min)/(max-min)*100}%;">
    <div class="value-label" style="--percent: {(value-min)/(max-min)*100}%;">{value + suffix}</div>
</div>

<style>
    .slider-container {
        position: relative;
        width: 100%;
        margin: 20px auto 60px auto;
        width: 400px;
        max-width: 90vw;
    }

    .slider-labels {
        display: flex;
        justify-content: space-between;
        margin-bottom: 6px;
    }

    .slider-label {
        color: var(--accent);
        font-size: 14px;
    }

    input[type=range] {
        -webkit-appearance: none;
        appearance: none;
        width: 100%;
        height: 5px;
        border-radius: 5px;
        background: linear-gradient(to right, var(--accent) 0%, #899C9C var(--percent), #D9D9D9 var(--percent), #D9D9D9 100%);
        outline: none;
        opacity: 0.7;
        transition: opacity .2s;
    }

    input[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-color: var(--accent);
        cursor: pointer;
    }

    .value-label {
        position: absolute;
        left: var(--percent);
        top: 60px;
        transform: translateX(calc(-50%));
        color: var(--accent);
        text-align: center;
    }
</style>
