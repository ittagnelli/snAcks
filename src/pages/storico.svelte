<Page name="storico" onPageTabShow={get_order}>
  <Navbar title="Storico"></Navbar>
  <Block>
    <p>
      Storico degli ordini degli ultimi 5 giorni.
    </p>
    <p>
      Puoi cancellare gli ordini in corso.
    </p>
  </Block>

  <BlockTitle>Ordini</BlockTitle>
  
  <List>
    {#each orders as order}
      <OrderItem order={order} on:remove={onDeleted} />
    {/each}
  </List>
</Page>
  

<script>
  import { onMount } from 'svelte';
  import { Badge, f7, Button, Page, Navbar, Block, BlockTitle, List, ListItem, SwipeoutActions, SwipeoutButton} from 'framework7-svelte';
  import { get_orders_by_email, delete_doc } from '../js/firebase.js';
  import { user_email } from '../js/snacks_store.js';
  import OrderItem from '../components/list_swipe.svelte';

  export let f7router; // this is just to avoid a warning
  export let f7route;

  const HOUR_OF_ORDER = 14;
  let orders = [];
  
  onMount(async () => {
	});

  const remove_order = (list, id) => list.filter(t => t.id !== id);

  async function onDeleted(event) {
    console.log(event.detail.id);
    console.log("ORDER PRIMA");
    console.log(orders);
    await delete_doc('snacks', event.detail.id);
    f7.dialog.alert('Grazie, il tuo ordine è stato rimossod!');
    orders = orders.filter(t => t.id !== event.detail.id);
    console.log("ORDER DOPO");
    console.log(orders);    
  }

  async function get_order() {
    console.log("ENTRO IN STORICO");
    // orders.length = 0;
    let raw_orders = await get_orders_by_email($user_email);
    let current_date = new Date();
    let current_hh = current_date.getHours();
    current_date.setHours(23);
    current_date.setMinutes(59);
    current_date.setSeconds(0);
    current_date.setMilliseconds(0);
    let millis_tomorrow = current_date.getTime() + 60000;
   
    console.log(`####### ${raw_orders.length} #########`);
    raw_orders.forEach((order) => {
      if (current_hh < HOUR_OF_ORDER)
        order['can_delete'] = order.order.millis_order >= millis_tomorrow;
      else 
        order['can_delete'] = order.order.millis_order > millis_tomorrow;
    });

    orders = raw_orders;
  }
</script>