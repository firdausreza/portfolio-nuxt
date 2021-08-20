<template>
  <div class="flex w-full h-full sm:flex-col md:flex-row justify-center items-center mx-auto px-16 pt-8 rounded-xl bg-dlblue">
    <div class="wrapper sm:w-full md:w-1/2 sm:items-center sm:text-center flex flex-col justify-start mx-8 py-8">
      <div class="icon-wrapper flex flex-row">
        <a href="https://github.com/firdausreza" target="_blank">
          <font-awesome-icon :icon="['fab', 'github']" style="font-size: 48px" />
        </a>
        <a href="https://www.linkedin.com/in/rezafirdaus080/" target="_blank" class="ml-8">
          <font-awesome-icon :icon="['fab', 'linkedin']" style="font-size: 48px" />
        </a>
        <a href="https://www.instagram.com/mhmmdrezalif/" target="_blank" class="ml-8">
          <font-awesome-icon :icon="['fab', 'instagram']" style="font-size: 48px" />
        </a>
      </div>
      <h1 class="text-5xl font-bold mt-8">
        Hi! I'm Reza Firdaus
      </h1>
      <p class="sm:text-lg text-2xl mt-8">
        I'm highly interested in Front-end Web Development, but also experienced in Back-end Development and Game Development
      </p>
    </div>
    <img class="mx-8 sm:w-full w-1/4" src="~/assets/image/reza2-nobg.png" alt="Gambar reza">
  </div>
</template>

<script>
export default {

}
</script>
