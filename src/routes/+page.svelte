<script lang="ts">
  import HackClubFlag from "$components/HackClubFlag.svelte";
  import Footer from "$components/Footer.svelte";
  import { Accordion } from "bits-ui";
  import AccordionItem from "$components/AccordionItem.svelte";
  import Helper from "$components/Helper.svelte";

  // TODO: make this better (open all accordions)
  const accordionTitles = [
    "Can I submit multiple projects?",
    "How do I track my time?",
    "Can I submit a hardware project?",
    "Which DAWs are available to buy from the shop?",
  ];
</script>

<div class="flex justify-center h-full">
  <main class="size-full">
    <div class="absolute left-0 -top-2 w-full h-12 bg-repeat rotate-180 bg-contain bg-[url('images/waves-pattern-orange.svg')]"></div>

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
          <!-- TODO: put in giant cloud -->
          <h1 class="flex gap-1 items-center bg-stripes-static px-9 py-7 before:rounded-[3rem] before:corner-squircle">
            <!-- TODO: hovering or spinning logo maybe? -->
            <img src="/images/logo-outline.png" alt="Fruity Logo" class="size-18 animate-wobble">
            <span class="text-text text-7xl font-black">fruity!</span>
          </h1>
          <p class="text-2xl font-bold float-right">by Hack Club</p>
        </div>

        <Helper lines={[
          "welcome to fruity, a hack club ysws all about music!",
          "i'm fl-chan! your guide to all things fruity :D",
          "this website is still under construction, so check back later for more updates!"
        ]}/>
      </div>
    </section>

    <!-- description -->
    <div class="w-full h-12 bg-repeat bg-contain bg-[url('images/waves-pattern.svg')]"></div>
    <section class="bg-surface px-10 py-10 pb-16 flex justify-center">
      <div class="w-6xl">
        <h2 class="font-extrabold mb-10">( what is this? )</h2>

        <div class="flex gap-2">
          <div class="corner-squircle p-10 flex flex-col gap-4 text-center justify-center items-center rounded-[3rem] bg-secondary border-8 border-secondary-dim size-128 -rotate-6">
            <h3 class="font-bold text-xl">you ship a project:</h3>
            <p>Any digital project related to music! Could be a website, app, game, etc! Some ideas include:</p>
            <ul class="list-disc list-inside">
              <li>A rhythm game</li>
              <li>Last.fm integration</li>
              <li>Beat maker</li>
              <li>Or whatever else you think of!</li>
            </ul>
          </div>
          <!-- <iconify-icon icon="mingcute:arrow-right-fill" class="text-2xl"></iconify-icon> -->
          <div class="corner-squircle p-10 flex flex-col gap-4 text-center justify-center items-center rounded-[3rem] bg-primary border-8 border-primary-dim size-128 rotate-6">
            <h3 class="font-bold text-xl">we ship a DAW:</h3>
            <p>Get a <a href="https://en.wikipedia.org/wiki/Digital_audio_workstation" class="underline decoration-2 font-bold">DAW</a> (digital audio workstation) of your choice to start your music creation journey!</p>
          </div>
        </div>
      </div>
    </section>
    <div class="w-full h-12 bg-repeat rotate-180 bg-contain bg-[url('images/waves-pattern.svg')]"></div>

    <!-- shop preview -->
    <section class="p-10 py-32 flex justify-center">
      <div class="w-6xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum saepe, libero facere quod voluptas, optio error voluptatibus fugit eligendi autem adipisci? Vel et tempora enim excepturi ab provident asperiores fugiat.
        Velit, amet fugit? Alias numquam magnam blanditiis modi. Dicta, quas possimus nobis alias deserunt accusantium soluta minima cum a sit odio saepe excepturi officiis facere vitae natus fugiat placeat iusto!
        In voluptas dolorem blanditiis minima enim sequi optio eveniet. Dolorem consequatur iure perferendis. Molestiae repudiandae expedita tempore, quae neque harum velit asperiores nesciunt adipisci doloribus fugiat nisi similique laboriosam accusantium.
        Atque corporis optio corrupti, nostrum obcaecati natus illum similique impedit quisquam quo voluptate cum quasi hic veniam, magnam et vitae odio praesentium minima ex fugit expedita! Fugit dolore animi quis?
        Doloribus consectetur sunt culpa necessitatibus blanditiis et iusto qui perferendis eaque, id, eum inventore? Explicabo enim et itaque voluptatum quis libero ducimus eaque saepe, illo modi, quidem doloremque ullam accusamus.
        Corporis, rem similique? Nemo sapiente distinctio, accusantium veritatis laudantium, dolorem autem aperiam ipsa cumque commodi eos voluptatibus quia accusamus maiores nisi, consequuntur modi error odio nam inventore exercitationem quae? Animi.
        Quaerat doloribus ducimus perspiciatis expedita neque maiores quo provident placeat mollitia enim, corporis, eum porro molestiae iure debitis itaque est earum nihil voluptatum. Perspiciatis adipisci exercitationem at numquam totam pariatur.
        Odit repellendus nesciunt delectus rerum quisquam aliquid eum magni, eius repellat sunt. Enim in suscipit optio atque rem nobis maxime odit nostrum provident ut dolores quo, quaerat illum? Debitis, voluptas.
        Rerum aliquam quo, totam dolores voluptate cumque ex corrupti modi earum repellat perferendis! Soluta tenetur amet alias ab? Repellat minus sed cumque voluptas? At, id animi expedita sunt ad libero.
        Nostrum nisi harum repellat ipsam nesciunt consectetur libero provident illum consequatur, cum quo facilis laudantium sequi ea fugiat mollitia, sunt magni? Voluptatem, eos quis! Sequi omnis aut ex repellat voluptatum?
      </div>
    </section>

    <!-- faq -->
    <div class="w-full h-12 bg-repeat bg-contain bg-[url('images/waves-pattern-orange.svg')]"></div>
    <section class="bg-primary px-10 py-4 flex justify-center">
      <div class="w-6xl">
        <h2 class="font-extrabold mb-10">( frequently asked questions )</h2>

        <Accordion.Root value={accordionTitles} type="multiple" class="w-full space-y-2">
          <AccordionItem title="Can I submit multiple projects?">
            No. You may only submit one project per person.
          </AccordionItem>
          <AccordionItem title="How do I track my time?">
            Use Hackatime, an editor extension that tracks the time you spend coding. You can install it <a href="https://hackatime.hackclub.com/" target="_blank" class="underline decoration-2 font-bold">here</a>!
          </AccordionItem>
          <AccordionItem title="Can I submit a hardware project?">
            Sorry, only digital projects are allowed.
          </AccordionItem>
          <AccordionItem title="Which DAWs are available to buy from the shop?">
            You can submit a DAW to the wishlist <a href="https://fruity.fillout.com/daw" target="_blank" class="underline decoration-2 font-bold">here</a>.
          </AccordionItem>
        </Accordion.Root>
      </div>
    </section>
    <div class="w-full h-12 bg-repeat rotate-180 bg-contain bg-[url('images/waves-pattern-orange.svg')]"></div>

    <Footer />
  </main>

  <HackClubFlag />
</div>
