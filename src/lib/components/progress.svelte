<script lang="ts">

    export let steps: number = 2
    export let current: number = 0

</script>


<div class="progress">
    <div class="progress-bar" style="--width: calc( 100% / {steps} * {current})" />
</div>


<style>

    .progress {
        width: 400px;
        max-width: 80%;
        height: 6px;
        overflow: hidden;
        border: 1px solid var(--accent);
        border-radius: 12px;
        margin: 0 auto;
        position: fixed;
        inset: auto 0 40px 0;
    }

    .progress-bar {
        height: 100%;
        width: var(--width);
        background-color: var(--accent);
        transition: all 400ms ease;
    }

    @media screen and (max-width: 600px) {

        .progress {
            inset: auto 0 90px 0;
        }

    }


</style>