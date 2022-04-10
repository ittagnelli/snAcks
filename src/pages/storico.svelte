<Page name="storico" onPageTabShow={get_orders} class="bg-color-white">
  <Nav title={$title_bar} />
  {#if loading == true}
    <BlockTitle large class="text-align-center">Ricerca ordini</BlockTitle>
      <div class="preload">
        <Preloader color="multi" size={60}  />
      </div>
    {:else}
      {#if orders.length > 0}
        {#each orders as order}
          <List mediaList>
            <OrderItem order={order} on:remove={onDeleted} />
            {#each order.order.food_list as food}
              <FoodItem type="{food.type}" subtype="{food.subtype}" img="{food.img}" price={food.price} count={food.count} ro={true} />
            {/each}
          </List>
        {/each}
      {:else}
      <BlockTitle large class="text-align-center">Non ci sono ordini</BlockTitle> 
        <div class="no-order-box">
          <i class="icon f7-icons color-red no-order">multiply_circle_fill</i>
        </div>
      {/if}
    {/if}
</Page>

<script>
  import { onMount } from 'svelte';
  import { Preloader, Badge, f7, Button, Page, Navbar, Block, BlockTitle,Link,NavRight  , List, ListItem, SwipeoutActions, SwipeoutButton} from 'framework7-svelte';
  import { get_orders_by_email, delete_doc } from '../js/firebase.js';
  import { user_email, title_bar } from '../js/snacks_store.js';
  import FoodItem from '../components/food_item.svelte';
  import OrderItem from '../components/item_storico.svelte';
  import Nav from '../components/bar.svelte'
  
  export let f7router; // this is just to avoid a warning
  export let f7route;

  const N_DAYS = 1 * 3600 * 24 * 1000;
  let orders = [];
  // let new_orders;
  let loading = true;
  onMount(async () => {
	});

  async function onDeleted(event) {
    await delete_doc('snacks', event.detail.id);
    loading = true;
    orders.length = 0;
    get_orders();
  }

  async function get_orders() {
    console.log("ENTRO IN STORICO");
    let raw_orders = await get_orders_by_email($user_email);    
    let current_date = new Date();

    orders.length = 0;
    loading = true;

    current_date.setHours(23);
    current_date.setMinutes(59);
    current_date.setSeconds(0);
    current_date.setMilliseconds(0);
    let current_millis = current_date.getTime();
    raw_orders.forEach((order) => {
      order['can_delete'] = (order.order.millis_order - current_millis) > N_DAYS ? true : false;
    });
    orders = raw_orders;
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

  .preload {
    text-align: center;
    padding-top: 100px;
  }
</style>