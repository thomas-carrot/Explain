// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxt/icon',
    '@nuxt/image'
  ],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'nümorning'
    }
  },
  content: {
    preview: {
      api: 'https://api.nuxt.studio'
    }
  },
  ui: {
    theme: {
      colors: ['primary', 'secondary', 'info', 'success', 'warning', 'error']
    }
  },
  future: {
    compatibilityVersion: 4
  },
  compatibilityDate: '2024-11-27'
})