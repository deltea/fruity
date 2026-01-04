<script lang="ts">
  import { Accordion } from "bits-ui";

  const items = [
    {
      value: "1",
      title: "What is the meaning of life?",
      content:
        "To become a better person, to help others, and to leave the world a better place than you found it."
    },
    {
      value: "2",
      title: "How do I become a better person?",
      content:
        "Read books, listen to podcasts, and surround yourself with people who inspire you."
    },
    {
      value: "3",
      title: "What is the best way to help others?",
      content: "Give them your time, attention, and love."
    }
  ];
</script>

<Accordion.Root type="multiple" class="w-full space-y-2">
  {#each items as item}
    <Accordion.Item value={item.value}>
      <Accordion.Header>
        <Accordion.Trigger class="w-full flex p-4 justify-between items-center bg-bg-2 cursor-pointer rounded-lg group [&[data-state=open]>iconify-icon]:rotate-180">
          <span>{item.title}</span>
          <iconify-icon icon="mingcute:down-fill" class="text-2xl duration-200"></iconify-icon>
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden p-4">
        {item.content}
      </Accordion.Content>
    </Accordion.Item>
  {/each}
</Accordion.Root>
