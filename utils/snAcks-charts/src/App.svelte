<script>
	import { onMount } from 'svelte';
	import { read_coll } from './firebase';
	import OrderPerDay from './order_per_day.svelte';
	import FoodDivision from './food_division.svelte';
	import OrderPerUser from './order_per_user.svelte';
	import Number from './number.svelte';
	import { total_orders, total_users, total_items } from './chart_helpers';

  import { Circle3 } from 'svelte-loading-spinners'

	//dev
	let orders = JSON.parse(localStorage.orders);
	
	//prod
	// let orders = [];// = read_coll("snacks");

	
	onMount(async () => {
		//prod
		// orders = await read_coll("snacks");	
	});
</script>	

<main>
	<h1>snAcks Charts v1.1.1</h1>

	
	{#if orders.length > 0}
		<!-- <div class="line-of-numbers">
			<Number title="Utenti Totali" number={total_users(orders)} />
			<Number title="Ordini Totali" number={total_orders(orders)} />
			<Number title="Pezzi Totali" number={total_items(orders)} />
		</div> -->

		<!-- <OrderPerDay db_orders={orders} />	
		<FoodDivision db_orders={orders} />	 -->
		<OrderPerUser db_orders={orders} />
	{:else}
		<div class="spinner">
			<Circle3 size="160" color="#FF3E00" unit="px" duration="2s"></Circle3>
		</div>
		<h2>Recupero Dati in corso!!!</h2>	
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
		font-size: 5vmin;
		font-weight: bolder;
		margin-bottom: 30px;
	}

	h2 {
		border: 10px solid green;
		text-transform: uppercase;
		padding: 40px;
		width:40%;
		margin: auto;
		margin-top: 50px;
		font-size: 1.5em;
		font-weight: bolder;
	}

	.spinner {
		display: flex;
		justify-content: center;
		margin-top: 20px;
	}

	.line-of-numbers {
		column-count: 3;
	}
</style>