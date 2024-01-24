<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.status} {$page.error?.message}</title>
</svelte:head>

<div class="container">
	<h1>{$page.status}</h1>
	<h2>{$page.error?.message}</h2>
</div>

<style>
	.container {
		margin: 0 12px 0 12px;
		text-align: center;
	}
</style>
