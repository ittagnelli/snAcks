<App { ...f7params } themeDark>
  {#if $user_authenticated == "true"}
  <Views tabs class="safe-areas">
    <Toolbar tabbar labels bottom>
      <Link tabLink="#view-home" tabLinkActive iconIos="f7:house_fill" iconAurora="f7:house_fill" iconMd="material:home" text="Home"
      />
      <Link tabLink="#view-storico" iconIos="f7:clock" iconAurora="f7:clock" iconMd="f7:clock" text="Storico" />
      {#if $user_email == "economo@istitutoagnelli.it" || 
           $user_email == "espedito.mancuso@istitutoagnelli.it" ||
           $user_email == "andrea.canale@istitutoagnelli.it"}
        <Link tabLink="#view-ordini" iconIos="f7:cart" iconAurora="f7:cart" iconMd="f7:cart" text="Ordini" />
      {/if}
      </Toolbar>
    <View id="view-home" main tab tabActive url="/" />
    <View id="view-storico" name="catalog" tab url="/storico/" />
    {#if $user_email == "economo@istitutoagnelli.it" || 
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
    Views,
    Toolbar,
    Link
  } from 'framework7-svelte';

  import { onMount } from 'svelte';
  import { getDevice }  from 'framework7/lite-bundle';  
  import capacitorApp from '../js/capacitor-app';
  import routes from '../js/routes';
  import { user_authenticated, user_email } from '../js/snacks_store.js';
  import store from '../js/store'
  let provider = null;
  let auth = null;
  const device = getDevice();

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
      path: '/service-worker.js',
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