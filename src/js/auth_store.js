import { writable } from 'svelte/store';

export const user_auth = writable(null);
export const user_profile = writable(null);
export const user_authenticated = writable(false);

