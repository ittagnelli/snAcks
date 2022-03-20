<!-- <Page name="storico">
  <Navbar title="Storico" />
  <BlockTitle>Storico Ordini</BlockTitle>
  <List>
    <ListItem title="Item 1"></ListItem>
    <ListItem title="John Doe">
    </ListItem>  

    <ListItem title="John Doe">
        <Badge color="red">1</Badge>
        <Badge color="red">2</Badge>
    </ListItem>
    
    <ListItem link="#" header="Name" title="JMARK Doe" after="Edit">
    </ListItem>
   

    <ListItem title="Item 2"></ListItem>
    <ListItem title="Item 3"></ListItem>
  </List>

  <List>
    <ListItem link="#" header="Name" title="John Doe" after="Edit">
    </ListItem>
  </List>

</Page>

<script>
  import { Badge, Icon, BlockTitle, Page, Navbar, List, ListItem, Block, Button, useStore } from 'framework7-svelte';
  export let f7router; // this is just to avoid a warning
  export let f7route;
</script> -->


<Page name="storico">
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
    <ListItem
      swipeout
      onSwipeoutDeleted={onDeleted}
      title="Salati ({order.order.qty_salato}) Dolci ({order.order.qty_dolce})"
      after="{order.order.date_order}">
      <SwipeoutActions right>
        <SwipeoutButton delete>Delete</SwipeoutButton>
      </SwipeoutActions>
    </ListItem>
    {/each}
  </List>
  <!-- <Button fill onClick={queryd}>XXXXXXXX</Button> -->

</Page>
  

<script>
  import { onMount } from 'svelte';
  import {f7, Button, Page, Navbar, Block, BlockTitle, List, ListItem, SwipeoutActions, SwipeoutButton} from 'framework7-svelte';
  import { get_orders_by_email } from '../js/firebase.js';

  export let f7router; // this is just to avoid a warning
  export let f7route;

  let orders = [];
  
  onMount(async () => {
    orders = await get_orders_by_email("espedito.mancuso@istitutoagnelli.it");
	});
  
  function onDeleted() {
    f7.dialog.alert('Thanks, item removed!');
    console.log("CANCELLO2");
  }

  // async function queryd() {
  //   console.log("query db");
  //   orders = await get_orders_by_email("espedito.mancuso@istitutoagnelli.it");
    
  //   console.log("query db");
  // }


</script>