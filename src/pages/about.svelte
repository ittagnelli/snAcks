<Page name="about" class="bg-color-white">
  <Navbar title={$title_bar} backLink="back"/>
  <div>
    <img src="icons/144x144.png"alt="logo" />
    <h5>{$title_bar.substring(6,15)}</h5> 
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
</Page>

<script>
    import {Page, Block, BlockTitle, Navbar, Link, Button, List, ListItem, AccordionContent, Row, Col} from 'framework7-svelte'
    import { user_email, last_feedback, title_bar } from '../js/snacks_store.js';
    import Nav from '../components/bar.svelte'
    
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

   img {
     margin-top: 20px;
     margin-bottom: 0px;
   }

   h5 {
     position: relative;
     top: -20px;
   }
</style>