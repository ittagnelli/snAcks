<App { ...f7params } themeDark>

  <!-- Left panel with cover effect-->
  <!-- <Panel left cover themeDark>
    <View>
      <Page>
        <Navbar title="Left Panel"/>
        <Block>Left panel content goes here</Block>
      </Page>
    </View>
  </Panel>
 -->

  <!-- Right panel with reveal effect-->
  <!-- <Panel right reveal themeDark>
    <View>
      <Page>
        <Navbar title="Right Panel"/>
        <Block>Right panel content goes here</Block>
      </Page>
    </View>
  </Panel> -->


{#if $user_auth == "false"}
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


  <!-- Popup -->
  <!-- <Popup id="my-popup">
    <View>
      <Page>
        <Navbar title="Popup">
          <NavRight>
            <Link popupClose>Close</Link>
          </NavRight>
        </Navbar>
        <Block>
          <p>Popup content goes here.</p>
        </Block>
      </Page>
    </View>
  </Popup> -->


</App>

<script>
  import { onMount } from 'svelte';

  import {
    f7,
    f7ready,
    App,
    Panel,
    Views,
    View,
    Popup,
    Page,
    Navbar,
    Toolbar,
    NavRight,
    Link,
    Block,
    BlockTitle,
    LoginScreen,
    LoginScreenTitle,
    List,
    ListItem,
    ListInput,
    ListButton,
    BlockFooter
  } from 'framework7-svelte';


  import routes from '../js/routes';
  import store from '../js/store';
  import { user_auth } from './user_store.svelte';

  
  // Framework7 Parameters
  let f7params = {
    name: 'snAcks', // App name
    theme: 'auto', // Automatic theme detection



    // App store
    store: store,
    // App routes
    routes: routes,
    // Register service worker (only on production build)
    serviceWorker: process.env.NODE_ENV ==='production' ? {
      path: '/service-worker.js',
    } : {},
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


      // Call F7 APIs here
    });
  })
</script>