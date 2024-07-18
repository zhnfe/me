// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1, user-scalable=1',
      htmlAttrs: {
        lang: 'zh'
      }
    }
  },
  $production: {
    app: {
      baseURL: '/me',
      head: {
        link: [{ rel: 'shortcut icon', href: '/me/me.png' }]
      }
    }
  },
  $development: {
    app: {
      baseURL: '/',
      head: {
        link: [{ rel: 'shortcut icon', href: '/favicon.ico' }]
      }
    }
  },
  css: [
    '~/public/style/index.scss'
  ]
})
