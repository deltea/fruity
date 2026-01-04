<script lang="ts">
  import { Accordion } from "bits-ui";

  let { title, children } = $props();
</script>

<Accordion.Item value={title} class="group">
  <Accordion.Header>
    <Accordion.Trigger class="w-full flex p-4 justify-between items-center bg-bg-2 cursor-pointer rounded-lg group [&[data-state=open]>iconify-icon]:rotate-180">
      <span>{title}</span>
      <iconify-icon icon="mingcute:down-fill" class="text-2xl duration-200"></iconify-icon>
    </Accordion.Trigger>
  </Accordion.Header>
  <Accordion.Content class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden duration-100 p-4">
    {@render children()}
  </Accordion.Content>
</Accordion.Item>
