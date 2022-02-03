<template>
  <div>
    <Header />
    <main class="relative">
      <section id="intro" class="sm:px-4">
        <Intro />
      </section>
      <section id="about" class="sm:px-4">
        <About />
      </section>
      <section id="skills" class="sm:px-4">
        <Skills />
      </section>
      <section id="tools" class="sm:px-4">
        <Tools />
      </section>
      <section id="portfolio" class="sm:px-4">
        <Projects />
      </section>
<!--      <section id="contact" class="sm:px-4">-->
<!--        <Contact />-->
<!--      </section>-->
    </main>
  </div>
</template>

<script>
import Intro from "~/components/index/Intro"
import About from "~/components/index/About"
import Skills from "~/components/index/Skills"
import Tools from "~/components/index/Tools"
import Projects from "~/components/index/Projects"
import Contact from "~/components/index/Contact"
import Header from "~/components/base/Header"

export default {
  components: {
    Intro,
    About,
    Skills,
    Tools,
    Projects,
    Contact,
    Header
  }
}
</script>
