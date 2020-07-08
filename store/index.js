// import projects from '../static/projects.json';

export const state = () => ({
  page: 'index',
  pageHeight: null
})

export const mutations = {
  updatePage (state, pageName) {
    state.page = pageName
  },
  updateHeight (state) {
    state.pageHeight = document.querySelector('body').clientHeight
  }
}
