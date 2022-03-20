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
      <ListItem checkbox bind:checked={selections[0].selected} title={selections[0].day} name="day1" id="day1"></ListItem>
      <ListItem checkbox bind:checked={selections[1].selected} title={selections[1].day} name="day2" id="day2"></ListItem>
      <ListItem checkbox bind:checked={selections[2].selected} title={selections[2].day} name="day3" id="day3"></ListItem>
    </List>
  </Block>
  
  {#if can_order == true}
  <Block>
    <Block strong>
      <Row tag="p">
        <Col tag="span"></Col>
        <Col tag="span">
          <Button raised fill onClick={order_snack} color="green">Ordina</Button>
        </Col>
        <Col tag="span"></Col>
      </Row>
    </Block>
  </Block>
  {/if}
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
  Button,
  Segmented
} from 'framework7-svelte';

import { user_email, user_authenticated } from '../js/snacks_store.js';
import { getAuth, GoogleAuthProvider,signOut, signInWithRedirect, getRedirectResult } from "firebase/auth";
import { read_doc, write_doc } from '../js/firebase.js';
import { create_logger } from '../js/logger.js';
import { create_order } from '../js/model.js';
import { Snackbar} from 'svelte-materialify';

export let f7router;
export let f7route;

let log = create_logger('home.svelte');
let snackbar = false;
let can_order = false;
let num_salati = 0;
let num_dolci = 0;
let today = new Date();
let day1 = nextBizDay(today).toLocaleDateString("it-IT")
let day2 = nextBizDay(today).toLocaleDateString("it-IT")
let day3 = nextBizDay(today).toLocaleDateString("it-IT")

let selections = [
  {selected: false,
    day: day1
  },
  {selected: false,
    day: day2
  },
  {selected: false,
    day: day3
  },
];

let provider = new GoogleAuthProvider();
provider.setCustomParameters({
  hd: 'istitutoagnelli.it'
});    
let auth = getAuth();

$: {
  if ((num_dolci > 0 || 
      num_salati > 0) &&
      (selections[0].selected == true ||
      selections[1].selected == true ||
      selections[2].selected == true)) 
    can_order = true;
  else
    can_order = false;
}

function nextBizDay(start) {
  do {
    start.setDate(start.getDate() + 1);
  } while (start.getDay() == 0 || start.getDay() == 6)
  
  return start
}

async function order_snack() {
  let current_orders = selections.filter(item => item.selected == true);
  current_orders.map(item => {
    let order = create_order($user_email, item.day, num_dolci, num_salati);
    write_doc(order, 'snacks'); 
  });
  snackbar = true;
  num_salati = 0;
  num_dolci = 0;
  
  selections[0].selected = false;
  selections[1].selected = false;
  selections[2].selected = false;
  log.info("Order made to DB");
}
</script>
