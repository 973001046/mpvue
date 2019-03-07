import * as types from './mutation-types'

const mutations = {
  [types.CHANGE_AGE] (state) {
    state.age = 20
  },
  [types.CHANGE_NAME] (state) {
    state.name = 'a new name'
  },
  [types.AGE_ADD] (state) {
    state.age = 168
  }
}

export default mutations
