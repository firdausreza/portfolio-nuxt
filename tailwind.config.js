module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dblue: '#1F2235',
        dlblue: '#24263B',
        lred: '#FF4A57'
      },
      width: {
        200: '200px',
        300: '300px',
        400: '400px',
        500: '500px'
      },
      height: {
        200: '200px',
        300: '300px',
        400: '400px',
        500: '500px'
      },
      screens: {
        sm: { max: '767px' }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
