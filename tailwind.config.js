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
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
