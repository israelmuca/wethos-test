
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: "Wethos | Hire Mission-Driven Freelancers",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Wethos user's profile and projects" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    htmlAttrs: {
      style: 'padding-bottom: 80px;'
    }
  },
  /*
  ** ENV variables
  */
  env: {
    OAUTH_URL: process.env.OAUTH_URL,
    API_URL_BASE: process.env.API_URL_BASE,
    GRANT_TYPE: process.env.GRANT_TYPE,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
    SCOPE: process.env.SCOPE,
    CLIENT_ID: process.env.CLIENT_ID
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#460082' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vuex-persist', ssr: false },
    { src: '~/plugins/axios', ssr: false },
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/dotenv',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-dayjs-module'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
