<Page noToolbar noNavbar noSwipeback loginScreen>
  <div class="col" align="center">
    <img src="icons/144x144.png" alt="snAcks">
  </div>
  <Block>
    <Row>
      <Col></Col>
      <Col>
        <Button fill preloader loading={$user_login_progress == "true"} onClick={signIn} round large>Login</Button>
      </Col>
      <Col></Col>
    </Row>
  </Block>
  <Block>
    <BlockFooter>Per favore effettua il login a snAcks con il tuo account istituzionale</BlockFooter>
  </Block>
</Page>

<script>
  import { onMount } from 'svelte'; 
  import { firebase_app } from '../js/firebase_config.js';
  import { f7, Page, Block, BlockFooter, Button, Row, Col } from 'framework7-svelte';
  import { user_email, user_authenticated, user_login_progress } from '../js/snacks_store.js';
  import { create_logger } from '../js/logger';
  import { FirebaseAuthentication } from '@capacitor-firebase/authentication';
  import { getAuth, GoogleAuthProvider, signInWithCredential,signOut, signInWithRedirect, getRedirectResult  } from 'firebase/auth';
  import { Capacitor } from '@capacitor/core'; 

  export let f7router;
  export let f7route;
  const log = create_logger("login.svelte");
  let provider = null;
  let auth = null;

  onMount(async () => {
    log.info("Page Mounting");
    provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      hd: 'istitutoagnelli.it'
    });

    auth = getAuth();
    if(Capacitor.getPlatform() == "web") {
      log.info("Welcome to snAcks PWA debug console")
      getRedirectResult(auth)
        .then(async function (result)  {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;
          if (user.email.split('@')[1] != "istitutoagnelli.it") {
            alert("Login non autorizzato, puoi registrarti solo con l'account istituzionale")
            log.error(`Unauthorized login by user ${user.email}`);
            await signOut(auth);
            $user_email = null; 
            $user_authenticated = "false";
            $user_login_progress = "false";
          } else {
            log.info(`User ${user.email} correctly signed in`);
            $user_email = user.email; 
            $user_authenticated = "true";
            $user_login_progress = "false";
          }  
         
        }).catch((error) => {
          log.error(error);
        }); 
      }
  });
    
  async function signIn() {
    log.info("SIGIN");
    $user_login_progress = "true";
    if(Capacitor.getPlatform() == "web")
      signInWithRedirect(auth, provider);
    else {
      log.info("Logcat of snAcks authentication init")
      const result = await FirebaseAuthentication.signInWithGoogle();  //connection with Java SDK
      const credential = GoogleAuthProvider.credential(result.credential?.idToken); //put Java SDK token to JS SDK
      const auth = getAuth();
      let cred = await signInWithCredential(auth, credential) //Login process
      const user = cred.user
      if(user.email == "demosnacks1@gmail.com") {      //email for Google play tester
        $user_email = user.email
        $user_authenticated = "true";
      } else {
        if (user.email.split('@')[1] != "istitutoagnelli.it" ||
            user.email.split('@')[1] != "agnelli.it") {
          alert("Login non autorizzato, puoi registrarti solo con l'account istituzionale")
          log.error(`Unauthorized login by user ${user.email}`);
          await signOut(auth);
          $user_email = null; 
          $user_authenticated = "false";
          $user_login_progress = "false";
        } else {
          log.info(`User ${user.email} correctly signed in`);
          $user_email = user.email; 
          $user_authenticated = "true";
          $user_login_progress = "false";
        }  
      }
    }  
    $user_login_progress = "false";    }
</script>
