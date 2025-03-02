// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  features: {
    inlineStyles: false
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      target: 'esnext'
    }
  },
  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1, user-scalable=1',
      htmlAttrs: {
        lang: 'zh'
      },
      meta: [{ name: 'darkreader-lock', content: '' }]
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
    'public/style/index.css'
  ]
})
