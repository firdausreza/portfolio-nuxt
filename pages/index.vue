<template>
  <div>
    <Header />
    <main>
      <section id="intro" class="px-4 bg-jar">
        <Intro />
      </section>
      <section id="about" class="px-4">
        <About />
      </section>
      <section id="skills" class="px-4">
        <Skills />
      </section>
      <section id="portfolio" class="px-4">
        <Projects />
      </section>
    </main>
    <Footer />
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
import Footer from "~/components/base/Footer"

export default {
  components: {
    Intro,
    About,
    Skills,
    Tools,
    Projects,
    Contact,
    Header,
    Footer
  }
}
</script>

<style>
.bg-jar {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1920' height='600' preserveAspectRatio='none' viewBox='0 0 1920 600'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1194%26quot%3b)' fill='none'%3e%3cpath d='M43.2133152424973 521.2568785898018L183.23659385150285 605.5730799144089 188.22305394478525 462.7795456980243z' fill='rgba(36%2c 38%2c 59%2c 1)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M523.1478790889887 350.40658994070793L656.8636160350358 447.5567594955887 754.0137855899166 313.84102254954166 620.2980486438695 216.6908529946609z' fill='rgba(36%2c 38%2c 59%2c 1)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M140.44 92.14 a140.47 140.47 0 1 0 280.94 0 a140.47 140.47 0 1 0 -280.94 0z' fill='rgba(36%2c 38%2c 59%2c 1)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1427.1708752190284 254.99043634378313L1432.8017397114227 364.42921293044583 1514.0390227431392 313.66652453154245z' fill='rgba(36%2c 38%2c 59%2c 1)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1837.1981001383456 664.8321107701988L1898.3392501859043 563.0761492187322 1796.5832886344378 501.93499917117344 1735.442138586879 603.69096072264z' fill='rgba(36%2c 38%2c 59%2c 1)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M731.1051249601784-19.577129872067914L757.1644126713842 167.13528773132109 888.7779775663865 67.95735285622513z' fill='rgba(36%2c 38%2c 59%2c 1)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1507.1797494299533 177.30231272313705L1415.775880301634 46.764059219011074 1285.2376267975083 138.16792834733022 1376.6414959258273 268.7061818514562z' fill='rgba(36%2c 38%2c 59%2c 1)' class='triangle-float1'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1194'%3e%3crect width='1920' height='600' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
