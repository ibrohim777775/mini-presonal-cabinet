// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-quasar-ui',
    '@pinia/nuxt'
  ],
  plugins: [
    // { src: '~/plugins/mock-api' }
  ],
  quasar: {
    plugins: ['Notify']
  },
  typescript: {
    typeCheck: true
  }
})
