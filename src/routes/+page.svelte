<script lang="ts">
  import HackClubFlag from "$components/HackClubFlag.svelte";
  import Footer from "$components/Footer.svelte";
  import { Accordion } from "bits-ui";
  import AccordionItem from "$components/AccordionItem.svelte";
  import Helper from "$components/Helper.svelte";
  import AnimatedDialogue from "$components/AnimatedDialogue.svelte";
</script>

<div class="flex justify-center h-full">
  <main class="size-full">
    <div class="absolute left-0 -top-2 w-full h-12 bg-repeat rotate-180 bg-contain bg-[url('/images/waves-pattern-orange.svg')]"></div>

    <header class="flex gap-4 w-full absolute top-0 left-0 justify-end px-10 pt-20">
      <a
        href="https://fruity.fillout.com/rsvp"
        target="_blank"
        class="h-10 gap-2 flex items-center font-bold before:rounded-3xl before:corner-squircle bg-stripes px-4 duration-100 hover:-translate-y-1 text-white"
      >
        <iconify-icon icon="mingcute:user-2-fill" class="text-lg"></iconify-icon>
        <span>sign up!</span>
      </a>
      <a
        href="https://fruity.fillout.com/rsvp"
        target="_blank"
        class="h-10 gap-2 flex items-center font-bold before:rounded-3xl before:corner-squircle bg-stripes bg-stripes-green px-4 duration-100 hover:-translate-y-1 text-white"
      >
        <iconify-icon icon="mdi:slack" class="text-lg"></iconify-icon>
        <span>join the slack</span>
      </a>
    </header>

    <!-- hero -->
    <section class="h-screen flex flex-col justify-center items-center">
      <div class="w-4xl flex flex-col items-center">
        <div class="space-y-4 mb-32">
          <p class="text-2xl font-bold">presenting...</p>
          <h1 class="flex gap-1 items-center bg-stripes-static px-9 py-7 before:rounded-[3rem] before:corner-squircle hover:scale-105 duration-200">
            <img src="/images/logo-outline.png" alt="Fruity Logo" class="size-18 animate-wobble">
            <span class="text-text text-7xl font-black">fruity!</span>
          </h1>
          <p class="text-2xl font-bold float-right">by Hack Club</p>
        </div>

        <AnimatedDialogue color="var(--color-surface)">
          <p class="text-text text-center font-bold text-lg">
            a new hack club ysws!<br>
            make a music related project, and get a daw!
          </p>
        </AnimatedDialogue>
      </div>
    </section>

    <!-- description -->
    <div class="w-full h-12 bg-repeat bg-contain bg-[url('/images/waves-pattern.svg')]"></div>
    <section class="bg-surface px-10 py-10 pb-16 flex justify-center">
      <div class="w-6xl">
        <h2 class="font-extrabold mb-10">( what is this? )</h2>

        <div class="flex gap-2 justify-center relative">
          <div class="corner-squircle p-10 flex flex-col text-center rounded-[3rem] bg-primary-dim size-112 -rotate-6 hover:-rotate-10 duration-200">
            <h3 class="font-bold text-xl bg-primary corner-squircle px-6 py-4 rounded-3xl">you ship a project!</h3>
            <div class="grow flex flex-col gap-8 justify-center p-10">
              <p>It can be any digital project related to music, like a website, app, game, etc! Some ideas include:</p>
              <ul class="list-disc list-inside">
                <li>A rhythm game</li>
                <li><a href="https://last.fm" class="underline decoration-2 font-bold">Last.fm</a> integration</li>
                <li>Beat maker</li>
                <li>Or whatever else you think of!</li>
              </ul>
            </div>
          </div>

          <img src="/images/arrow.svg" alt="Loopy Arrow" class="absolute bottom-0 left-1/2 -translate-x-1/2 h-16 z-10">

          <div class="corner-squircle p-10 flex flex-col text-center rounded-[3rem] bg-secondary-dim size-112 rotate-6 hover:rotate-10 duration-200">
            <h3 class="font-bold text-xl bg-secondary corner-squircle px-6 py-4 rounded-3xl">we ship you a daw!</h3>
            <div class="grow flex flex-col gap-8 justify-center p-10">
              <p>Get a <a href="https://en.wikipedia.org/wiki/Digital_audio_workstation" class="underline decoration-2 font-bold">DAW</a> (digital audio workstation) of your choice to start your music creation journey! For example:</p>
              <ul class="list-disc list-inside">
                <li>FL Studio</li>
                <li>Logic Pro</li>
                <li>Beatwig Studio</li>
                <li>Ableton Live</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="w-full h-12 bg-repeat rotate-180 bg-contain bg-[url('/images/waves-pattern.svg')]"></div>

    <!-- shop preview -->
    <section class="p-10 py-32 flex justify-center">
      <div class="w-6xl">
        <Helper lines={[
          "yo whats up",
          "welcome to fruity, a hack club ysws all about music!",
          "i'm fl-chan! your guide to all things fruity :D",
          "this website is still under construction, so check back later for more updates!"
        ]}/>
      </div>
    </section>

    <!-- faq -->
    <div class="w-full h-12 bg-repeat bg-contain bg-[url('/images/waves-pattern-orange.svg')]"></div>
    <section class="bg-primary px-10 py-4 flex justify-center">
      <div class="w-6xl">
        <h2 class="font-extrabold mb-10">( frequently asked questions )</h2>
        <!-- TODO: make this better (open all accordions) -->
        <Accordion.Root
          value={Array.from({ length: 5 }, (_, i) => i.toString())}
          type="multiple"
          class="w-full space-y-2"
        >
          <AccordionItem id="0" title="When will this start?">
            Probably sometime in March, date still undecided.
          </AccordionItem>
          <AccordionItem id="1" title="Can I submit multiple projects?">
            No. You may only submit one project per person.
          </AccordionItem>
          <AccordionItem id="2" title="How do I track my time?">
            Use Hackatime, an editor extension that tracks the time you spend coding. You can install it <a href="https://hackatime.hackclub.com/" target="_blank" class="underline decoration-2 font-bold">here</a>!
          </AccordionItem>
          <AccordionItem id="3" title="Can I submit a hardware project?">
            Sorry, only digital projects are allowed.
          </AccordionItem>
          <AccordionItem id="4" title="Which DAWs are available to buy from the shop?">
            You can submit a DAW to the wishlist <a href="https://fruity.fillout.com/daw" target="_blank" class="underline decoration-2 font-bold">here</a>.
          </AccordionItem>
        </Accordion.Root>
      </div>
    </section>
    <div class="w-full h-12 bg-repeat rotate-180 bg-contain bg-[url('/images/waves-pattern-orange.svg')]"></div>

    <Footer />
  </main>

  <HackClubFlag />
</div>
