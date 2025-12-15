export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],

  css: [
    '@/assets/css/main.css'
  ],

  app: {
    head: {
      title: 'MSP Coffee - Premium Coffee Shop',
      meta: [
        { name: 'description', content: 'MSP Coffee - UMKM Coffee Shop dengan kopi premium pilihan' }
      ],
    }
  },

  compatibilityDate: '2024-12-01'
})
