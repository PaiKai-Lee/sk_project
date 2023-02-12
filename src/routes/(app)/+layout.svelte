<script>
	import Nav from '$lib/components/Nav.svelte';
</script>

<div class="container">
	<header>
		<Nav />
	</header>

	<main>
		<slot />
	</main>
</div>
