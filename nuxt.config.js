export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'parkmanager-front',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: ''}
    ]
  },

  server: {
    host: '0.0.0.0'
  },

  publicRuntimeConfig: {
    API_URL: process.env.API_URL
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/main'
  ],

  styleResources: {
    // your settings here
    scss: ['./assets/scss/_variables.scss']
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources', // Doc: https://github.com/nuxt-community/style-resources-module
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios', // https://go.nuxtjs.dev/axios
    'cookie-universal-nuxt', // Doc: https://github.com/microcipcip/cookie-universal/tree/master/packages/cookie-universal-nuxt#readme

  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.API_URL
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
