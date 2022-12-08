import { apiPlugin } from '@storyblok/vue'
import vue from '@vitejs/plugin-vue'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    [
      '@storyblok/nuxt',
      {
        accessToken: process.env.STORYBLOK_API_TOKEN,
        bridge: true,
        use: [apiPlugin]
      },
    ],
    '@nuxtjs/tailwindcss',
  ],
  hooks: {
    'vite:extendConfig': (config, { isClient, isServer }) => {
      if (isClient)
        config.resolve.alias.vue = 'vue/dist/vue.esm-bundler.js'
    },
  },
})
