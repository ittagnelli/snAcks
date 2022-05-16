<script>
	import { onMount } from 'svelte';
	import { sort_orders, chart } from './chart_helpers';

    export let db_orders;

	onMount(async () => {
        let {labels_s1, values_s1} = orders_per_user(db_orders);
       // console.log(labels_s1);
       // console.log(values_s1);

       new frappe.Chart( "#chart_odu", { // or DOM element
	data: {
	labels: ["12am-3am", "3am-6am", "6am-9am", "9am-12pm",
		"12pm-3pm", "3pm-6pm", "6pm-9pm", "9pm-12am"],

	datasets: [
		{
			name: "U1", chartType: 'line',
			values: [25, 40, 30, 35, 8, 52, 17, 4]
		},
		{
			name: "U2", chartType: 'line',
			values: [25, 50, 10, 15, 18, 32, 27, 14]
		},
		{
			name: "U3", chartType: 'line',
			values: [11, 20, 3, 15, 58, 12, 17, 37]
		},
	    ],
	},

	title: "My Awesome Chart",
	type: 'axis-mixed', // or 'bar', 'line', 'pie', 'percentage'
	height: 300,
	colors: ['purple', '#ffa3ef', 'light-blue'],

	tooltipOptions: {
		formatTooltipX: d => (d + '').toUpperCase(),
		formatTooltipY: d => d + ' pts',
	}
  });


	});

    function orders_per_user(orders) {
        console.log("ORDERS:", orders)
        //let users = new Set();

    //     {
    //     name: "05/05/2022",
    //     values: [25, 40, 30, 35, 8, 52, 17, -4]
    //   },


        console.log(sort_orders(orders))
        // users.forEach(user => {
        //     console.log(orders.filter(order => order.email == user));
        //     orders.filter(order => order.email == user).forEach(order => {
        //         let total_food = 0;
        //         order.food_list.forEach(food => {
        //             total_food += food.count;
        //         });

        //     });
        // });
        
        // return { labels_s1: Object.keys(opu), 
        //          values_s1: Object.values(opu)
        //        }
    }


</script>	

<div class="chart-box" id="chart_odu"></div>
<style>

</style>