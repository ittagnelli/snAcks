<script>
	import { onMount } from 'svelte';
	import { sort_orders, chart } from './chart_helpers';

    export let db_orders;

	onMount(async () => {
        let {labels_s1, values_s1} = orders_per_day(db_orders);
        console.log(labels_s1);
        console.log(values_s1);


        let {labels_s2, values_s2} = items_per_day(db_orders); 
            console.log(labels_s2);
            console.log(values_s2);

		// chart("#chart_odp", "line", 250, labels, values, "Ordini Giornalieri", ["#ff3e00"]);
        let s1 = {
            title: 'Ordini Giornalieri',
            type: 'line',
            values: values_s1
        }

        let s2 = {
            title: 'Pezzi Giornalieri',
            type: 'bar',
            values: values_s2
        }

        chart("#chart_odp", 'line', 350, "Ordini e Pezzi Giornalieri", ["#ff3e00"], labels_s1, s1, s2);
	});

    function orders_per_day(orders) {
        let opd = {};
        sort_orders(orders).forEach(order => {
            if (order.date_order in opd)
                opd[order.date_order] += 1;
            else
                opd[order.date_order] = 1;
        });

        return { labels_s1: Object.keys(opd), 
                 values_s1: Object.values(opd)
               }
    }

    function items_per_day(orders) {
        let ipd = {};
        sort_orders(orders).forEach(order => {
            let n_items = 0;
            order.food_list.forEach(item => n_items += item.count);
            if (order.date_order in ipd)
                ipd[order.date_order] += n_items;
            else
                ipd[order.date_order] = n_items;
        });

        return { labels_s2: Object.keys(ipd), 
                 values_s2: Object.values(ipd)
               }
    }

</script>	

<div class="chart-box" id="chart_odp"></div>
<style>

</style>