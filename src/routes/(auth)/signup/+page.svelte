<script lang="ts">
    import { goto } from "$app/navigation";
    import Button from "$lib/components/button.svelte";
    import { fly } from "svelte/transition";
    import Nav from "../components/nav.svelte";

    function signup() {
        // Signup Logik
        goto('/')
    }

</script>

<svelte:head>
    <title>Account erstellen</title>
</svelte:head>

<Nav>
    <Button link="/login" text="Login" style="font-size: 12px; background-color: var(--accent); color: var(--white)" />
</Nav>

<form class="form">
    <h1 in:fly|global={{y: 20, duration: 400, delay: 200}} class="headline">Sign Up</h1>
    <input in:fly|global={{y: 20, duration: 400, delay: 200}} type="text" placeholder="Vorname">
    <input in:fly|global={{y: 20, duration: 400, delay: 300}} type="text" placeholder="Lastname">
    <input in:fly|global={{y: 20, duration: 400, delay: 400}} type="email" placeholder="Email">
    <input in:fly|global={{y: 20, duration: 400, delay: 500}} type="email" placeholder="Email wiederholen">
    <input in:fly|global={{y: 20, duration: 400, delay: 600}} type="password" placeholder="Passwort">
    <input in:fly|global={{y: 20, duration: 400, delay: 700}} type="password" placeholder="Passwort wiederholen">
    <Button text="Account erstellen" on:click={signup} style="background-color: var(--accent); color: var(--white); width: 100%" delay={800}/>
</form>


<style>

    .headline {
        color: var(--accent);
        font-size: 32px;
        margin-bottom: 12px;
    }
</style>