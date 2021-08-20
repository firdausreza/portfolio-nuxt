
export const state = () => ({
  projects: [
    {
      id: 1,
      title: 'Jaga Jogja',
      desc: 'Jaga Jogja adalah portal laporan keamanan, kebersihan, dan fasilitas umum untuk mewujudkan Jogja Smart city.',
      category: 'Web Development',
      link: '',
      images: ['jagjog/homepage.png', 'jagjog/daftarlaporan.png', 'jagjog/tentang.png'],
      build: 'HTML5, CSS, Bootstrap 4, Laravel Framework',
      reverse: false
    },
    {
      id: 2,
      title: 'Ez Tourism',
      desc: 'Ez Tourism adalah platform jasa pemesanan oleh-oleh khas Jogja dan menyediakan pelayanan jasa sewa tour guide wisata bagi para wisatawan yang hendak berkeliling menikmati keindahan “kota gudeg” ini untuk meminimalisir kendala kebutuhan dalam berwisata.',
      category: 'Web Development',
      link: '',
      images: ['psi/ez1.png', 'psi/ez2.png', 'psi/ez3.png'],
      build: 'HTML5, CSS, Bootstrap 4, Laravel Framework',
      reverse: true
    },
    {
      id: 3,
      title: 'Escape from Area 51',
      desc: 'Escape from Area 51 is a simple algorithm and problem solving game',
      category: 'Game Development',
      link: 'https://igooose.itch.io/escape-from-area-51',
      images: ['efa51/game1.png', 'efa51/game2.png', 'efa51/game3.png'],
      build: 'Unity Engine, Blender, Unity WebGL',
      reverse: false
    },
    {
      id: 4,
      title: 'Ongkirin',
      desc: 'Ongkirin is a mobile friendly web apps to help micro and mid level enterpreneur to organize and manage their delivery services (Terminated Project)',
      category: 'Web Development',
      link: 'https://ongkirin.vercel.app/',
      images: ['ongkirin/ongkirin1.png', 'ongkirin/ongkirin2.png', 'ongkirin/ongkirin3.png'],
      build: 'Vue.js, Nuxt.js, Tailwind CSS',
      reverse: true
    }
  ]
})

export const getters = {
  get (state) {
    return state.projects
  }
}
