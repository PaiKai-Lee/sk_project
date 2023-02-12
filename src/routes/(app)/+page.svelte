<script>
	import { blur } from 'svelte/transition';

	import Grid from '$lib/components/Grid.svelte';

	/** @type {import('./$types').PageServerData}*/
	export let data;

	let selected;

	let filterPartners = [];

	$: if (selected === 'all') {
		filterPartners = data.partners.map((item) => item.staff).flat();
	} else {
		filterPartners = data.partners
			.filter((item) => item.department === selected)
			.map((item) => item.staff)
			.flat();
	}
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<h3>HOME 夥伴們</h3>

<div class="p-1">
	<select bind:value={selected}>
		<option value="all" selected>All</option>
		<option value={data.departments[0]}>{data.departments[0]}</option>
		<option value={data.departments[1]}>{data.departments[1]}</option>
		<option value={data.departments[2]}>{data.departments[2]}</option>
	</select>
</div>

{#if selected}
	<Grid columns={3}>
		{#key selected}
			{#each filterPartners as partner, index}
				<article class="m-0" in:blur={{ delay: index * 60 }}>
					<div class="grid">
						<img src={partner.avatar} alt="partner" />
						<hgroup>
							<h3>{partner.name}</h3>
							<p>{partner.text}</p>
						</hgroup>
					</div>
				</article>
			{/each}
		{/key}
	</Grid>
{:else}
	<div aria-busy="true"></div>
{/if}

<style>
	div.grid img {
		width: 100%;
	}
	select {
		width: 20%;
	}
	[aria-busy="true"]{
		font-size: 2.5rem;
	}
</style>
