// import projects from '../static/projects.json';

export const state = () => ({
  page: 'index',
  pageHeight: 0
})

export const mutations = {
  updatePage (state, pageName) {
    state.page = pageName
  },
  updateHeight (state) {
    state.pageHeight = document.querySelector('body').clientHeight
  }
}
