// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  ssr: true,
  nitro: {
    prerender: {
      routes: ['/'],
    },
  },

  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@nuxtjs/color-mode'],

  css: ['~/assets/css/theme.css'],

  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'dark',
    storageKey: 'portfolio-theme',
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Godwin Goodman Effah | Senior Frontend Engineer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Portfolio of Godwin Goodman Effah — Senior Frontend Engineer specializing in Vue.js, Angular, TypeScript, and modern web applications.',
        },
        {
          property: 'og:title',
          content: 'Godwin Goodman Effah | Senior Frontend Engineer',
        },
        {
          property: 'og:description',
          content:
            'Senior Frontend Engineer specializing in Vue.js, Angular, TypeScript, and modern web applications.',
        },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700&display=swap',
        },
      ],
    },
  },

  tailwindcss: {},
})
