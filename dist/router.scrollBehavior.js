

export default function(to) {
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
