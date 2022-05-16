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
        {#if food.can_order == true}
        <Row tag="p">
          <Col tag="span"></Col>
          <Col tag="span">
            <Button raised fill color="green" large disabled={i == 0 ? false : current_hour < BREAK_HOUR} onClick={() => email_order(i)}><strong>Ordina</strong></Button>
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
  
  <Snackbar class="flex-column snack" bind:active={snackbar_error} center timeout={3000}>
    <img src="icons/thumbs_down.png" width="50" alt="thumbsup" />
    <p class="error">Errore nell'invio dell'ordine!!! Riprova.</p>
  </Snackbar>
  

</Page>

<script>
  import { Page, Block, BlockTitle, Navbar, Link, Button, List, ListItem, AccordionContent, Row, Col, Preloader } from 'framework7-svelte'
  import { user_email, last_feedback, title_bar } from '../js/snacks_store.js';
  import { get_orders_by_date } from '../js/firebase.js';
  import Nav from '../components/bar.svelte';
  import FoodItem from '../components/food_item.svelte';
  import { calc_next_N_days, get_today } from '../js/helpers.js';
  import { Snackbar} from 'svelte-materialify';

  export let f7router; // this is just to avoid a warning
  export let f7route;

  const N_ORDER_DAYS = 4;
  const BREAK_HOUR = 14; //can order starting 14:00
  const N_SKEW_DAYS = 2;
  // let today;
  let list_food = [];
  let days = [];
  let loading = true;
  let current_hour;
  let current_order_string;
  let snackbar_ok = false;
  let snackbar_error = false;

  async function calculate_total_orders() {
    let today = await get_today();
    current_hour = new Date(today).getHours();
    list_food.length = 0;
    days.length = 0;
    loading = true;

    let valid_dates = [];
    let week_end = today.getDay() == 0 || today.getDay() == 6; 
    let monday = today.getDay() == 1;
    
    if (!monday)
      today.setDate(today.getDate() - 1);
    else
      today.setDate(today.getDate() - 3);
    
    days = calc_next_N_days(new Date(today), N_ORDER_DAYS);
    if (!week_end)
      valid_dates = days.slice(0,2);    
    
    for(const day of days) {
      let orders = await get_orders_by_date(day); 
      list_food.push({day: day, can_order: valid_dates.indexOf(day) >= 0, orders: orders});
    }   
    
    list_food = list_food;
    loading = false;
  }

  function email_order(idx) {
    snackbar_ok = false;
    let ordine = list_food[idx];

    let food_counters = {
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0,
      '9': 0,
      '10': 0,
    };

    for(const order of ordine.orders) 
      food_counters[order.id] = order.count
      
    emailjs.send('service_6eou3yj', 'template_y0lsgkh', {
      dd: ordine.day.split('/')[0],
      mm: ordine.day.split('/')[1],
      yy: ordine.day.split('/')[2],
      item1: food_counters[1],
      item2: food_counters[2],
      item3: food_counters[3],
      item4: food_counters[4],
      item5: food_counters[5],
      item6: food_counters[6],
      item7: food_counters[7],
      item8: food_counters[8],
      item9: food_counters[9],
      item10: food_counters[10]
    }).then(message => {
      console.log("EMAIL INVIATA");
      console.log(message);
      snackbar_ok = true;
    }).catch(error => {
      console.log(error);
      snackbar_error = true;
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

  .error {
    font-size: 1.1rem;
    color: red;
  }


</style>