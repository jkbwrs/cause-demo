<script lang="ts">
    import Button from "$lib/components/button.svelte";
    import { fly } from "svelte/transition";
    import Nav from "../components/nav.svelte";
    import { enhance } from "$app/forms";
</script>

<svelte:head>
    <title>Passwort Zurücksetzen</title>
</svelte:head>

<Nav>
    <Button link="/login" text="Login" style="font-size: 12px; background-color: var(--accent); color: var(--white)" />
</Nav>

<form class="form" action="?/sendMail" method="POST" use:enhance>
    <h1 in:fly|global={{y: 20, duration: 400, delay: 200}} class="headline">Passwort zurücksetzen</h1>
    <input in:fly|global={{y: 20, duration: 400, delay: 300}} required name="email" type="email" placeholder="Email">
    <button type="submit" style="background-color: var(--accent); color: var(--white); width: 100%" in:fly|global={{y: 20, duration: 400, delay: 500}}>Mail senden</button>
</form>


<style>

    .headline {
        color: var(--accent);
        font-size: 32px;
        margin-bottom: 12px;
        text-align: center;
    }

</style>