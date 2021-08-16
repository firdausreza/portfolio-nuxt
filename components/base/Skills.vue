<template>
  <div class="w-full flex flex-col items-center mx-auto py-16 rounded-xl bg-dlblue">
    <div class="heading-wrapper flex flex-col justify-center items-center">
      <h1 class="text-5xl font-bold">
        My Skills
      </h1>
      <p class="text-base mt-8">
        I have learned many skills during my studies, some of them are listed below!
      </p>
      <hr class="w-16 border-2 border-lred mt-8">
    </div>

    <div class="sm:w-full md:w-3/4 skill-wrapper p-8 mt-8">
      <div class="w-full flex flex-row justify-center items-center">
        <div class="w-1/4 h-full wrapper flex flex-col justify-start mx-8 p-8 bg-dblue rounded-2xl">
          <font-awesome-icon :icon="['fas', 'laptop-code']" style="font-size: 48px; color: #FF4A4A" />
          <h3 class="text-2xl font-bold mt-8">
            Web Development
          </h3>
          <p class="text-base mt-8">
            Front-end Web Development, Back-end Web Development, Wordpress. Web development are my main interest
          </p>
        </div>
        <div class="w-1/4 h-full wrapper flex flex-col justify-start mx-8 p-8 bg-dblue rounded-2xl">
          <font-awesome-icon :icon="['fab', 'figma']" style="font-size: 48px; color: #FF4A4A" />
          <h3 class="text-2xl font-bold mt-8">
            UI/UX Design
          </h3>
          <p class="text-base mt-8">
            Web UI Design, Mobile UX Design, UX Research, Mostly using Figma for wireframing and building mockups
          </p>
        </div>
        <div class="w-1/4 h-full wrapper flex flex-col justify-start mx-8 p-8 bg-dblue rounded-2xl">
          <font-awesome-icon :icon="['fas', 'mobile-alt']" style="font-size: 48px; color: #FF4A4A" />
          <h3 class="text-2xl font-bold mt-8">
            Mobile Development
          </h3>
          <p class="text-base mt-8">
            Front-end Mobile Development, Back-end Mobile Development, All the development tools are using Android Studio
          </p>
        </div>
      </div>

      <div class="w-full flex flex-row justify-center items-center mt-8">
        <div class="w-1/4 h-full wrapper flex flex-col justify-start mx-8 p-8 bg-dblue rounded-2xl">
          <font-awesome-icon :icon="['fas', 'gamepad']" style="font-size: 48px; color: #FF4A4A" />
          <h3 class="text-2xl font-bold mt-8">
            Game Development
          </h3>
          <p class="text-base mt-8">
            Unity Development, Game Design, 2D Character Design, Most of development are using Unity.
          </p>
        </div>
        <div class="w-1/4 h-full wrapper flex flex-col justify-start mx-8 p-8 bg-dblue rounded-2xl">
          <font-awesome-icon :icon="['fas', 'tools']" style="font-size: 48px; color: #FF4A4A" />
          <h3 class="text-2xl font-bold mt-8">
            Web Apps Testing
          </h3>
          <p class="text-base mt-8">
            Web Functionality Testing, Blackbox Testing, All test are using Selenium Webdriver
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
