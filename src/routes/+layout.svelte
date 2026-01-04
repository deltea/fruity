<script lang="ts">
	import "./layout.css";
	import "iconify-icon";

	let { children } = $props();
</script>

<svelte:head>
	<title>Fruity!</title>
</svelte:head>

<div class="bg-[url('/background.svg')] bg-repeat min-h-screen">
	{@render children()}
</div>
