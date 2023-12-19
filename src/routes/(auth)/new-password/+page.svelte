<script lang="ts">
    import { goto } from "$app/navigation";
    import Button from "$lib/components/button.svelte";
    import { fly } from "svelte/transition";
    import Nav from "../components/nav.svelte";

    function newPassword() {
        goto('/')
        // new password Logik
    }

</script>

<svelte:head>
    <title>Neues Passwort</title>
</svelte:head>

<Nav>
    <Button link="/login" text="Login" style="font-size: 12px; background-color: var(--accent); color: var(--white)" />
</Nav>

<div class="form">
    <h1 in:fly|global={{y: 20, duration: 400, delay: 200}} class="headline">Passwort zurücksetzen</h1>
    <input in:fly|global={{y: 20, duration: 400, delay: 300}} type="password" placeholder="Passwort">
    <input in:fly|global={{y: 20, duration: 400, delay: 300}} type="password" placeholder="Passwort wiederholen">
    <Button text="Passwort speichern" on:click={newPassword} style="background-color: var(--accent); color: var(--white); width: 100%" delay={500}/>
</div>


<style>

    .headline {
        color: var(--accent);
        font-size: 32px;
        margin-bottom: 12px;
        text-align: center;
    }
</style>