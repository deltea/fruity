<script lang="ts">
	import { onMount } from "svelte";
	import "./layout.css";
	import "iconify-icon";

  const bgSpeed = 0.4;
  let bgOffset = $state(0);

	let { children } = $props();

	onMount(() => {
    setInterval(() => {
      bgOffset += bgSpeed;
    }, 20);
  });
</script>

<svelte:head>
	<title>Fruity! by Hack Club</title>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="title" content="Fruity! by Hack Club" />
	<meta name="description" content="Make a music-related project, and get a DAW!" />
	<meta name="keywords" content="FL Studio, Hack Club, Music, DAW, Fruity Edition, Ableton Live, Logic Pro, Free Software" />
</svelte:head>

<div
	style="background-position: {bgOffset}px {bgOffset}px;"
	class="bg-[url('/images/background.svg')] bg-repeat min-h-screen"
>
	{@render children()}
</div>
