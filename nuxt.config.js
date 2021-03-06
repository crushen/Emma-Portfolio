export default {
  mode: 'universal',
  target: 'static',
  head: {
    title: 'Emma Kate Parkinson',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Emma Kate Parkinson's online portfolio." }
    ],
    link: [
      { rel: 'preconnect', href: 'https://www.emmakateparkinson.com' },
      { rel: 'icon', type: 'image/x-icon', href: '/smol.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Bitter:wght@400;700&family=Bungee&display=swap' }
    ],
    htmlAttrs: {
      lang: 'en'
    }
  },
  router: {
    middleware: 'pages',
    scrollBehavior (to) {
      if (to.hash) {
        return window.scrollTo({
          top: document.querySelector(to.hash).offsetTop + window.innerHeight,
          behavior: 'smooth'
        })
      }
      // link for anchors (hash): <nuxt-link :to="{ path: '/', hash:'#about'}">Contact</nuxt-link>
      return window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  },
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module'
  ]
}
