<Page noToolbar noNavbar noSwipeback loginScreen>
  <div class="col" align="center">
    <img src="snacks.jpg" alt="snAcks">
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
  import { getAuth, GoogleAuthProvider,signOut, signInWithRedirect, getRedirectResult } from "firebase/auth";
  import { user_email, user_authenticated, user_login_progress } from '../js/snacks_store.js';
  import { create_logger } from '../js/logger';

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
  
    getRedirectResult(auth)
    .then(async function (result)  {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;

        if (user.email.split('@')[1] != "istitutoagnelli.it") {
          log.error(`Unauthorized login by user ${user.email}`);
          await signOut(auth);
          $user_email = null; 
          $user_authenticated = "false";
        } else {
          log.info(`User ${user.email} correctly signed in`);
          $user_email = user.email; 
          $user_authenticated = "true";
        }  
        $user_login_progress = "false";
      }).catch((error) => {
        log.error(error);
      }); 
  });

  async function signIn() {
    log.info("SIGIN");
    signInWithRedirect(auth, provider);
    $user_login_progress = "true";
  }
</script>
