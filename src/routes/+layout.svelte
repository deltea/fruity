<script lang="ts">
	import { onMount } from "svelte";
	import "./layout.css";
	import "iconify-icon";

  const bgSpeed = 0.5;
  let bgOffset = $state(0);

	let { children } = $props();

	onMount(() => {
    setInterval(() => {
      bgOffset += bgSpeed;
    }, 20);
  });
</script>

<svelte:head>
	<title>Fruity!</title>
</svelte:head>

<div
	style="background-position: {bgOffset}px {bgOffset}px;"
	class="bg-[url('/background.svg')] bg-repeat min-h-screen"
>
	{@render children()}
</div>
