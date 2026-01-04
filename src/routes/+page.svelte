<script lang="ts">
  import { Accordion } from "bits-ui";
  import AccordionItem from "$components/AccordionItem.svelte";
    import Helper from "$components/Helper.svelte";
</script>

<div class="flex justify-center h-full py-8 sm:px-8 px-6">
  <main class="w-2xl space-y-16 mb-16">
    <header class="flex justify-between">
      <div class="flex sm:items-end items-center sm:gap-2 sm:flex-row flex-col">
        <div class="text-accent inline-flex items-baseline text-3xl font-black">
          <img src="/logo-outline.png" alt="Fruity Logo" class="h-8 translate-y-1">
          <span>Fruity!</span>
        </div>
        <span>by Hack Club</span>
      </div>

      <a href="https://fruity.fillout.com/rsvp" target="_blank" class="h-10 flex items-center font-bold bg-accent px-4 rounded-lg duration-100 hover:-translate-y-1 no-underline text-white">
        Sign Up!
      </a>
    </header>

    <article class="space-y-8">
      <Helper lines={[
        "yo whats up",
        "welcome to fruity, a hack club ysws all about music!",
        "i'm fl-chan! your guide to all things fruity :D",
        "this website is still under construction, so check back later for more updates!"
      ]} />

      <section>
        <p>
          Do <i>🫵 you</i> like music? (yes you do)
          Are <i>🫵 you</i> interested in making music?
          Have <i>🫵 you</i> heard of FL Studio?
          If you answered yes to all the above (or maybe not), then this YSWS is for you!
        </p>
        <div class="text-center my-6">
          presenting...
          <span class="font-bold text-2xl block">Fruity!</span>
        </div>
        <p>A new hack club YSWS (you ship we ship) focused on digital projects related to music. Make a music related coding project, get FL Studio!</p>
      </section>

      <section>
        <h2 class="mb-4">You Ship</h2>

        <p>Any digital project related to music! Could be a website, app, game, etc! Some ideas include:</p>
        <ul class="list-disc list-inside">
          <li>A rhythm game</li>
          <li>Last.fm integration</li>
          <li>Beat maker</li>
          <li>Or whatever else you think of!</li>
        </ul>
      </section>

      <section>
        <h2 class="mb-4">We Ship</h2>
        Get <a href="https://www.image-line.com/" target="_blank">FL Studio</a> (Fruity Edition) to start your music creation journey! (we might even be able to implement some kind of shop where you can buy plugins)
      </section>

      <section>
        <h2 class="mb-4">FAQ</h2>

        <Accordion.Root type="multiple" class="w-full space-y-2">
          <AccordionItem title="Can I submit multiple projects?">
            No. You can only submit one project.
          </AccordionItem>
          <AccordionItem title="How do I track my time?">
            Use Hackatime, an editor extension that tracks the time you spend coding. You can install it <a href="https://hackatime.hackclub.com/"  target="_blank">here</a>!
          </AccordionItem>
          <AccordionItem title="Can I submit a hardware project?">
            Sorry, but no. Only digital projects are allowed.
          </AccordionItem>
        </Accordion.Root>
      </section>

      <div class="flex justify-center items-center mt-16">
        <a
          href="https://fruity.fillout.com/rsvp"
          target="_blank"
          class="h-10 flex items-center font-bold bg-accent px-4 rounded-lg duration-100 hover:-translate-y-1 no-underline text-white"
        >
          Click here to RSVP!
        </a>

        <div class="flex flex-col items-center gap-1 mx-8">
          <span class="text-bg-2">|</span>
          <span class="text-muted">and</span>
          <span class="text-bg-2">|</span>
        </div>

        <a
          href="https://hackclub.enterprise.slack.com/archives/C0A6BBW662E"
          target="_blank"
          class="h-10 flex items-center gap-1.5 font-bold bg-accent px-4 rounded-lg duration-100 hover:-translate-y-1 no-underline text-white"
        >
          <iconify-icon icon="mdi:slack" class="text-xl"></iconify-icon>
          <span>Join the Slack!</span>
        </a>
      </div>
    </article>
  </main>

  <a href="https://hackclub.com/" target="_blank">
    <img src="/flag-orpheus-top.svg" alt="Hack Club Logo" class="absolute lg:block lg:left-12 lg:top-0 left-1/2 top-0 lg:translate-x-0 -translate-x-1/2 h-16 hover:rotate-12 duration-100" />
  </a>
</div>
