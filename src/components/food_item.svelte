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
        <!-- <Toggle /> -->
        <i class="icon f7-icons cart">cart_fill
            <!-- <span class="badge color-blue counter">{counter}</span> -->
            <span class="badge color-blue counter">{count > 0 ? count : "--"}</span>
        </i>
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

    // let counter = "--";
    export let count;

    // function tap() {
    //     count++;
    //     if (count > 2)
    //         count = 0;
    //     counter = count > 0 ? count : "--";
    //     console.log(counter);
    //     dispatch('change', {count: count});
    // }

    function tap() {
        count++;
        if (count > 2)
            count = 0;
        // counter = count > 0 ? count : "--";
        // console.log(counter);
        dispatch('change', {count: count});
    }

   
</script>

<style>
    .cart {
        /* font-size: 30px; */
        position: relative;
        right: 10px;
        top: 20px;
    }

    .counter {
        width: 20px;
        height: 20px;
        font-size: 12px;
    }
</style>