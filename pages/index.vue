<template>
  <div>
    <header class="sticky top-0 z-50 ">
      <nav class="w-full flex flex-col justify-center items-center mx-auto py-8 bg-dblue">
        <h1 class="text-5xl font-bold">
          Reza Firdaus
        </h1>
        <div class="flex flex-row justify-center items-center mt-8">
          <nuxt-link :to="{ path: '/', hash:'#about'}" class="hover:text-lred">
            About
          </nuxt-link>
          <nuxt-link :to="{ path: '/', hash:'#skills'}" class="ml-8 hover:text-lred">
            Skills
          </nuxt-link>
          <nuxt-link :to="{ path: '/', hash:'#tools'}" class="ml-8 hover:text-lred">
            Tools
          </nuxt-link>
          <nuxt-link :to="{ path: '/', hash:'#portfolio'}" class="ml-8 hover:text-lred">
            Projects
          </nuxt-link>
          <nuxt-link :to="{ path: '/', hash:'#contact'}" class="ml-8 hover:text-lred">
            Contact
          </nuxt-link>
        </div>
      </nav>
    </header>
    <main class="relative">
      <section id="intro" class="px-8 sm:px-4">
        <Intro />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills" class="px-8 sm:px-4">
        <Skills />
      </section>
      <section id="tools">
        <Tools />
      </section>
      <section id="portfolio">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  </div>
</template>

<script>
export default {}
</script>
