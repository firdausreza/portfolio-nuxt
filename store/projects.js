
export const state = () => ({
  projects: [
    {
      id: 1,
      title: 'Jaga Jogja',
      desc: 'Jaga Jogja adalah portal laporan keamanan, kebersihan, dan fasilitas umum untuk mewujudkan Jogja Smart city.',
      category: 'Web Development',
      images: ['jagjog/homepage.png', 'jagjog/daftarlaporan.png', 'jagjog/tentang.png'],
      build: 'HTML5, CSS, Bootstrap 4, Laravel Framework',
      reverse: false
    },
    {
      id: 2,
      title: 'Ez Tourism',
      desc: 'Ez Tourism adalah platform jasa pemesanan oleh-oleh khas Jogja dan menyediakan pelayanan jasa sewa tour guide wisata bagi para wisatawan yang hendak berkeliling menikmati keindahan “kota gudeg” ini untuk meminimalisir kendala kebutuhan dalam berwisata.',
      category: 'Web Development',
      images: ['psi/ez1.png', 'psi/ez2.png', 'psi/ez3.png'],
      build: 'HTML5, CSS, Bootstrap 4, Laravel Framework',
      reverse: true
    }
  ]
})

export const getters = {
  get (state) {
    return state.projects
  }
}
