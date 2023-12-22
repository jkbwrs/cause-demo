<script lang="ts">

    export let title: string = ""
    export let icon: string = ""

</script>


<div class="indikator" on:click on:keypress>
    <img class="icon" src="../{icon}.svg" alt={title} height="25" width="25">
    <p class="title">{title}</p>
</div>


<style>

    .indikator {
        position: fixed;
        inset: 20px 0 auto 0;
        z-index: 100;
        margin: 0 auto;
        height: 52px;
        width: 160px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 12px;
        border: 1px solid var(--accent);
        border-radius: 40px;
        cursor: pointer;
        transition: background-color 400ms ease;
    }

    .indikator:hover {
        background-color: var(--lightgrey);
    }

    .icon {
        pointer-events: none;
    }

    .title {
        font-size: 14px;
        pointer-events: none;
        color: var(--accent);
    }

    @media screen and (max-width: 900px) {

        .indikator {
            height: 42px;
            width: 140px;
        }
    }

</style>