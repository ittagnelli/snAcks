<Page name="home" onPageInit={init_home} onPageTabShow={init_home} class="bg-color-white">
  <Nav title={$title_bar}></Nav>

  <BlockTitle medium>Ordina qui la tua colazione</BlockTitle>
  <List mediaList>
    {#each list_food as food}
      <FoodItem type="{food.type}" subtype="{food.subtype}" img="{food.img}" price={food.price} bind:count={food.count} />
    {/each}
  </List>
  <List>
    {#if calendar.length > 0}  
      {#each calendar as day, i}
        <ListItem checkbox bind:checked={day.selected} title={day.day} name="day{i+1}" id="day{i+1}" bind:disabled={day.disabled}></ListItem> 
      {/each}
    {:else}
      <!-- <ListItem title="Servizio non disponibile!!!"></ListItem> -->
      <Block strong class="text-align-center">
        <Preloader color="multi" size={60}></Preloader>
      </Block>
    {/if}
  </List>
  
  <Snackbar class="flex-column snack" bind:active={snackbar} center timeout={3000}>
    <img src="icons/thumbs_up.png" width="50" alt="thumbsup" />
    <p id="snack_ok">Ordine effettuato correttamente!!</p>
  </Snackbar>

  {#if calendar.length > 0}  
  <Row tag="p">
    <Col tag="span"></Col>
    <Col tag="span">
      <Button raised fill onClick={order_snack} color="green" large disabled={!can_order}><strong>Ordina</strong></Button>
    </Col>
    <Col tag="span"></Col>
  </Row>
  {/if}
</Page>

<script>

import { Page, Navbar, Toolbar, Block, BlockTitle, List, ListItem, Row, Col, Button, Preloader } from 'framework7-svelte';
import { user_email, user_authenticated, title_bar, cloud_mex } from '../js/snacks_store.js';
import { getAuth, GoogleAuthProvider,signOut, signInWithRedirect, getRedirectResult } from "firebase/auth";
import { read_doc, write_doc, get_orders_by_user_date } from '../js/firebase.js';
import { create_logger } from '../js/logger.js';
import { create_order } from '../js/model.js';
import { food_list, resert_food_count, update_food_list } from '../js/food_list.js';
import FoodItem from '../components/food_item.svelte';
import { Snackbar} from 'svelte-materialify';
import Nav from '../components/bar.svelte';
import { calc_next_N_days, get_today } from '../js/helpers.js';

export let f7router;
export let f7route;

const N_ORDER_DAYS = 3; //how many days user can order
const LAST_DAY = 159; //last school's day
const BREAK_HOUR = 13 //can order unti 13:59

let log = create_logger('home.svelte');
let snackbar = false;
let can_order = false; //control the order button
let today; // current day
let calendar = []; // calendar of orders
let list_food = food_list; //list of food item 

let provider = new GoogleAuthProvider();
provider.setCustomParameters({
  hd: 'istitutoagnelli.it'
});    
let auth = getAuth();

$: {
  //check whether a date has been selected and a food has been selected
  //then enable the order button
  can_order = false;
  calendar.forEach(day => {
    can_order = can_order || day.selected;
  });

  let total_food = 0;
  list_food.forEach(food => {
    total_food += food.count;
  })
  can_order &= (total_food > 0 && total_food <= 5 ? true: false); 
}

async function order_snack() {
  if(user_email == "demosnacks1@gmail.com"){
    log.info("Google test account can't make order to DB");
  }else{
    let current_orders = food_list.filter(item => item.count > 0);
  
  //get selected order dates
  let current_calendar = calendar.filter(day => day.selected == true);
  
  //create one order per each selected day
  current_calendar.forEach(day => {
    let order = create_order($user_email, day.day, current_orders);
    write_doc(order, 'snacks'); 
    day.selected = false;
    day.disabled = true;
  });
  
  // reset selection day
  calendar.forEach(day => {
    day.selected = false;
  });
  calendar = calendar;

  //reset food list
  resert_food_count();
  list_food = [...food_list];
  
  snackbar = true;
  log.info("Order made to DB");
  }
}

Date.prototype.dayOfYear= function(){
    var j1= new Date(this);
    j1.setMonth(0, 0);
    return Math.round((this-j1)/8.64e7);
}

//init home environment to make orders
async function init_home() {
  let days = [];
  calendar.length = 0;
  today  = await get_today();
  
  //cannot order after 14:00
  if(today.getHours() > BREAK_HOUR)
    today.setDate(today.getDate() + 1 );
    
    if (today.dayOfYear() <= LAST_DAY) {
    days = calc_next_N_days(today, N_ORDER_DAYS);
    days.forEach(async (day) =>  {
        let daynum = new Date(day.split('/')[2], day.split('/')[1] - 1, day.split('/')[0]);
        if (daynum.dayOfYear() <= LAST_DAY) {
            let can_order_by_date =  await get_orders_by_user_date($user_email, day);
            let calendar_day = { 
                selected: false,
                day: day,
                disabled: can_order_by_date == 0 ? false : true
            };
            calendar.push(calendar_day);
            calendar = calendar;
        }
    });
  }
}
</script>

<style>
  .snack {
    position: absolute;
    top: 250px;
  }

  #snack_ok {
    color: #00f169;
    font-size: 1.1rem;
  }

</style>