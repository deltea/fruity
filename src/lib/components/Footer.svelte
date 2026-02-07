<script lang="ts">
  import { onMount } from "svelte";

  const speed = 0.4;
  let offset = $state(0);

  onMount(() => {
    // setInterval(() => {
    //   offset -= speed;
    // }, 20);
  });
</script>

<footer class="flex gap4 p-10 items-center justify-center font-bold">
  <!-- <a href="https://hackclub.com/">
    <img src="/images/hack-club-logo.svg" alt="Hack Club Logo" class="size-10 corner-squircle rounded-3xl">
  </a> -->
  <div>
    made by
    <a class="text-primary" target="_blank" href="https://github.com/deltea">deltea</a> +
    <a class="text-primary" target="_blank" href="https://github.com/bucketfish">tongyu</a> +
    <a class="text-primary" target="_blank" href="https://github.com/fireentity1">fireentity</a>
    with
    <a class="text-primary" target="_blank" href="https://svelte.dev">svelte</a>
  </div>
</footer>
