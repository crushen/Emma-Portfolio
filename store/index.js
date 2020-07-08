export const state = () => ({
  page: {
    name: 'index',
    colour: '#FFE600',
    height: 0
  }
})

export const mutations = {
  updatePage (state, pageName) {
    state.page.name = pageName

    switch (state.page.name) {
      case '/work':
        state.page.colour = '#00A3FF'
        break
      case '/contact':
        state.page.colour = '#FF3F15'
        break
      default:
        state.page.colour = '#FFE600'
    }
  },
  updateHeight (state) {
    state.page.height = document.querySelector('body').clientHeight
  }
}
