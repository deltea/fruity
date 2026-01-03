<script lang="ts">
	import "./layout.css";

	let { children } = $props();
</script>

<svelte:head>
	<title>Fruity!</title>
</svelte:head>

<main class="bg-[url('/background.svg')] bg-repeat h-screen">
	{@render children()}
</main>
