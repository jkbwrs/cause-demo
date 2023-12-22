<script lang="ts">
    import { goto } from "$app/navigation";
    import {onDestroy, onMount} from 'svelte'
    import { fly } from "svelte/transition";
    import {user} from "$lib/states"
    import Button from "$lib/components/button.svelte";

    let profil: boolean = false
    let triggerElement: HTMLElement
    let innerWidth: number

    function closeDD() {
        innerWidth < 600 ? profil = true : profil = false
    }

    function logout() {
        // Logout Logik
        goto('/login')
    }

    function clickOutside(node: HTMLElement) {
        const handleClick = (event: MouseEvent) => {
            if (node && !node.contains(event.target as Node) && !triggerElement.contains(event.target as Node)) {
                profil = false;
            }
        };
        document.addEventListener("click", handleClick);
        onDestroy(() => {
            document.removeEventListener("click", handleClick);
        });
        return {
            destroy() {
                document.removeEventListener("click", handleClick);
            }
        };
    }

    $: if (innerWidth < 600) profil = true


</script>

<svelte:window bind:innerWidth />

{#if $user != null}
    <nav>
        <a href="/" aria-label="logo">
            <svg width="36" height="36" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.2102 26.119C20.5253 27.1529 18.5341 27.7273 16.4279 27.7273C11.7561 27.7273 7.73529 24.8553 6.01208 20.7962C5.47597 19.4942 5.16962 18.0391 5.16962 16.5073C5.16962 14.9756 5.47597 13.5204 6.01208 12.1802C6.93112 9.95914 8.57775 8.12105 10.6073 6.85737L7.96505 2.45361C3.17836 5.32563 0 10.5335 0 16.5073C0 18.7284 0.459522 20.8345 1.26369 22.7492C3.71447 28.723 9.57338 32.8969 16.4279 32.8969C19.5297 32.8969 22.44 32.0162 24.8908 30.5227C27.8777 28.723 30.2136 26.0424 31.5538 22.7875L26.8055 20.7962C25.8864 23.0172 24.2398 24.8936 22.2102 26.119Z" fill="#899C9C"/>
                <path d="M16.4277 0.0749512V5.24457C21.1378 5.24457 25.1204 8.11659 26.8053 12.214L31.5537 10.2227C29.1029 4.24894 23.244 0.0749512 16.4277 0.0749512Z" fill="#899C9C"/>
            </svg>            
        </a>

        {#if innerWidth > 600}
            <div class="profil-trigger" bind:this={triggerElement} on:click={() => profil = !profil} on:keypress={() => profil = !profil} role="button" tabindex="0">
                <img src="../profil.svg" width="22" height="22" alt="Profil">
            </div>
        {/if}
    </nav>

    {#if profil}
            <div class="profil-dd" use:clickOutside transition:fly={{y: 20, duration: 400}}>
                <div class="profil">
                    <a class="link" href="/" on:click={closeDD}>
                        <img src="../dashboard.svg" alt="" width="20" height="20">
                        Dashboard
                    </a>
                    <a class="link" href="/profil" on:click={closeDD}>
                        <img src="../profil-outline.svg" alt="" width="20" height="20">
                        Profil
                    </a>
                    <a class="link" href="https://cause-health.webflow.io" target="_blank" on:click={closeDD}>
                        <img src="../link.svg" alt="" width="20" height="20">
                        Website
                    </a>
                    <div class="link" on:click={logout} on:keypress={logout} role="button" tabindex="0">
                        <img src="../logout.svg" alt="" width="20" height="20">
                        Logout
                    </div>
                </div>
            </div>
        {/if}
    <main>
        <slot></slot>
    </main>

{:else}
    <main style="display: flex; justify-content: center; align-items: center; flex-direction: column; gap: 12px;">
        <h2>Du bist nicht eingeloggt</h2>
        <Button text="Zum Login" on:click={() => goto("/login")}/>
    </main>
{/if}



<style>
    nav {
        position: fixed;
        inset: 0 0 auto 0;
        z-index: 100;
        height: 75px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        padding: 0 5vw;
    }

    main {
        min-height: 100vh;
        padding: 80px 5vw 0 5vw;
    }

    .profil-trigger {
        height: 36px;
        width: 36px;
        cursor: pointer;
        border: 1px solid var(--accent);
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .profil-dd {
        position: absolute;
        inset: 60px 5vw auto auto;
        z-index: 100;
        padding: 12px;
        border: 1px solid var(--accent);
        border-radius: 6px;
        background-color: var(--transparent);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
    }

    .link {
        display: block;
        width: 100%;
        color: var(--accent);
        padding: 6px 12px;
        border-radius: 6px;
        cursor: pointer;
        border: 1px solid transparent;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 12px;
    }

    .link:hover {
        background-color: var(--lightgrey);
    }

    @media screen and (max-width: 600px) {

        main {
            min-height: 100vh;
            padding: 20px 5vw 50px 5vw;
        }

        nav {
            display: none;
        }

        .profil-dd {
            background-color: var(--white);
            position: fixed;
            inset: auto 0 0 0;
            z-index: 1000;
            display: flex;
            flex-direction: row;
            border: none;
            border: none;
            width: 90%;
            margin: 0 auto 20px auto;
            background-color: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid var(--accent);
            border-radius: 26px;
            padding: 2px;
            overflow: hidden;
        }

        .profil {
            width: 100%;
            display: flex;
            flex-direction: row !important;
        }

        .link {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 2px;
            text-align: center;
            font-size: 10px;
        }

        .link:hover {
            background-color: transparent;
        }
        
    }
</style>