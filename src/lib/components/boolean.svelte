<script lang="ts">

    export let current: number = 0
    export let list: { name: string; subline: string; }[] = [];
</script>


<div class="tabs">
    {#each list as tab, i}
        <div class="tab">
            {tab.name}
            <p>{tab.subline}</p>
        </div>
    {/each}
</div>


<style>

    .tabs {
        border: 1px solid;
        display: flex;
        padding: 12px;
    }

    .tab {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .current {

    }
</style>