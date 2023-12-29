<script lang="ts">
    import { goto } from "$app/navigation";
    import Button from "$lib/components/button.svelte";
    import { fly } from "svelte/transition";
    import Nav from "../components/nav.svelte";
    import { enhance } from "$app/forms";

</script>

<svelte:head>
    <title>Account erstellen</title>
</svelte:head>

<Nav>
    <Button link="/login" text="Login" style="font-size: 12px; background-color: var(--accent); color: var(--white)" />
</Nav>

<form class="form" action="?/signup" method="POST" use:enhance>
    <h1 in:fly|global={{y: 20, duration: 400, delay: 200}} class="headline">Sign Up</h1>
    <input in:fly|global={{y: 20, duration: 400, delay: 200}} required name="firstname" type="text" placeholder="Vorname">
    <input in:fly|global={{y: 20, duration: 400, delay: 300}} required name="lastname" type="text" placeholder="Lastname">
    <input in:fly|global={{y: 20, duration: 400, delay: 400}} required name="email" type="email" placeholder="Email">
    <input in:fly|global={{y: 20, duration: 400, delay: 500}} required name="emailConfirmed" type="email" placeholder="Email wiederholen">
    <input in:fly|global={{y: 20, duration: 400, delay: 600}} required name="password" type="password" placeholder="Passwort">
    <input in:fly|global={{y: 20, duration: 400, delay: 700}} required name="passwordConfirmed" type="password" placeholder="Passwort wiederholen">
    <button type="submit" style="background-color: var(--accent); color: var(--white); width: 100%" in:fly|global={{y: 20, duration: 400, delay: 800}}>Account erstellen</button>
</form>


<style>

    .headline {
        color: var(--accent);
        font-size: 32px;
        margin-bottom: 12px;
    }
</style>