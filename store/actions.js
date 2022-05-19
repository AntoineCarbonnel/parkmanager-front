export default {
  nuxtServerInit({commit, dispatch, getters}, {app}) {
    commit('pushToken', app.$cookies.get('token'))
    commit('pushUserId', app.$cookies.get('userId'))
  },

  logIn({commit, dispatch}, form) {
    return new Promise((resolve, reject) => {
      this.$axios.$post('user/login', form)
        .then(res => {
          commit('pushUserInfos', res.data)
          const token = res.token

          this.$axios.setHeader('Auth', 'Bearer ' + token)

          this.$cookies.set('token', token, {
            path: '/',
            maxAge: 60 * 60 * 24
          })
          this.$cookies.set('userId', res.data.id, {
            path: '/',
            maxAge: 60 * 60 * 24
          })
          resolve(res)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
}
