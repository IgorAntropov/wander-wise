export default defineNuxtConfig({
  devtools: {enabled: true},
  modules: [
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          'Inter': {
            wght: [300, 400, 700],
            ital: [300],
          },
        },
      },
    ],
    'nuxt-icon',
    '@pinia/nuxt',
    'nuxt-time',
  ],
  shadcn: {
    prefix: 'Ui',
    componentDir: './components/ui'
  },
  pinia: {
    storesDirs: ['./store/**'],
  },
})
