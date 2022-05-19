export default {
  pushUserInfos(state, infos) {
    state.user = infos
  },
  pushToken(state, token) {
    state.user.token = token
  },
  pushUserId(state, id) {
    state.user.id = id
  }
}
