<script>
	import { onMount } from 'svelte';
	import { read_coll } from './firebase';
	import OrderPerDay from './order_per_day.svelte';
	import FoodDivision from './food_division.svelte';
	import Number from './number.svelte';
	import { total_orders, total_users } from './chart_helpers';

	//dev
	// let orders = JSON.parse(localStorage.orders);
	
	//prod
	let orders = [];// = read_coll("snacks");

	
	onMount(async () => {
		//prod
		orders = await read_coll("snacks");	
	});
</script>	

<main>
	<h1>snAcks Charts</h1>
	
	{#if orders.length > 0}
		<div class="line-of-numbers">
			<Number title="Ordini Totali" number={total_orders(orders)} />
			<Number title="Utenti Totali" number={total_users(orders)} />
		</div>

		<OrderPerDay db_orders={orders} />	
		<FoodDivision db_orders={orders} />	
	{:else}
		<h2>Impossibile recuperare i dati!!!</h2>
	{/if}

	
	
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 960px;
		margin: 0 auto;
	}

	h1 {
		color: #c10008;
		text-transform: uppercase;
		font-size: 2em;
		font-weight: bolder;
	}

	h2 {
		border: 40px solid red;
		text-transform: uppercase;
		padding: 40px;
		width:80%;
		margin: auto;
		margin-top: 50px;
		font-size: 2em;
		font-weight: bolder;
	}

	.line-of-numbers {
		column-count: 2;
	}
</style>