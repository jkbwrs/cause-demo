<script lang="ts">
    import { goto } from "$app/navigation";
    import Button from "$lib/components/button.svelte";
    import Kapitel from "$lib/components/kapitel.svelte";
    import Modal from "$lib/components/modal.svelte";
    import { scale, fly } from "svelte/transition";
    import type { PageData } from './$types';
    import { enhance } from "$app/forms";
    import {user} from "$lib/states"
	
	export let data: PageData;

    let openEmailModal: boolean = false
    let openPasswordModal: boolean = false
    let openDeletelModal: boolean = false
    let openNameModal: boolean = false
    let openPaymentModal: boolean = false

    let newMail: string = ""
    let newMailConfirmed: string = ""

    let newFirstname: string = ""
    let newLastname: string = ""

    let newPassword: string = ""
    let newPasswordConfirmed: string = ""

    let deleteEmail: string = ""
    let deleteIsChecked: boolean = false


    function formatDate(isoDate: string): string {
        const date = new Date(isoDate);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
    }

</script>

<svelte:head>
    <title>Profil</title>
    <meta name="description" content="Bearbeite deine Account Daten">
</svelte:head>

{#if $user != null}

    {#await data}
        <p>Loading...</p>
    {:then data} 
    <div class="profil">
        <div class="current-abo" in:scale|global={{start: 0.8, duration: 400}}>
            <h2 in:fly|global={{y: 20, duration: 400, delay: 400}}>Dein <br/> Aktuelles Abo</h2>
            <p in:fly|global={{y: 20, duration: 400, delay: 500}} style="max-width: 400px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, itaque. Nisi non hic aspernatur!</p>
            <Button on:click={() => goto("/mix")} text="Mix anpassen" delay={600} style="margin-top: 24px" />
        </div>

        <h2 in:fly|global={{y: 20, duration: 400, delay: 700}}>Profil</h2>
        <div class="account">
            <div class="grid">
                <input type="text" placeholder="Vorname" value={data.profil.firstname} style="pointer-events: none" in:fly|global={{y: 20, duration: 400, delay: 750}}>
                <input type="text" placeholder="Nachname" value={data.profil.lastname} style="pointer-events: none" in:fly|global={{y: 20, duration: 400, delay: 800}}>
                <input type="email" placeholder="Email" value={data.profil.email} style="pointer-events: none" in:fly|global={{y: 20, duration: 400, delay: 850}}>
                <input type="password" placeholder="Passwort" value="************" style="pointer-events: none" in:fly|global={{y: 20, duration: 400, delay: 900}}>
            </div>
        </div>

        <h4 in:fly|global={{y: 20, duration: 400, delay: 800}}>Profil Actions</h4>
        <div class="account-list">
            <Kapitel on:click={() => openNameModal = true} title="Name ändern" icon="account" arrow={true} delay={850} />
            <Kapitel on:click={() => openEmailModal = true} title="Email ändern" icon="mail" arrow={true} delay={900} />
            <Kapitel on:click={() => openPasswordModal = true} title="Passwort ändern" icon="passwort" arrow={true} delay={950} />
            <Kapitel on:click={() => openPaymentModal = true} title="Zahlmethode ändern" icon="payment" arrow={true} delay={1000} />
            <Kapitel on:click={() => openDeletelModal = true} title="Account löschen" icon="delete" arrow={true} delay={1050} />
        </div>

        <h4 in:fly|global={{y: 20, duration: 400, delay: 1400}}>Rechnungen</h4>
        <div class="account-list">
            {#each data.profil.invoices as invoice, i}
                <Kapitel 
                    title={formatDate(invoice.date)} 
                    on:click={() => window.open(invoice.link, '_blank')} 
                    icon="invoice" 
                    arrowIcon="download" 
                    arrowIconSize={22}
                    arrow={true} 
                    delay={800 + i * 50} />
            {/each}
        </div>
    </div>
        
    {/await}


    {#if openEmailModal}
        <Modal title="Email ändern" on:click={() => openEmailModal = false}>
            <form action="?/changeEmail" method="post" use:enhance>
                <p class="description">Um deine Email zu aktualisieren musst du deine neue Email eingeben und bestätigen.</p>
                <input type="email" required={true} bind:value={newMail} placeholder="Neue Email" style="margin-bottom: 12px">
                <input type="email" required={true} bind:value={newMailConfirmed} placeholder="Email bestätigen" style="margin-bottom: 12px">
                {#if newMail != "" && newMail === newMailConfirmed}
                    <button type="submit">Email ändern</button>
                {/if}
            </form>
        </Modal>
    {:else if openPasswordModal}
        <Modal title="Passwort ändern" on:click={() => openPasswordModal = false}>
            <form action="?/changePassword" method="post" use:enhance>
                <p class="description">Um deine Email zu aktualisieren musst du deine neue Email eingeben und bestätigen.</p>
                <input type="password" required={true} bind:value={newPassword} placeholder="Neues Passwort" style="margin-bottom: 12px">
                <input type="password" required={true} bind:value={newPasswordConfirmed} placeholder="Passwort bestätigen" style="margin-bottom: 12px">
                {#if newPassword != "" && newPassword === newPasswordConfirmed}
                    <button type="submit">Email ändern</button>
                {/if}
            </form>
        </Modal>
    {:else if openPaymentModal}
        <Modal title="Zahlungsmethode" on:click={() => openPaymentModal = false}>
            <form action="?/changePayment" method="post" use:enhance>
                <p style="margin-bottom: 12px" in:fly|global={{y: 20, duration: 400, delay: 100}}>Aktuelle Zahlmethode: Paypal</p>
                <p class="description" style="width: 360px" in:fly|global={{y: 20, duration: 400, delay: 150}}>Hier kannst du deine Zahlmethode anpassen. Klicke auf eine der Dienste um deine aktuelle Zahlmethode zu ändern.</p>
                <Kapitel title="Nutze Paypal" icon="paypal" arrow={true} delay={200} style="width: 360px" />
                <Kapitel title="Nutze Kreditkarte" icon="creditcard" arrow={true} delay={300} style="width: 360px" />
                <Kapitel title="Nutze Apple Pay" icon="applepay" arrow={true} delay={400} style="width: 360px" />
                <Kapitel title="Nutze Google Pay" icon="googlepay" arrow={true} delay={500} style="width: 360px" />
                <Kapitel title="Nutze Klarna" icon="klarna" arrow={true} delay={600} style="width: 360px" />
            </form>
        </Modal>
    {:else if openDeletelModal}
        <Modal title="Account löschen" on:click={() => openDeletelModal = false}>
            <form action="?/deleteAccount" method="post" use:enhance>
                <form action="?/deleteAccount" method="post" use:enhance>
                    <p class="description">Um deinen Account zu löschen trage bitte deinen Namen und deine Email ein.</p>
                    <input type="text" required={true} bind:value={deleteEmail} placeholder="Email eintragen" style="margin-bottom: 12px">
                    <label class="label">
                        <input type="checkbox" class="checkbox" bind:value={deleteIsChecked}>
                        Ich stimme zu, dass meine Daten gelöscht werden und mein aktuelles Abo gekündigt wird. Dies bedeutet, dass alle meine Bestllungen und Daten gelöscht werden und ich keinen Zugriff mehr auf meinen Account habe.
                    </label>
                    {#if deleteEmail && deleteIsChecked}
                        <button type="submit">Account löschen</button>
                    {/if}
                </form>
            </form>
        </Modal>
    {:else if openNameModal}
        <Modal title="Name ändern" on:click={() => openNameModal = false}>
            <form action="?/changeName" method="post" use:enhance>
                <p class="description">Um deinen Namen zu aktualisieren die Felder ausfüllen und bestätigen.</p>
                <input type="text" required={true} bind:value={newFirstname} name="firstname" placeholder="Vorname" style="margin-bottom: 12px">
                <input type="text" required={true} bind:value={newLastname} name="lastname" placeholder="Nachname" style="margin-bottom: 12px">
                <button type="submit" on:click={() => openNameModal = false}>Email ändern</button>
            </form>
        </Modal>
    {/if}

{/if}

<style>

    .profil {
        width: 100%;
        max-width: 900px;
        margin: 0 auto;
    }

    .current-abo {
        width: 100%;
        padding: 100px 20px;
        border: 1px solid var(--accent);
        border-radius: 6px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 12px;
        margin-top: 40px;
        text-align: center;
        margin: 20px 0 100px 0;
    }

    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
        margin-top: 12px;
        margin-bottom: 48px;
    }

    .account-list {
        margin-top: 12px;
        margin-bottom: 48px;
        display: flex;
        justify-content: stretch;
        align-items: flex-start;
        flex-direction: column;
    }

    form {
        max-width: 400px;
    }

    .description {
        font-size: 14px;
        margin: 0 0 20px 0;
    }

    .label {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 12px;
        font-size: 14px;
        color: var(--accent);
        margin-bottom: 20px;
    }

    .checkbox {
        appearance: none;
        -webkit-appearance: none;
        height: 22px;
        width: 22px;
        min-width: 22px;
        border: 2px solid var(--accent);
        background-color: transparent;
        cursor: pointer;
        border-radius: 4px;
        position: relative;
        opacity: 0.5;
        pointer-events: none;
    }

    .checkbox:checked {
        background-color: var(--accent);
        opacity: 1;
    }

    .checkbox:checked::after {
        content: '✓';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        color: var(--white);
        font-size: 16px;
    }

    @media screen and (max-width: 600px) {
        .grid {
            grid-template-columns: 1fr;
        }

        .current-abo {
            padding: 40px 12px;
        }
    }
</style>