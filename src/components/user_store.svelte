<script context="module">

import { writable } from 'svelte/store';

const snacks_auth_store = localStorage.getItem("snacks_user_auth");

export const user_auth = writable(snacks_auth_store);

user_auth.subscribe(value => {
    localStorage.setItem("snacks_user_auth", value);
});

</script>