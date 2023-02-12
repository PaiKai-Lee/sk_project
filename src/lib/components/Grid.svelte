<script>
	export let columns = 3;
</script>

<div class="custom-grid" style="--columns:{columns}">
	<slot />
</div>

<style>
	.custom-grid {
		height: 100%;
		width: 100%;
		display: grid;
		justify-content: center;
		align-content: center;
		grid-template-columns: repeat(var(--columns), 1fr);
		gap: 1rem;
		padding: 1rem;
	}

	@media (max-width: 1200px) {
		.custom-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
