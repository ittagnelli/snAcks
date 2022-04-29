<Page name="about" class="bg-color-white">
  <Navbar title={$title_bar} backLink="back"/>
  <div>
    <img src="icons/logo_about.png" alt="logo" />
    <h6>{$title_bar.substring(6,15)}</h6> 
    <br>
    <h6>Applicazione sviluppata per ATS da:</h6>
    <Row>
      <Col width="10"></Col>
      <Col width="80">
        <p class="dev">Andrea Canale (3INF)</p>
        <p class="dev">Lorenzo Rizzolo (3INF)</p>
        <p class="dev">prof. Antonio Mancuso</p>
      </Col>
      <Col width="10"></Col>
    </Row>
    <img src="ats.png" width="128" alt="ats"/>
    <p>Il codice sorgente è disponibile al seguente <a href="#" on:click={open}>link</a></p>
    <Block>
      <Row>
        <Col></Col>
        <Col>
          <Button raised fill onClick={logout} color="red" large><strong>Logout</strong></Button>
        </Col>
        <Col></Col>
      </Row>
  </Block>
</Page>

<script>
    import {Page, Block, BlockTitle, Navbar, Link, Button, List, ListItem, AccordionContent, Row, Col} from 'framework7-svelte'
    import { user_email, last_feedback, title_bar, user_authenticated, user_login_progress  } from '../js/snacks_store.js';
    import Nav from '../components/bar.svelte';
 
    async function logout() {
      $user_email = null; 
      $user_authenticated = "false";
      $user_login_progress = "false";
    }
    
    function open() {
        window.open("https://github.com/ittagnelli/snAcks")
    }
</script>

<style>
   .dev {
     font-size: 1.2rem;
   }

   div {
     text-align: center;
   }

   h5 {
     position: relative;
     top: -20px;
   }
</style>