// import projects from './static/projects.json';

// let dynamicRoutes = () => {
//  return new Promise(resolve => {
//    resolve(projects.map(item => `work/${item.slug}`))
//  })
// }

export default {
  mode: 'universal',
  target: 'server',
  head: {
    title: 'Emma Kate Parkinson',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Emma Kate Parkinson's online portfolio." }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Bitter:wght@400;700&family=Bungee&display=swap' }
    ]
  },
  router: {
    middleware: 'pages'
  },
  // generate: {
  //   routes: dynamicRoutes
  // },
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module'
  ],
  build: {
    extend (config, ctx) {
    }
  }
}
