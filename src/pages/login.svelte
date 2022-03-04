<Page noToolbar noNavbar noSwipeback loginScreen>
  <LoginScreenTitle>snAcks</LoginScreenTitle>
  <List>
    <ListButton onClick={signIn}>Sign In</ListButton>
  </List>
  <BlockFooter>Some text about login information.<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BlockFooter>
</Page>

<script>
  import { onMount } from 'svelte'; 
  import {f7, Page, LoginScreenTitle, List, ListInput, ListButton, BlockFooter} from 'framework7-svelte';
  
  import { getAuth, signInWithPopup, GoogleAuthProvider,signOut, signInWithRedirect, getRedirectResult } from "firebase/auth";
  import { firebase_app } from '../js/firebase_config.js';
  import { user_profile, user_auth, user_authenticated } from '../js/auth_store.js';
  import { create_logger } from '../js/logger';
  let provider = null;
  let auth = null;

  const log = create_logger("login.svelte");

  // import { user_login, user_logout } from '../components/Firebase.svelte';
  // import { user_auth } from '../components/user_store.svelte';
  // import { onMount } from 'svelte';

  // export let f7router;

  

  onMount(async () => {
    log.info("SONO ENTRATO0000000");
    log.info($user_authenticated);
    provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      hd: 'istitutoagnelli.it'
    });
    
    auth = getAuth();
    $user_auth = auth;

    getRedirectResult(auth)
    .then(async function (result)  {
        log.info("SONO ENTRATO2");
        const credential = GoogleAuthProvider.credentialFromResult(result);
        log.info("SONO ENTRATO2a");
        const token = credential.accessToken;
        log.info("SONO ENTRATO2b");
        const user = result.user;
        log.info("SONO ENTRATO2c");

        if (user.email.split('@')[1] != "istitutoagnelli.it") {
          log.error(`Unauthorized login by user ${user.email}`);
          await signOut(auth);
          $user_auth = null;
          $user_profile = null;
          $user_authenticated = false;
        } else {
          log.info(`User ${user.email} correctly signed in`);
          $user_profile = user; 
          $user_authenticated = true;
        }  
      }).catch((error) => {
        log.error("MIO ERROR");
        log.error(error);
      }); 


  });


  async function signIn() {
    // signInWithPopup(auth, provider)
    signInWithRedirect(auth, provider);
      // .then(async function (result)  {
      //   log.info("SONO ENTRATO");
      //   const credential = GoogleAuthProvider.credentialFromResult(result);
      //   const token = credential.accessToken;
      //   const user = result.user;

      //   if (user.email.split('@')[1] != "istitutoagnelli.it") {
      //     log.error(`Unauthorized login by user ${user.email}`);
      //     await signOut(auth);
      //     $user_auth = null;
      //     $user_profile = null;
      //     $user_authenticated = false;
      //   } else {
      //     log.info(`User ${user.email} correctly signed in`);
      //     $user_profile = user; 
      //     $user_authenticated = true;
      //   }  
      // }).catch((error) => {
      //   log.error(error);
      // }); 
  }



  // async function signIn() {
  //   console.log(email);
  //   console.log(password);
  //   await user_login(email, password);
  //   console.log($user_auth);
  //   if ($user_auth == true) {
  //     console.log("USER CORRECTLY LOGIN");
  //     f7router.navigate({ name: 'home' });
  //   }
  //   else {
  //     console.log("USER CANNOT BE PROPERLY LOGIN");
  //   }

    //f7.dialog.alert(`Username: ${username}<br>Password: ${password}`, () => {
    //  f7router.back();
    //});
  // }
</script>
