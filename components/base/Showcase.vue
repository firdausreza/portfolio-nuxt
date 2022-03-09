<template>
  <article class="w-auto flex flex-col items-center">
    <section class="w-full h-auto">
      <img :src="require(`~/assets/image/projects/${project.image}`)" alt="project image" class="w-full h-full rounded-t-2xl">
    </section>
    <section class="w-full flex-1 p-4 rounded-b-2xl bg-dblue">
      <section class="w-full flex flex-wrap">
        <span v-for="tech in project.build" :key="tech" class="py-1.5 px-2 rounded-xl bg-lred text-white text-[12px] mt-2 mr-2">{{ tech }}</span>
      </section>
      <h1 class="text-xl font-bold mt-2">
        {{ project.title }}
      </h1>
      <a v-if="project.link !== ''" :href="project.link" class="text-red-400 underline mt-8" target="_blank">
        Link
      </a>
    </section>
  </article>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: { VueSlickCarousel },
  props: {
    project: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      settings: {
        dots: true,
        infinite: true,
        slidesToScroll: 1,
        rtl: true,
        adaptiveHeight: true
      }
    }
  }
}
</script>
