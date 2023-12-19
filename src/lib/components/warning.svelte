<script lang="ts">
    export let text: string = "Dein Bluttest wird noch ausgewertet, die neuen Ergebnisse werden dir in Kürze angezeigt."
</script>


<div class="warning">
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