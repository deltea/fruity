<script lang="ts">
  let currentLine = $state(0);
  let isAnimating = $state(false);

  function onClick() {
    if (isAnimating) {
      // skip animation
    } else {
      if (currentLine < lines.length - 1) {
        currentLine += 1;
      }
    }
  }

  let { lines }: { lines: string[] } = $props();
</script>

<button onclick={onClick} class="flex items-stretch cursor-pointer w-full text-left relative">
  <img src="/fl-chan.gif" alt="FL-chan" class="h-24">
  <div class="grow flex items-stretch relative">
    <div class="w-0 h-0 border-t-12 border-b-12 border-r-12 border-t-transparent border-b-transparent border-r-bg-2 translate-y-6"></div>
    <div class="bg-bg-2 rounded-2xl grow px-4 py-3 w-full">
      {lines[currentLine]}
    </div>
  </div>

  <p class="animate-pulse absolute text-muted bottom-2 right-4">click to continue...</p>
</button>
