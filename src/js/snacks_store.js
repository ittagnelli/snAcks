import { writable } from 'svelte/store';

const local_user_email = localStorage.snack_user_email;
const local_user_authenticated = localStorage.snack_user_authenticated;
const local_user_login_progress = localStorage.snack_user_login_progress;
const local_user_last_mex_id = localStorage.snack_user_last_mex_id;


export const user_email = writable(local_user_email || null);
export const user_authenticated = writable(local_user_authenticated || false);
export const user_login_progress = writable(local_user_login_progress || false);
export const last_feedback = writable(0);
export const title_bar = writable(0);
export const cloud_mex = writable(0);
export const last_mex_id = writable(local_user_last_mex_id || 0);

user_email.subscribe((value) => localStorage.snack_user_email = value);
user_authenticated.subscribe((value) => localStorage.snack_user_authenticated = value);
user_login_progress.subscribe((value) => localStorage.snack_user_login_progress = value);
last_mex_id.subscribe((value) => localStorage.snack_user_last_mex_id = value);