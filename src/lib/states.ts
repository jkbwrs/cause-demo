import { writable } from 'svelte/store';

export let user = writable({
    name: "Max Mustermann",
    email: "",
    abo: 2,
})
