import * as types from './mutation-types'

export const login = function ({commit, state}, {user, token}) {
  commit(types.TOKEN, token)
  commit(types.USER, user)
}
