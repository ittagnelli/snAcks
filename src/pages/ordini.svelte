<Page name="storico" onPageTabShow={calculate_total_orders}>
  <Navbar title={$title_bar} />
  <Block>
    <p>
      Totale ordini giornalieri per tipo di alimento
    </p>
   
  </Block>

  <BlockTitle>Totale Ordini per il {day1}</BlockTitle>
  <List>
    <ListItem  
      title="Dolce"
      after={dolce_1}>  
    </ListItem>
    <ListItem  
      title="Salato"
      after={salato_1}>  
    </ListItem>
  </List> 
  
  <BlockTitle>Totale Ordini per il {day2}</BlockTitle>
  <List>
    <ListItem  
      title="Dolce"
      after={dolce_2}>  
    </ListItem>
    <ListItem  
      title="Salato"
      after={salato_2}>  
    </ListItem>
  </List> 

  <BlockTitle>Totale Ordini per il {day3}</BlockTitle>
  <List>
    <ListItem  
    title="Dolce"
    after={dolce_3}>  
  </ListItem>
  <ListItem  
    title="Salato"
    after={salato_3}>  
  </ListItem>
  </List> 

  <BlockTitle>Totale Ordini per il {day4}</BlockTitle>
  <List>
    <ListItem  
    title="Dolce"
    after={dolce_4}>  
  </ListItem>
  <ListItem  
    title="Salato"
    after={salato_4}>  
  </ListItem>
  </List> 

  <!-- <List>
    {#each orders as order}
      <OrderItem order={order} on:remove={onDeleted} />
    {/each}
  </List> -->
</Page>
  

<script>
  import { onMount } from 'svelte';
  import { Badge, f7, Button, Page, Navbar, Block, BlockTitle, List, ListItem } from 'framework7-svelte';
  import { get_orders_by_date } from '../js/firebase.js';
  import { user_email, title_bar } from '../js/snacks_store.js';

  export let f7router; // this is just to avoid a warning
  export let f7route;
  let today = new Date();
  let day1 = nextBizDay(today).toLocaleDateString("it-IT")
  let day2 = nextBizDay(today).toLocaleDateString("it-IT")
  let day3 = nextBizDay(today).toLocaleDateString("it-IT")
  let day4 = nextBizDay(today).toLocaleDateString("it-IT")

  let dolce_1 = 0;
  let salato_1 = 0;
  let dolce_2 = 0;
  let salato_2 = 0;
  let dolce_3 = 0;
  let salato_3 = 0;
  let dolce_4 = 0;
  let salato_4 = 0;

  // const HOUR_OF_ORDER = 14;
  // let orders = [];
  
  onMount(async () => {
	});

  
  function nextBizDay(start) {
    do {
      start.setDate(start.getDate() + 1);
    } while (start.getDay() == 0 || start.getDay() == 6)
    return start
  }

  async function calculate_total_orders() {
    
    console.log(day1);
    console.log(day2);
    console.log(day3);
    console.log(day4);
    
    let orders1 = await get_orders_by_date(day1);
    let orders2 = await get_orders_by_date(day2);
    let orders3 = await get_orders_by_date(day3);
    let orders4 = await get_orders_by_date(day4);

    dolce_1 = orders1.num_dolce;
    salato_1 = orders1.num_salato;
    dolce_2 = orders2.num_dolce;
    salato_2 = orders2.num_salato;
    dolce_3 = orders3.num_dolce;
    salato_3 = orders3.num_salato;
    dolce_4 = orders4.num_dolce;
    salato_4 = orders4.num_salato;

    console.log(orders1);
    console.log(orders2);
    console.log(orders3);
    console.log(orders4);

  }
</script>