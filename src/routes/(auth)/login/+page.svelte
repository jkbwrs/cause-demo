<script lang="ts">
    import { goto } from "$app/navigation";
    import Button from "$lib/components/button.svelte";
    import { fly } from "svelte/transition";
    import Nav from "../components/nav.svelte";
    import { enhance } from "$app/forms";

</script>

<svelte:head>
    <title>Login</title>
</svelte:head>

<Nav>
    <Button link="/signup" text="Account erstellen" style="font-size: 12px; background-color: var(--accent); color: var(--white)" />
</Nav>

<form class="form" action="?/login" method="POST" use:enhance>
    <h1 in:fly|global={{y: 20, duration: 400, delay: 200}} class="headline">Login</h1>
    <input in:fly|global={{y: 20, duration: 400, delay: 300}} required type="email" placeholder="Email">
    <input in:fly|global={{y: 20, duration: 400, delay: 400}} required type="password" placeholder="Password">
    <button type="submit" style="background-color: var(--accent); color: var(--white); width: 100%" in:fly|global={{y: 20, duration: 400, delay: 500}}>Log In</button>
    <a href="/password-reset" class="password" in:fly|global={{y: 20, duration: 400, delay: 600}}>Passwort vergessen?</a>
</form>


<style>

    .headline {
        color: var(--accent);
        font-size: 32px;
        margin-bottom: 12px;
    }

    .password {
        margin: 40px 0 -40px 0;
        color: var(--accent);
        font-size: 12px;
    }
</style>