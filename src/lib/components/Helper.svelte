<script lang="ts">
  import { onMount } from "svelte";

  const charDuration = 20;
  let currentLine = $state(0);
  let isAnimating = $state(true);
  let currentText = $state("");
  let currentInterval: NodeJS.Timeout;
  let currentTimeout: NodeJS.Timeout;

  let { lines }: { lines: string[] } = $props();

  function onClick() {
    if (isAnimating) {
      finishAnimation();
    } else {
      if (currentLine < lines.length - 1) {
        changeLine(currentLine + 1);
      }
    }
  }

  function finishAnimation() {
    clearInterval(currentInterval);
    clearTimeout(currentTimeout);
    currentText = lines[currentLine];
    isAnimating = false;
  }

  function changeLine(line: number) {
    currentLine = line;
    isAnimating = true;
    currentText = "";
    currentTimeout = setTimeout(() => {
      isAnimating = false;
    }, charDuration * lines[currentLine].length);
    let i = 0;
    currentInterval = setInterval(() => {
      currentText = lines[currentLine].slice(0, i);
      i++;
      if (i > lines[currentLine].length) clearInterval(currentInterval);
    }, charDuration);
  }

  onMount(() => {
    changeLine(0);
  })

</script>

<button onclick={onClick} class="flex items-stretch cursor-pointer w-full text-left relative">
  <img src="/images/fl-chan.gif" alt="FL-chan" class="h-24">
  <div class="grow flex items-stretch relative">
    <div class="w-0 h-0 border-t-12 border-b-12 border-r-12 border-t-transparent border-b-transparent border-r-surface translate-y-6"></div>
    <p class="bg-surface rounded-3xl grow px-4 py-3 w-full font-bold corner-squircle">
      {currentText}
    </p>
  </div>

  {#if currentLine < lines.length - 1}
    <p class="animate-pulse flex items-center absolute bottom-2 right-4">
      click to continue >
    </p>
  {/if}
</button>
