<Page name="about" class="bg-color-white">
  <Navbar title={$title_bar} />
  <div>
    <img src="icons/144x144.png"alt="logo" />
    <h6>{$title_bar}</h6><br>

    <BlockTitle>Applicazione sviluppata per ATS da:</BlockTitle>
    <Row>
      <Col width="10"></Col>
      <Col width="80">
        <p class="dev">Andrea Canale (3INF)</p>
        <p class="dev">prof. Antonio Mancuso</p>
      </Col>
      <Col width="10"></Col>
    </Row>

    <!-- <h4>&nbsp;</h4> -->
    <img src="ats.png" width="128" alt="ats"/>
    <!-- <h4>&nbsp;</h4> -->
    <p>Il codice sorgente è disponibile al seguente <a href="#" on:click={open}>link</a></p>

    <!-- <List accordionList>
    <ListItem accordionItem title="Privacy Policy">
      <AccordionContent>
        <Block>
          <Policy></Policy>
        </Block>
      </AccordionContent>
    </ListItem>
</List> -->
</Page>

<script>
    import {Page, Block, BlockTitle, Navbar, Link, Button, List, ListItem, AccordionContent, Row, Col} from 'framework7-svelte'
    import { user_email, last_feedback, title_bar } from '../js/snacks_store.js';
    // import Policy from '../components/policy.svelte'
    
    function open() {
        window.open("https://github.com/ittagnelli/snAcks")
    }
</script>

<style>
   .dev {
     /* color: yellow; */
     font-size: 1.2rem;
   }

   div {
     text-align: center;
   }

   img {
     margin-top: 20px;
     margin-bottom: 20px;
   }
</style>