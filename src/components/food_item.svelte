<ListItem
    title="{type}"
    subtitle="{subtype}"
    text="&euro; {price}"
    onClick={tap}
    > 
    <img
        slot="media"
        src="{img}"
        width="80"
    />
   
    <span slot="after">
        {#if ro == false}
        <i class="icon f7-icons cart">cart_fill
            <span class="badge color-blue counter">{count > 0 ? count : "--"}</span>
        </i>
        {:else}
            <span class="badge color-green counter-ro">{count > 0 ? count : "--"}</span>
        {/if}                
    </span>  
</ListItem>

<script>
    import { ListItem, Toggle,  } from 'framework7-svelte';
    import { createEventDispatcher } from 'svelte';  
    const dispatch = createEventDispatcher();

    export let type = "";
    export let subtype = "";
    export let img = "";
    export let price = 0.0;
    export let count;
    export let ro = false;

    function tap() {
        if (ro == false) {
            count++;
            if (count > 2)
                count = 0;
            dispatch('change', {count: count});
        }
    }
</script>

<style>
    .cart {
        /* font-size: 40px; */
        position: relative;
        right: 10px;
        top: 20px;
    }

    .counter {
        width: 20px;
        height: 20px;
        font-size: 12px;
    }

    .counter-ro {
        width: 30px;
        height: 30px;
        font-size: 16px;
        position: relative;
        right: 10px;
        top: 20px;
    }
</style>