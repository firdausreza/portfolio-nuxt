<template>
  <div :class="`w-full flex sm:flex-col ${project.reverse ? 'flex-row-reverse' : 'flex-row'} items-center mt-8 p-8`">
    <VueSlickCarousel ref="carousel" class="sm:w-full h-full w-2/5 mx-8 rounded-lg" v-bind="settings">
      <img v-for="image in project.images" :key="image" :src="require(`~/assets/image/${image}`)" alt="project image">
    </VueSlickCarousel>
    <div class="text-wrapper w-1/2 sm:w-full flex flex-col mx-8 justify-start sm:mt-8">
      <h3 class="text-2xl font-bold">
        {{ project.title }}
      </h3>
      <p class="text-base text-justify mt-8">
        {{ project.desc }}
      </p>
      <p class="text-base text-justify mt-8">
        <span class="font-bold">Category :</span> {{ project.category }}
      </p>
      <p class="text-base font-bold text-justify mt-8">
        <span class="font-bold">Build With :</span> {{ project.build }}
      </p>
      <a v-if="project.link !== ''" :href="project.link" class="text-red-400 underline mt-8" target="_blank">
        Demo Link
      </a>
    </div>
  </div>
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
