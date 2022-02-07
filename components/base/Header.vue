<template>
  <header class="sm:px-12">
    <nav class="max-w-7xl flex flex-col justify-center items-center mx-auto py-8 bg-dblue">
      <h1 class="text-4xl sm:text-2xl font-bold">
        Welcome!
      </h1>
      <div class="w-full flex flex-row justify-center items-center mt-4">
        <nuxt-link :to="{ path: '/', hash:'#about'}" class="hover:text-lred p-2">
          About
        </nuxt-link>
        <nuxt-link :to="{ path: '/', hash:'#skills'}" class="mx-2 cxs:mx-0 hover:text-lred p-2">
          Skills
        </nuxt-link>
        <nuxt-link :to="{ path: '/', hash:'#tools'}" class="mx-2 cxs:mx-0 hover:text-lred p-2">
          Tools
        </nuxt-link>
        <nuxt-link :to="{ path: '/', hash:'#portfolio'}" class="mx-2 cxs:mx-0 hover:text-lred p-2">
          Projects
        </nuxt-link>
        <nuxt-link :to="{ path: '/', hash:'#contact'}" class="hover:text-lred p-2">
          Contact
        </nuxt-link>
      </div>
    </nav>
  </header>
</template>

