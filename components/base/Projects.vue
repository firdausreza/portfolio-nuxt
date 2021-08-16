<template>
  <div class="w-full flex flex-col mx-auto px-8 py-16 bg-dlblue">
    <div class="heading-wrapper flex flex-col justify-center items-center">
      <h1 class="text-5xl font-bold">
        Portfolio Showcase
      </h1>
      <p class="text-base mt-8">
        Below are the big projects i worked on, feel free to check it out!
      </p>
      <hr class="w-16 border-2 border-lred mt-8">
    </div>
    <Showcase v-for="project in projects" :key="project.id" :project="project" />
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
