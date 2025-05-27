// https://nuxt.com/docs/api/configuration/nuxt-config
import {defineNuxtConfig} from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: {enabled: true},
  imports: {
    autoImport: false // полностью отключает автоимпорт
  },
  modules: [
    '@nuxt/test-utils',
    '@nuxt/scripts',
    '@nuxt/eslint',
    '@element-plus/nuxt'
  ]
})