<script lang="ts">
    import { fly } from "svelte/transition";

    export let text: string = "Dein Bluttest wird noch ausgewertet, die neuen Ergebnisse werden dir in Kürze angezeigt."
    export let delay: number = 0
</script>


<div class="warning" in:fly|global={{y: 20, duration: 400, delay: delay}}>
    <img src="../warning.svg" alt="warning" width="22" height="22">
    <p>{text}</p>
</div>


<style>

    .warning {
        width: 100%;
        padding: 12px;
        border: 1px solid var(--accent);
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 12px;
        margin-bottom: 12px;
    }

    p {
        font-size: 14px;
    }
</style>