// import projects from '../static/projects.json';

export const state = () => ({
  page: 'index'
  // projects: projects
})

export const mutations = {
  updatePage (state, pageName) {
    state.page = pageName
  }
}
