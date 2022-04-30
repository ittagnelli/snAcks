<script>
	import { onMount } from 'svelte';
	import { sort_orders, chart } from './chart_helpers';

    export let db_orders;

	onMount(async () => {
        let {labels, values} = food_division(db_orders);
		chart("#chart_food_division", "pie", 350, labels, values, "Merende Preferite", ["#FF0000"]);
	});

    function food_division(orders) {
        let food_count = {};
        console.log(orders)
        orders.forEach(order => {
            order.food_list.forEach(food => {
                if (food.type in food_count)
                food_count[food.type] += food.count;
            else
                food_count[food.type] = food.count;
            });
        });

        return { labels: Object.keys(food_count), 
                 values: Object.values(food_count)
               }
    }
</script>	

<div class="chart-box" id="chart_food_division"></div>

<style>
</style>