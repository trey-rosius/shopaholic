export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'shopaholic',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

   /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['normalize.css', { src: '~/assets/main.scss', lang: 'sass' }],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    `~/plugins/getproducts.server.js`,`~/plugins/currency-filter.js`
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    
    
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
   
  }
}
