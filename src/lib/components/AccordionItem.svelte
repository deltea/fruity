<script lang="ts">
  import { Accordion } from "bits-ui";

  let { title, children } = $props();
</script>

<Accordion.Item value={title} class="group">
  <Accordion.Header>
    <Accordion.Trigger class="w-full flex p-4 justify-between items-center bg-primary-dim cursor-pointer rounded-2xl corner-squircle group [&[data-state=open]>iconify-icon]:rotate-180">
      <span>{title}</span>
      <iconify-icon icon="mingcute:down-fill" class="text-xl duration-200"></iconify-icon>
    </Accordion.Trigger>
  </Accordion.Header>
  <Accordion.Content class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden duration-100">
    <div class="p-4">{@render children()}</div>
  </Accordion.Content>
</Accordion.Item>
