import colors from 'vuetify/es5/util/colors'

export default {
  router: {
    base: '/ultimato/'
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s',
    title: 'X-GREEN: O oculto será revelado!',
    htmlAttrs: {
      lang: 'pt-br'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Saiba como lucrar com investimentos esportivos e como a nossa metodologia aterrorizou o mercado e vai transformara sua vida!' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'msapplication-TileImage', content: 'favicon/ms-icon-144x144.png' },
      { name: 'theme-color', content: '#000000' }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes:'57x57', href: 'favicon/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes:'60x60', href: 'favicon/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes:'72x72', href: 'favicon/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes:'76x76', href: 'favicon/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes:'114x114', href: 'favicon/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes:'120x120', href: 'favicon/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes:'144x144', href: 'favicon/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes:'152x152', href: 'favicon/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes:'180x180', href: 'favicon/apple-icon-180x180.png' },
      { rel: 'icon', type: 'image/png', sizes:'192x192', href: 'favicon/android-icon-192x192.png' },
      { rel: 'icon', type: 'image/png', sizes:'32x32', href: 'favicon/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes:'96x96', href: 'favicon/favicon-96x96.png' },
      { rel: 'icon', type: 'image/png', sizes:'16x16', href: 'favicon/favicon-16x16.png' },
      { rel: 'manifest', href: 'favicon/manifest.json' }
    ]
  },

  publicRuntimeConfig: {
    axios: {
      credentials: true,
      // baseURL: 'http://127.0.0.1:8000/v1/'
      // baseURL: 'https://homologation-api.kkkkkk.com.br/v1/'
      baseURL: 'https://api.kkkkkk.com.br/v1/'
    }
  },

  env: {
    token: 'jwt - token'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~plugins/auth' },
    { src: '~plugins/vue-the-mask' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      themes: {
        light: {
          primary: '#00ff5b',
          accent: '#303030',
          secondary: '#0a233f',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    },
    treeShake: true,
    defaultAssets: {
      font: {
        family: 'Montserrat'
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
