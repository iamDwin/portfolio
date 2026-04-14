// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  ssr: true,
  nitro: {
    preset: 'static',
    prerender: {
      routes: ['/'],
    },
  },

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://goodmaneffah.netlify.app',
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
      title: 'Godwin Goodman Effah | Software Engineer',
      titleTemplate: '%s',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Portfolio of Godwin Goodman Effah — Software Engineer specializing in Angular, Vue.js, React, TypeScript, and mobile development with Ionic.',
        },
        { name: 'author', content: 'Godwin Goodman Effah' },
        {
          name: 'keywords',
          content:
            'Godwin Goodman Effah, Software Engineer, Frontend Developer, Angular, Vue.js, React, TypeScript, Ionic, Nuxt, Ghana, Accra, web developer, mobile developer',
        },
        { name: 'robots', content: 'index, follow' },
        { name: 'theme-color', content: '#2D9D4A' },
        // Open Graph
        {
          property: 'og:title',
          content: 'Godwin Goodman Effah | Software Engineer',
        },
        {
          property: 'og:description',
          content:
            'Software Engineer building modern web & mobile applications with Angular, Vue.js, React, and TypeScript.',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Goodman Effah' },
        { property: 'og:locale', content: 'en_US' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        {
          name: 'twitter:title',
          content: 'Godwin Goodman Effah | Software Engineer',
        },
        {
          name: 'twitter:description',
          content:
            'Software Engineer building modern web & mobile applications with Angular, Vue.js, React, and TypeScript.',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
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
