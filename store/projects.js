
export const state = () => ({
  projects: [
    {
      id: 1,
      title: 'Dikadoin Dong',
      link: 'https://qitadev.github.io/dikadoin-dong/',
      image: 'dikadoindong.png',
      build: ['ReactJS', 'Gatsby', 'Google Sheets DB']
    },
    {
      id: 2,
      title: 'RA Yasdjanur',
      link: 'https://rayasdjanur.sch.id/',
      image: 'rayasdjanur.png',
      build: ['VueJS', 'NuxtJS']
    },
    {
      id: 3,
      title: 'Bingung Berbagi',
      link: 'https://qitadev.github.io/bingung-berbagi/',
      image: 'bingungberbagi.png',
      build: ['VueJS', 'NuxtJS']
    },
    {
      id: 4,
      title: 'JALA Web Apps',
      link: 'https://app.jala.tech/',
      image: 'jala.png',
      build: ['VueJS', 'Laravel']
    }
  ]
})

export const getters = {
  get (state) {
    return state.projects
  }
}
