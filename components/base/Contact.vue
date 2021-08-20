<template>
  <div class="w-full flex flex-col mx-auto px-8 py-16 bg-dblue">
    <div class="heading-wrapper flex flex-col justify-center items-center">
      <h1 class="text-5xl font-bold">
        Contact
      </h1>
      <p class="text-base text-center mt-8">
        All of my contact info and social media, get connected with me now!
      </p>
      <hr class="w-16 border-2 border-lred mt-8">
    </div>
    <div class="social-wrapper flex flex-row sm:flex-col justify-center items-center mt-8">
      <a href="https://www.instagram.com/mhmmdrezalif/" target="_blank" class="wrapper flex flex-row justify-center px-8 py-4 bg-dlblue rounded-lg ml-8 sm:mt-8 sm:mx-auto">
        <font-awesome-icon :icon="['fab', 'instagram']" style="font-size: 48px" />
        <div class="flex flex-col ml-4">
          <p class="text-base font-bold">
            Instagram
          </p>
          <p class="text-base">
            @mhmmdrezalif
          </p>
        </div>
      </a>
      <a href="https://www.linkedin.com/in/rezafirdaus080/" target="_blank" class="wrapper flex flex-row justify-center px-8 py-4 bg-dlblue rounded-lg ml-8 sm:mt-8 sm:mx-auto">
        <font-awesome-icon :icon="['fab', 'linkedin']" style="font-size: 48px" />
        <div class="flex flex-col ml-4">
          <p class="text-base font-bold">
            LinkedIn
          </p>
          <p class="text-base">
            Reza Firdaus
          </p>
        </div>
      </a>
      <a href="mailto:mhmmdrezalif@gmail.com" target="_blank" class="wrapper flex flex-row justify-center px-8 py-4 bg-dlblue rounded-lg ml-8 sm:mt-8 sm:mx-auto">
        <font-awesome-icon :icon="['fas', 'envelope']" style="font-size: 48px" />
        <div class="flex flex-col ml-4">
          <p class="text-base font-bold">
            Email
          </p>
          <p class="text-base">
            mhmmdrezalif@gmail.com
          </p>
        </div>
      </a>
      <a href="https://wa.link/zo8m24" target="_blank" class="wrapper flex flex-row justify-center px-8 py-4 bg-dlblue rounded-lg ml-8 sm:mt-8 sm:mx-auto">
        <font-awesome-icon :icon="['fab', 'whatsapp']" style="font-size: 48px" />
        <div class="flex flex-col ml-4">
          <p class="text-base font-bold">
            Whatsapp
          </p>
          <p class="text-base">
            +62 877-3685-4821
          </p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
