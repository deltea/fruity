<script lang="ts">
  import { daws } from "$lib/daws";
</script>

<div class="flex justify-center h-full py-8 sm:px-8 px-6">
  <main class="w-3xl space-y-16 mb-16">
    <header class="flex justify-between">
      <div class="flex sm:items-end items-center sm:gap-2 sm:flex-row flex-col">
        <a href="/" class="text-primary no-underline inline-flex items-baseline text-3xl font-black group">
          <img src="/logo-outline.png" alt="Fruity Logo" class="h-8 translate-y-1 group-hover:rotate-12 duration-100">
          <span>Fruity!</span>
        </a>
        <span>by Hack Club</span>
      </div>

      <a href="https://fruity.fillout.com/rsvp" target="_blank" class="h-10 flex items-center font-bold bg-stripes px-4 rounded-lg duration-100 hover:-translate-y-1 no-underline text-white">
        Sign Up!
      </a>
    </header>

    <h1 class="text-center font-bold text-4xl">The Shope</h1>

    <div class="grid gap-6 grid-cols-2">
      {#each daws as daw}
        <div class="flex flex-col items-center gap-4 p-4 bg-bg-surface corner-squircle rounded-3xl hover:shadow-2xl hover:-translate-y-1 duration-100">
          <div class="bg-cover bg-center corner-squircle rounded-3xl w-full h-52" style:background-image="url('{daw.image}')"></div>
          <div class="flex items-center justify-between w-full">
            <h3 class="text-white font-bold text-xl">{daw.name}</h3>
            <p class="flex items-center justify-center gap-1 text-white">
              <iconify-icon icon="mingcute:music-2-fill" class="text-xl"></iconify-icon>
              <span>{daw.price}</span>
            </p>
          </div>
          <p class="text-text-dim">{daw.description}</p>
          <div class="flex gap-3 w-full">
            <a href={daw.url} target="_blank" class="flex-1 h-10 flex items-center justify-center font-bold bg-stripes bg-stripes-green px-4 rounded-lg duration-100 hover:-translate-y-1 text-white">About</a>
            <a href="#" class="flex-1 h-10 flex items-center justify-center font-bold bg-stripes px-4 rounded-lg duration-100 hover:-translate-y-1 text-white">
              Buy for
              <p class="inline-flex items-center justify-center gap-0 text-white">
                <iconify-icon icon="mingcute:music-2-fill" class="text-lg"></iconify-icon>
                <span>{daw.price}</span>
              </p>
            </a>
          </div>
        </div>
      {/each}
    </div>
  </main>
</div>
