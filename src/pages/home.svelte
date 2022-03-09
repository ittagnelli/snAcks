<Page name="home">
  <Navbar title="snAcks" />
  <Card>
     <span slot="header">      
        <p class="cardtitle">Salati</p>
        <img class="imgcard" src="focaccina.png" width="200px" alt="salato"/>
    </span>
    <Block strong class="text-align-center">
      <Row>
        <Col>
          <Stepper fill bind:value={num_salati} min={0} max={2} step={1} autorepeat={false} wraps={false} decimalPoint={2}></Stepper> 
        </Col>  
      </Row>
    </Block>
  </Card>
  <Card>
    <span slot="header">      
      <p class="cardtitle">Dolci</p>
      <img class="imgcard" src="crossaint.png" width="200px" alt="dolce"/>
    </span>
    <Block strong class="text-align-center">
      <Row>
        <Col>
        <Stepper fill bind:value={num_dolci} min={0} max={2} step={1} autorepeat={false} wraps={false} decimalPoint={2}></Stepper> 
        </Col>
      </Row>
    </Block>
  </Card>
  <Block>
    <List>
      <ListItem checkbox bind:checked={selections[0].selected} title={selections[0].day} name="tomorrow" id="tomorrow"></ListItem>
      <ListItem checkbox bind:checked={selections[1].selected} title={selections[1].day} name="totomorrow" id="totomorrow"></ListItem>
      <ListItem checkbox bind:checked={selections[2].selected} title={selections[2].day} name="date" id="date"></ListItem>
    </List>
  </Block>
  <Block>
  <Block strong>
    <Row tag="p">
      <Col tag="span">
        
      </Col>
      <Col tag="span">
        <Button raised fill onClick={order_snack}>Ordina</Button>
      </Col>
      <Col tag="span">
        
      </Col>
    </Row>
  </Block>
  </Block>
  <Snackbar class="flex-column snack" bind:active={snackbar} center timeout={3000}>
    Ordine effettuato
  </Snackbar>
</Page>

<script>
  import {
    Page,
    Stepper,
    Navbar,
    Card,
    NavLeft,
    NavTitle,
    NavTitleLarge,
    NavRight,
    Link,
    Toolbar,
    Block,
    BlockTitle,
    List,
    ListItem,
    Row,
    Col,
    Button
  } from 'framework7-svelte';

  import { user_email, user_authenticated } from '../js/snacks_store.js';
  import { getAuth, GoogleAuthProvider,signOut, signInWithRedirect, getRedirectResult } from "firebase/auth";
  import { read_doc, write_doc } from '../js/firebase.js';
  import { create_logger } from '../js/logger.js';
  import { create_order } from '../js/model.js';

  import { Snackbar} from 'svelte-materialify';

  let snackbar = false;
  let log = create_logger('home.svelte');
  export let f7router;
  export let f7route;

  let num_salati = 0;
  let num_dolci = 0;


  let provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    hd: 'istitutoagnelli.it'
  });    
  let auth = getAuth();
  

  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate()+3);
  var tomorrow = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate()+1);
  var totomorrow = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate()+2);

  let selections = [
    {selected: false,
     day: tomorrow
    },
    {selected: false,
     day: totomorrow
    },
    {selected: false,
     day: date
    },
  ];

  async function order_snack() {
    log.info("ordina_snack call");
    log.info(`DOLCI = ${num_dolci}`);
    log.info(`SALATI = ${num_salati}`);
    log.info(`SELEZIONE1 = ${selections[0].selected}`);
    log.info(`SELEZIONE2 = ${selections[1].selected}`);
    log.info(`SELEZIONE3 = ${selections[2].selected}`);

    
    log.info(JSON.stringify(selections));
    
    let current_orders = selections.filter(item => item.selected == true);
    current_orders.map(item => {
      log.info(JSON.stringify(item));
      let order = create_order($user_email,item.day, num_dolci, num_salati);
      write_doc(order, 'snacks'); 
    });
    snackbar = true;
  }
</script>
