import * as types from './mutation-types'

const mutations = {
  [types.TOKEN] (state, data) {
    localStorage.token = data
    state.token = data
  },
  [types.LOGOUT] (state) {
    localStorage.removeItem('token')
    state.token = null
  },
  [types.USER] (state, data) {
    state.user = data
  },
  [types.TITLE] (state, data) {
    state.title = data
  }
}

export default mutations