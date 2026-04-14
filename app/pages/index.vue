<script setup lang="ts">
const { public: { siteUrl } } = useRuntimeConfig()

useHead({
  title: 'Godwin Goodman Effah | Software Engineer',
  link: [{ rel: 'canonical', href: siteUrl }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Godwin Goodman Effah',
        alternateName: 'Goodman Effah',
        url: siteUrl,
        jobTitle: 'Software Engineer',
        email: 'godwinabeaku@gmail.com',
        telephone: '+233541524233',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Accra',
          addressRegion: 'Greater Accra',
          addressCountry: 'GH',
        },
        sameAs: [
          'https://github.com/iamDwin',
          'https://linkedin.com/in/godwin-goodman-effah-a8a140162',
        ],
        knowsAbout: [
          'Angular',
          'Vue.js',
          'React',
          'TypeScript',
          'Ionic',
          'Nuxt.js',
          'Node.js',
          'Chrome Extensions',
        ],
        worksFor: {
          '@type': 'Organization',
          name: 'Heatmap.com',
        },
      }),
    },
  ],
})

useSeoMeta({
  description:
    'Portfolio of Godwin Goodman Effah — Software Engineer specializing in Angular, Vue.js, React, TypeScript, and mobile development with Ionic.',
  ogTitle: 'Godwin Goodman Effah | Software Engineer',
  ogDescription:
    'Software Engineer building modern web & mobile applications with Angular, Vue.js, React, and TypeScript.',
  ogUrl: siteUrl,
  twitterTitle: 'Godwin Goodman Effah | Software Engineer',
  twitterDescription:
    'Software Engineer building modern web & mobile applications with Angular, Vue.js, React, and TypeScript.',
})
</script>

<template>
  <div>
    <TheHero />
    <TheAbout />
    <TheSkills />
    <TheProjects />
    <TheExperience />
    <TheContact />
  </div>
</template>
