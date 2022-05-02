<Page name="ritiro" onPageTabShow={get_today_order}  class="bg-color-white">
    <Nav title={$title_bar} />  
    
    {#if loading == true}
    <BlockTitle large class="text-align-center">Ricerca ordine</BlockTitle>
      <div class="preload">
        <Preloader color="multi" size={60}  />
      </div>
    {:else}
      {#if list_food.length > 0}
      <BlockTitle medium>Ordine del giorno {today}</BlockTitle>
      <List mediaList>
          {#each list_food as food}
            <FoodItem type="{food.type}" subtype="{food.subtype}" img="{food.img}" price={food.price} bind:count={food.count} ro={true} />
          {/each}
      </List>
      <Hash hash="{today}"/>
      {:else}
        <p>Non ci sono ordini per il giorno</p>  
        <div class="no-order-box">
          <i class="icon f7-icons color-red no-order">multiply_circle_fill</i>
        </div>
        <p>{today}</p>
      {/if}
    {/if}
</Page>
  
  <script>
    import { Page, Block, BlockTitle, Navbar, Link, Button, List, ListItem, AccordionContent, Row, Col, Preloader } from 'framework7-svelte'
    import { user_email, last_feedback, title_bar } from '../js/snacks_store.js';
    import { get_order_by_user_date } from '../js/firebase.js';
    import Nav from '../components/bar.svelte';
    import FoodItem from '../components/food_item.svelte';
    import Hash from '../components/hash.svelte';
    import { get_today } from '../js/helpers';

    export let f7router; // this is just to avoid a warning
    export let f7route;

    let today;
    let list_food = [];
    let loading = true;
    

    async function get_today_order() {
      list_food.length = 0;
      loading = true;
      today = (await get_today()).toLocaleDateString("it-IT");
      let order = await get_order_by_user_date($user_email, today);

      if(order != null) 
        order.food_list.forEach(food => {
          list_food.push({
            type: food.type,
            subtype: food.subtype,
            img: food.img,
            price: food.price,
            count: food.count
          });
        });

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