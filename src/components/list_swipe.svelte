{#if order.can_delete}
    <ListItem
        swipeout
        onSwipeoutDeleted={onDeleted}
        title="{title_order}"
        after="{date_order}">  
        <SwipeoutActions right>
            <SwipeoutButton delete>Delete</SwipeoutButton>
        </SwipeoutActions>
    </ListItem>
{:else}
    <ListItem
        swipeout    
        title="{title_order}"
        after="{date_order}">  
    </ListItem>
{/if}

<script>
    import { ListItem, SwipeoutActions, SwipeoutButton } from 'framework7-svelte';
    import { createEventDispatcher } from 'svelte';
  
    const dispatch = createEventDispatcher();
    export let order;

    let id_order = order.id;
    let title_order = `Salati (${order.order.qty_salato}) Dolci (${order.order.qty_dolce})`;
    let date_order = order.order.date_order;
    
    console.log("#########");
    console.log(id_order);
    console.log(title_order);
    console.log(date_order);

    function onDeleted() {
      dispatch('remove', {id: id_order});
    }
</script>
