<App { ...f7params } themeDark>

  {#if $user_authenticated == false}
    <View main class="safe-areas" url="/login/" />
  {:else}
  <Views tabs class="safe-areas">
    <Toolbar tabbar labels bottom>
      <Link tabLink="#view-home" tabLinkActive iconIos="f7:house_fill" iconAurora="f7:house_fill" iconMd="material:home" text="Home" />
      <Link tabLink="#view-storico" iconIos="f7:clock" iconAurora="f7:clock" iconMd="f7:clock" text="Storico" />
      <Link tabLink="#view-ordini" iconIos="f7:cart" iconAurora="f7:cart" iconMd="f7:cart" text="Ordini" />
    </Toolbar>
    <View id="view-home" main tab tabActive url="/" />
    <View id="view-storico" name="catalog" tab url="/storico/" />
    <View id="view-ordini" name="settings" tab url="/ordini/" />
  </Views>
  {/if}
  </App>
<script>
  import { onMount } from 'svelte';
  import { getDevice }  from 'framework7/lite-bundle';
  
  import {
    f7,
    f7ready,
    App,
    View,
    Views,
    Toolbar,
    Link
  } from 'framework7-svelte';

  import capacitorApp from '../js/capacitor-app';
  import routes from '../js/routes';

  import { user_profile, user_auth, user_authenticated } from '../js/auth_store.js';


  let provider = null;
  let auth = null;

  const device = getDevice();
  // Framework7 Parameters
  let f7params = {
    name: 'snAcks', // App name
    theme: 'auto', // Automatic theme detection


    id: 'io.ats.snacks', // App bundle ID
    // App routes
    routes: routes,

    // Input settings
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
  // Login screen demo data
  let username = '';
  let password = '';

  function alertLoginData() {
    f7.dialog.alert('Username: ' + username + '<br>Password: ' + password, () => {
      f7.loginScreen.close();
    });
  }
  onMount(() => {
    f7ready(() => {

      // Init capacitor APIs (see capacitor-app.js)
      if (f7.device.capacitor) {
        capacitorApp.init(f7);
      }
      // Call F7 APIs here
    });
  })
</script>