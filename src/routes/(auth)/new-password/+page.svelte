<script lang="ts">
    import { goto } from "$app/navigation";
    import Button from "$lib/components/button.svelte";
    import { fly } from "svelte/transition";
    import Nav from "../components/nav.svelte";
    import { enhance } from "$app/forms";

</script>

<svelte:head>
    <title>Neues Passwort</title>
</svelte:head>

<Nav>
    <Button link="/login" text="Login" style="font-size: 12px; background-color: var(--accent); color: var(--white)" />
</Nav>

<form class="form" action="?/newPassword" method="POST" use:enhance>
    <h1 in:fly|global={{y: 20, duration: 400, delay: 200}} class="headline">Passwort zurücksetzen</h1>
    <input in:fly|global={{y: 20, duration: 400, delay: 300}} required name="password" type="password" placeholder="Passwort">
    <input in:fly|global={{y: 20, duration: 400, delay: 300}} required name="passwordConfirmed" type="password" placeholder="Passwort wiederholen">
    <button type="submit" style="background-color: var(--accent); color: var(--white); width: 100%" in:fly|global={{y: 20, duration: 400, delay: 500}}>Passwort speichern</button>
</form>


<style>

    .headline {
        color: var(--accent);
        font-size: 32px;
        margin-bottom: 12px;
        text-align: center;
    }

</style>