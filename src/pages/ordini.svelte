<Page name="ordini" onPageTabShow={calculate_total_orders}  class="bg-color-white">
  <Nav title={$title_bar} />  
  
  {#if loading == true}
  <BlockTitle large class="text-align-center">Ricerca ordine</BlockTitle>
    <div class="preload">
      <Preloader color="multi" size={60}  />
    </div>
  {:else}
    {#if list_food.length > 0}
      {#each list_food as food}
        <BlockTitle medium>Ordine del giorno {food.day}</BlockTitle>
        <List mediaList>
          {#each food.orders as item}
              <FoodItem type="{item.type}" subtype="{item.subtype}" img="{item.img}" price={item.price} count={item.count} ro={true} />
          {/each}
        </List>
      {/each}
    {:else}
      <p>Non ci sono ordini pendenti</p>  
      <div class="no-order-box">
        <i class="icon f7-icons color-red no-order">multiply_circle_fill</i>
      </div>
    {/if}
  {/if}
</Page>

<script>
  import { Page, Block, BlockTitle, Navbar, Link, Button, List, ListItem, AccordionContent, Row, Col, Preloader } from 'framework7-svelte'
  import { user_email, last_feedback, title_bar } from '../js/snacks_store.js';
  import { get_orders_by_date } from '../js/firebase.js';
  import Nav from '../components/bar.svelte';
  import FoodItem from '../components/food_item.svelte';
  import { calc_next_N_days } from '../js/helpers.js';

  export let f7router; // this is just to avoid a warning
  export let f7route;

  const N_ORDER_DAYS = 2;
  let today;
  let list_food = [];
  let days = [];
  let loading = true;
  

  async function calculate_total_orders() {
    list_food.length = 0;
    days.length = 0;
    loading = true;
   
    days = calc_next_N_days(new Date(), N_ORDER_DAYS);
    for(const day of days) {
      let orders = await get_orders_by_date(day);
      list_food.push({day: day, orders: orders});
    }   
    
    list_food = list_food;
    loading = false;
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
</style>