<script lang="ts">
  import { cn } from "$lib/utils";

  let { position, color }: {
    position: "top" | "bottom";
    color: "primary" | "secondary";
  } = $props();
</script>

<div class={cn(
  "w-full h-12 bg-repeat bg-contain",
  {
    "rotate-180": position === "bottom",
    "translate-y-0.5": position === "top",
    "-translate-y-0.5": position === "bottom",
    "bg-[url('/images/waves-pattern.svg')]": color === "secondary",
    "bg-[url('/images/waves-pattern-orange.svg')]": color === "primary"
  }
)}></div>

