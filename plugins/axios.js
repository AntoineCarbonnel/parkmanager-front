import https from 'https';

export default function ({$axios, store, redirect, app}) {
  $axios.defaults.httpsAgent = new https.Agent({rejectUnauthorized: false});

  $axios.onRequest(() => {
    $axios.setHeader('Auth', 'Token ' + store.getters.getTokenInformartion)
  })

  $axios.onError(error => {
    if (error.response.status === 401) {
      console.log('error 401')
      store.commit('pushToken', false)
      redirect('login')
    }
  })
}
