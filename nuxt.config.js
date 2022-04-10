import colors from 'vuetify/es5/util/colors'
const axios = require('axios')

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - telegram',
    title: 'telegram',
    htmlAttrs: {
      lang: 'de'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Telegram.de ist deutschsprachige Fanseite der kostenlosen WhatsApp-Alternative Telegram. Sicherer, schneller und einfacher!' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/scss/style.scss"],

  // Customize the progress-bar color
  loading: {
    color: "DodgerBlue",
    height: "5px",
    continuous: true,
    duration: 3000
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/truncate.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/composition-api/module',
    '@pinia/nuxt',
    ['nuxt-fontawesome', {
      component: 'fa', //customize component name
      imports: [{
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
        {set: '@fortawesome/free-brands-svg-icons',
          icons: ['fab']
        },
        {set: '@fortawesome/free-regular-svg-icons',
          icons: ['far']
        },
      ]
    }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/sitemap'
  ],

  sitemap: {
    hostname: 'https://telegram.de',
    gzip: true,
    exclude: [
      '/datenschutz',
      '/impressum'
    ],
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    },
    routes: async () => {
      let groupRoutes = [];
      const { data } = await axios.get('https://api.telegram.de/api/groups')
      groupRoutes = data.data.map((group) => `/${group.id}/${group.system_name}`)
      return groupRoutes;
    }
  },

  fontawesome: {
    icons: {
      solid: ['faHome'],
      regular: ['faAdjust']
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/scss/variables.scss"],
    optionsPath: "./vuetify.options.js",
    treeShake: true,
    options: {
      customProperties: true
    },
    theme: {
      light: true,  //you don't actually need this line as it's for default
      themes: {
        light: {
          primary: '#0099cc',
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
