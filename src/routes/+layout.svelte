<script lang="ts">
	import "./layout.css";

	let { children } = $props();
</script>

<svelte:head>
	<title>Fruity!</title>
</svelte:head>

{@render children()}
