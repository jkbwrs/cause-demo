<script lang="ts">
    import { goto } from "$app/navigation";
    import Button from "$lib/components/button.svelte";
    import { fly } from "svelte/transition";
    import Nav from "../components/nav.svelte";

    function login() {
        // Login Logik
        goto('/')
    }

</script>

<svelte:head>
    <title>Login</title>
</svelte:head>

<Nav>
    <Button link="/signup" text="Account erstellen" style="font-size: 12px; background-color: var(--accent); color: var(--white)" />
</Nav>

<div class="form">
    <h1 in:fly|global={{y: 20, duration: 400, delay: 200}} class="headline">Login</h1>
    <input in:fly|global={{y: 20, duration: 400, delay: 300}} type="email" placeholder="Email">
    <input in:fly|global={{y: 20, duration: 400, delay: 400}} type="password" placeholder="Password">
    <Button text="Log In" on:click={login} style="background-color: var(--accent); color: var(--white); width: 100%" delay={500}/>
    <a href="/password-reset" class="password" in:fly|global={{y: 20, duration: 400, delay: 600}}>Passwort vergessen?</a>
</div>


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