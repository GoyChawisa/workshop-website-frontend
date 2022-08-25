import dotenv from 'dotenv'

dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'artifact nuxt boilerplate',
    meta: [
      { charset: 'utf-8' },
      { name: 'theme-color', content: '#FFFFFF' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'index, follow, noodp' },
      { name: 'googlebot', content: 'index, follow' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'keywords', content: '' },
      // Twitter sharing
      // https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary
      { name: 'twitter:card', content: 'summary' },
      // Facebook sharing
      // https://developers.facebook.com/docs/sharing/webmasters/
      { property: 'og:site_name', content: '' },
      { property: 'og:image', content: '' },
      { property: 'og:title', content: '' },
      { property: 'og:url', content: '' },
      { property: 'og:description', content: '' },
      { property: 'og:type', content: 'website' },
    ],
    link: [
      // Manifest for appplaction name and icon at Home screen
      // https://web.dev/add-manifest/
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'shortcut icon', href: '/favicons/favicon.ico' },
      { rel: 'icon', sizes: '32x32', type: 'image/ico', href: '/favicons/favicon.ico' },
      { rel: 'icon', sizes: '48x48', type: 'image/png', href: '/favicons/favicon@xs.png' },
      { rel: 'icon', sizes: '96x96', type: 'image/png', href: '/favicons/favicon@sm.png' },
      { rel: 'icon', sizes: '144x144', type: 'image/png', href: '/favicons/favicon@md.png' },
      { rel: 'icon', sizes: '192x192', type: 'image/png', href: '/favicons/favicon@lg.png' },
      { rel: 'apple-touch-icon', href: '/favicons/touch-icon-iphone.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: '/favicons/touch-icon-ipad.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/favicons/touch-icon-iphone-retina.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/favicons/touch-icon-ipad-retina.png' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'bulma/css/bulma.min.css',
    '@/assets/styleguides/styleguides.scss',
    '@/assets/styleconfigs/styleconfigs.scss',
    '@/assets/styleglobal.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/api/index.ts',
    '~/plugins/services.ts',
    '~/plugins/constants/index.ts',
    '~/plugins/functions/index.ts',
    { src: '~/plugins/vendors/vue-notification.ts', ssr: false },
    '~/plugins/vendors/vue-the-mask.ts',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    icon: {
      source: '@/static/images/favicons/favicon@lg.png',
    },
    manifest: {
      lang: 'en',
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  env: {
    MAIN_API_BASE_URL: process.env.MAIN_API_BASE_URL,
    TEST_VAR: process.env.TEST_VAR,
  }
}
