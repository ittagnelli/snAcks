<Page name="ordini" onPageTabShow={calculate_total_orders}  class="bg-color-white">
  <Nav title={$title_bar} />  
  
  {#if loading == true}
  <BlockTitle large class="text-align-center">Ricerca ordine</BlockTitle>
    <div class="preload">
      <Preloader color="multi" size={60}  />
    </div>
  {:else}
    {#if list_food.length > 0}
      {#each list_food as food, i}
        <BlockTitle medium>Ordine del giorno {food.day}</BlockTitle>
        <List mediaList>
          {#each food.orders as item}
              <FoodItem type="{item.type}" subtype="{item.subtype}" img="{item.img}" price={item.price} count={item.count} ro={true} />
          {/each}
        </List>
        {#if i == 0 && food.can_order == true}
        <Row tag="p">
          <Col tag="span"></Col>
          <Col tag="span">
            <Button raised fill color="green" large disabled={current_hour < BREAK_HOUR} onClick={email_order}><strong>Invia Ordine</strong></Button>
          </Col>
          <Col tag="span"></Col>
        </Row>
        {/if}
      {/each}
    {:else}
      <p>Non ci sono ordini pendenti</p>  
      <div class="no-order-box">
        <i class="icon f7-icons color-red no-order">multiply_circle_fill</i>
      </div>
    {/if}
  {/if}

  <Snackbar class="flex-column snack" bind:active={snackbar_ok} center timeout={3000}>
    <img src="icons/thumbs_up.png" width="50" alt="thumbsup" />
    <p class="ok">Ordine inviato correttamente!!!</p>
  </Snackbar>
  
</Page>

<script>
  import { Page, Block, BlockTitle, Navbar, Link, Button, List, ListItem, AccordionContent, Row, Col, Preloader } from 'framework7-svelte'
  import { user_email, last_feedback, title_bar } from '../js/snacks_store.js';
  import { get_orders_by_date } from '../js/firebase.js';
  import Nav from '../components/bar.svelte';
  import FoodItem from '../components/food_item.svelte';
  import { calc_next_N_days } from '../js/helpers.js';
  import { Snackbar} from 'svelte-materialify';

  export let f7router; // this is just to avoid a warning
  export let f7route;

  const N_ORDER_DAYS = 3;
  const BREAK_HOUR = 12; //can order unti 12:59
  const N_SKEW_DAYS = 2;
  // let today;
  let list_food = [];
  let days = [];
  let loading = true;
  let current_hour;
  let current_order_date;
  let current_order_string;
  let snackbar_ok = false;

  async function calculate_total_orders() {
    current_hour = new Date().getHours();
    list_food.length = 0;
    days.length = 0;
    loading = true;

    current_order_date = new Date();
    current_order_date.setDate(current_order_date.getDate() + N_SKEW_DAYS);
    let current_order_string = current_order_date.toLocaleDateString("it-IT");
    
    days = calc_next_N_days(new Date(), N_ORDER_DAYS);
    for(const day of days) {
      let orders = await get_orders_by_date(day); 
      list_food.push({day: day, can_order: current_order_string == day,orders: orders});
    }   

    list_food = list_food;
    loading = false;
  }

  function email_order() {
    snackbar_ok = false;
    let ordine = list_food[0];

    let body_head = `
    <b>Riepilogo Ordine per Istituto Agnelli per il giorno #giorno</b><br>
    <ul>`
    .replace("#giorno", ordine.day);
    
    let body_middle = "";
    for(const order of ordine.orders) {
      body_middle = body_middle +  `
      <li>
        #type #subtype: #count
      </li>`
      .replace("#type", order.type)
      .replace("#subtype", order.subtype)
      .replace("#count", order.count);
    }

    let body_tail = `
      </ul>
      <p>Cordiali Saluti,</p>
      <p>Luca</p>

      <p><b>Messaggio generato automaticamente</b></p>
      <p><b>Per cortesia, non rispondere a questo messaggio</b></p>
    `;

    Email.send({
      SecureToken: '0dbd587a-5b00-4cca-b1ef-8d25e73fda99',
      To: 'espedito.mancuso@istitutoagnelli.it',
      From:  "ats@istitutoagnelli.it",
      Subject: "Ordine Istituto Agnelli per il " + ordine.day,
      Body: body_head + body_middle + body_tail,
      }).then(message => {
          // snackbar_ok = true;
          // issue_title = "";
          // issue_message = "";
          // can_send = false;
          // $last_feedback = new Date().getTime();
        console.log("EMAIL INVIATA");  
        console.log(list_food[0]);
        snackbar_ok = true;
      }, reason => {
        console.error(reason);
      });
    }
</script>

<style>
  .no-order {
    font-size: 100px; 
  }

  .no-order-box {
    text-align: center;
    margin: 30px;
  }

  p {
    text-align: center;
    font-size: 40px;
    padding: 10px;
  }

  .preload {
    text-align: center;
    padding-top: 100px;
  }

  .snack {
    position: absolute;
    top: 250px;
  }

  .ok {
    font-size: 1.1rem;
    color: #00f169;
  }

</style>