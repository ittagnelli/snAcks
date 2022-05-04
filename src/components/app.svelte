<App { ...f7params }>
  {#if $user_authenticated == "true"}
  
  <Notify />

  <Views tabs class="safe-areas">
    <Toolbar tabbar labels bottom>
      <Link tabLink="#view-home" tabLinkActive iconIos="f7:house_fill" iconAurora="f7:house_fill" iconMd="material:home" text="Home" />
      <Link tabLink="#view-storico" iconIos="f7:clock" iconAurora="f7:clock" iconMd="f7:clock" text="Storico" />
      <Link tabLink="#view-ritiro" iconIos="f7:bag" iconAurora="f7:bag" iconMd="f7:bag" text="Ritiro" />
      <Link tabLink="#view-feedback" iconIos="f7:arrow_2_circlepath_circle" iconAurora="f7:arrow_2_circlepath_circle" iconMd="f7:arrow_2_circlepath_circle" text="Feedback" />
      {#if $user_email == "luca.limongi@istitutoagnelli.it" || 
           $user_email == "espedito.mancuso@istitutoagnelli.it" ||
           $user_email == "andrea.canale@istitutoagnelli.it"}
        <Link tabLink="#view-ordini" iconIos="f7:cart" iconAurora="f7:cart" iconMd="f7:cart" text="Ordini" />
      {/if}
      </Toolbar>
    <View id="view-home" main tab tabActive url="/" />
    <View id="view-storico" name="catalog" tab url="/storico/" />
    <View id="view-ritiro" name="ritiro" tab url="/ritiro/" />
    <View id="view-feedback" name="feedback" tab url="/feedback/" />
    {#if $user_email == "luca.limongi@istitutoagnelli.it" || 
           $user_email == "espedito.mancuso@istitutoagnelli.it" ||
           $user_email == "andrea.canale@istitutoagnelli.it"}
      <View id="view-ordini" name="settings" tab url="/ordini/" />
    {/if}
  </Views>      
  {:else}
    <View main class="safe-areas" url="/login/" />
  {/if}
</App>

<script>
  import {
    f7,
    f7ready,
    App,
    View,
    Toolbar,
    Views,
    Link
  } from 'framework7-svelte';

  import Notify from '../components/notify.svelte';

  import { onMount } from 'svelte';
  import { getDevice }  from 'framework7/lite-bundle';  
  import capacitorApp from '../js/capacitor-app';
  import routes from '../js/routes';
  import { user_authenticated, user_email, title_bar } from '../js/snacks_store.js';
  import { listen_messages } from '../js/firebase.js';
  import store from '../js/store';
  
  
  let provider = null;
  let auth = null;
  const device = getDevice();

  $title_bar = "snAcks v2.7.3";

  $: {
    console.log("APP SVELTE");
    console.log($user_authenticated);
    if ($user_authenticated == "true") {
      console.log("UTENTE AUTENTICATO");
      listen_messages();
    }
  }
 
  let f7params = {
    name: 'snAcks', // App name
    theme: 'auto', // Automatic theme detection
    id: 'io.ats.snacks', // App bundle ID
    routes: routes,
    store:store,
    input: {
      scrollIntoViewOnFocus: device.capacitor,
      scrollIntoViewCentered: device.capacitor,
    },
    // Register service worker (only on production build)
    serviceWorker: process.env.NODE_ENV ==='production' ? {
      path: './service-worker.js',
      scope: '/snacks/'
    } : {},
    // Capacitor Statusbar settings
    statusbar: {
      iosOverlaysWebView: true,
      androidOverlaysWebView: false,
    },
  };
  
  onMount(() => {
    f7ready(() => {
      // Init capacitor APIs (see capacitor-app.js)
      if (f7.device.capacitor) {
        capacitorApp.init(f7);
      }
    });
  })
</script>
