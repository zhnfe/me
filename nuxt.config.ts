// https://nuxt.com/docs/api/configuration/nuxt-config
import { readFileSync } from 'fs'
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  features: {
    inlineStyles: false
  },
  vite: {
    build: {
      target: 'esnext'
    }
  },
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
        link: [{ rel: 'shortcut icon', href: '/me/me.png' }],
        style: [{ innerHTML: readFileSync('./public/style/index.css').toString() }]
      }
    }
  },
  $development: {
    app: {
      baseURL: '/',
      head: {
        link: [{ rel: 'shortcut icon', href: '/favicon.ico' }]
      }
    },
    css: [
      '~/public/style/index.css'
    ]
  }
})
