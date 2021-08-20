<template>
  <div class="w-full flex flex-col items-center mx-auto px-16 pt-8 rounded-xl bg-dlblue">
    <div class="heading-wrapper text-center flex flex-col justify-center items-center px-8">
      <h1 class="text-5xl font-bold">
        Portfolio Showcase
      </h1>
      <p class="text-base mt-8">
        Below are the big projects i worked on, feel free to check it out!
      </p>
      <hr class="w-16 border-2 border-lred mt-8">
    </div>

    <div class="w-full skill-wrapper md:p-8">
      <Showcase v-for="project in projects" :key="project.id" :project="project" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    projects: 'projects/get'
  })
}
</script>
