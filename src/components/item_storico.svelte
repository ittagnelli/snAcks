{#if order.can_delete}
    <ListItem title="{title_order}">
        <Button slot="after" color="red" fill onClick={onDeleted}>Rimuovi</Button>
    </ListItem>
{:else}
    <ListItem title="{title_order}"></ListItem>
{/if}
    
<script>
    import { ListItem, Button, SwipeoutActions, SwipeoutButton } from 'framework7-svelte';
    import { createEventDispatcher } from 'svelte';
  
    const dispatch = createEventDispatcher();
    export let order;

    let id_order = order.id;
    let title_order = `Ordine del giorno ${order.order.date_order}`;
    let date_order = order.order.date_order;
    
    console.log("#########");
    console.log(id_order);
    console.log(title_order);
    console.log(date_order);

    function onDeleted() {
      dispatch('remove', {id: id_order});
    }
</script>
