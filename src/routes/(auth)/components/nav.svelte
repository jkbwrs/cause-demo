<script lang="ts">

</script>


<nav>
    <a href="/">
        <img src="../logo.svg" alt="Logo">
    </a>

    <slot></slot>
</nav>



<style>

    nav {
        position: fixed;
        inset: 0 0 auto 0;
        z-index: 100;
        height: 70px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        padding: 0 5vw;
    }
</style>