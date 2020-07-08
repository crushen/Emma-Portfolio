// import projects from '../static/projects.json';

export const state = () => ({
  page: {
    name: 'index',
    height: 0
  }
  // page: 'index',
  // pageHeight: 0
})

export const mutations = {
  updatePage (state, pageName) {
    state.page.name = pageName
  },
  updateHeight (state) {
    state.page.height = document.querySelector('body').clientHeight
  }
}
