<script lang="ts">
  import FaqAccordion from "$components/FaqAccordion.svelte";
</script>

<div class="flex justify-center h-full py-8 sm:px-8 px-6">
  <div class="w-2xl">
    <div class="flex justify-between mb-16">
      <div class="flex sm:items-end items-center sm:gap-2 sm:flex-row flex-col">
        <span class="text-accent inline-flex items-baseline text-3xl font-black">
          <img src="/logo-outline.png" alt="Fruity Logo" class="h-8">
          Fruity!
        </span>
        <span class="">by Hack Club</span>
      </div>

      <a href="https://fruity.fillout.com/rsvp" target="_blank" class="h-10 flex items-center font-extrabold bg-accent px-4 rounded-lg duration-100 hover:-translate-y-1">
        Sign Up!
      </a>
    </div>

    <article>
      Do <i>you</i> like music? (yes you do)
      Are <i>you</i> interested in making music?
      Have <i>you</i> heard of FL Studio?
      If you answered yes to all the above (or not), then this YSWS is for you!

      <div class="text-center my-6">
        presenting...
        <span class="font-extrabold text-2xl block">Fruity!</span>
      </div>

      A new hack club YSWS (you ship we ship) focused on digital projects related to music! Make a music related coding project, get FL Studio!

      <h3 class="font-extrabold text-2xl mb-4 mt-6">You Ship</h3>

      Any digital project related to music! Could be a website, app, game, etc! Some ideas include:

      <ul class="list-disc list-inside">
        <li>A rhythm game</li>
        <li>Last.fm integration</li>
        <li>Beat maker</li>
        <li>Or whatever else you think of!</li>
      </ul>

      <h3 class="font-extrabold text-2xl mb-4 mt-6">We Ship</h3>

      Get
      <a class="underline decoration-2 text-accent" href="https://www.image-line.com/" target="_blank">FL Studio</a>
      (Fruity Edition) to start your music creation journey! (we might even be able to implement some kind of shop where you can buy plugins!)

      <!-- <h3 class="font-extrabold text-2xl mb-4 mt-6">FAQ</h3>

      <FaqAccordion /> -->

      <div class="flex justify-center mt-8">
        <a
          href="https://fruity.fillout.com/rsvp"
          target="_blank"
          class="h-12 inline-flex items-center font-extrabold bg-accent px-6 rounded-lg duration-100 hover:-translate-y-1"
        >
          RSVP now!
        </a>
      </div>
    </article>
  </div>

  <a href="https://hackclub.com/" target="_blank">
    <img src="/flag-orpheus-top.svg" alt="Hack Club Logo" class="sm:absolute sm:block hidden left-12 top-0 h-16 hover:rotate-12 duration-100" />
  </a>
</div>
