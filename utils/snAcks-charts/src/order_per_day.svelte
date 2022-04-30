<script>
	import { onMount } from 'svelte';
	import { sort_orders, chart } from './chart_helpers';

    export let db_orders;

	onMount(async () => {
        let {labels, values} = orders_per_day(db_orders);
		chart("#chart_odp", "line", 250, labels, values, "Ordini Giornalieri", ["#ff3e00"]);
	});

    function orders_per_day(orders) {
        let opd = {};
        sort_orders(orders).forEach(order => {
            if (order.date_order in opd)
                opd[order.date_order] += 1;
            else
                opd[order.date_order] = 1;
        });

        return { labels: Object.keys(opd), 
                 values: Object.values(opd)
               }
    }
</script>	

<div class="chart-box" id="chart_odp"></div>
<style>

</style>