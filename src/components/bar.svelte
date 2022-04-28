<Navbar> 
  <NavLeft>
    <Link iconAurora="f7:info_circle" iconIos="f7:info_circle" iconMd="f7:info_circle" href="/about/"/>
    
  </NavLeft>
  <NavTitle>
    {title}
  </NavTitle>
  <NavRight>
    <Link iconAurora="f7:arrow_right_square" iconIos="f7:arrow_right_square" iconMd="f7:arrow_right_square" on:click={logout}/>

      <Link iconAurora="f7:book" iconIos="f7:book" iconMd="f7:book" href="/manuale/"/>
    </NavRight>
</Navbar>

<script>
    import { Navbar, NavTitle, NavRight, NavLeft, Link  } from 'framework7-svelte'
    import { title_bar } from '../js/snacks_store.js';
    import { FirebaseAuthentication } from '@capacitor-firebase/authentication';
    import { getAuth, GoogleAuthProvider, signInWithCredential,signOut, signInWithRedirect, getRedirectResult  } from 'firebase/auth';
    import { user_email, user_authenticated, user_login_progress } from '../js/snacks_store.js';
    export let title
    async function logout() {
      $user_email = null; 
      $user_authenticated = "false";
      await signOut(auth);
    }
</script>