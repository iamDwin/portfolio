export interface SocialLink {
  platform: string
  url: string
  icon: string
  ariaLabel: string
}

export interface ProfileData {
  name: string
  firstName: string
  title: string
  tagline: string
  bio: string[]
  email: string
  phone: string
  location: string
  socialLinks: SocialLink[]
}

export const profileData: ProfileData = {
  name: 'Godwin Goodman Effah',
  firstName: 'Godwin',
  title: 'Software Engineer',
  tagline:
    'I build modern web & mobile applications with Angular, Vue.js, React, and TypeScript.',
  bio: [
    'I\'m a Software Engineer based in Accra, Ghana with experience spanning frontend development, mobile applications, and backend services. I specialize in Angular, Vue.js, React, and TypeScript — building interfaces that are performant, scalable, and user-friendly.',
    'Currently at Heatmap.com, I collaborate with a team of 30+ developers building data analytics tools with Nuxt.js, lead sub-teams on Chrome extensions and survey features, and implement AI-powered solutions that optimize client experiences.',
    'I enjoy solving complex problems, leading engineering teams, and turning product ideas into production-ready applications — from web platforms and mobile apps to Chrome extensions and business automation tools.',
  ],
  email: 'godwinabeaku@gmail.com',
  phone: '+233 54 152 4233',
  location: 'Greater Accra, Ghana',
  socialLinks: [
    {
      platform: 'GitHub',
      url: 'https://github.com/iamDwin',
      icon: 'mdi:github',
      ariaLabel: 'Visit GitHub profile',
    },
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/in/godwin-goodman-effah-a8a140162',
      icon: 'mdi:linkedin',
      ariaLabel: 'Visit LinkedIn profile',
    },
  ],
}
