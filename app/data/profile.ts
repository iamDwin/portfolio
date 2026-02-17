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
  socialLinks: SocialLink[]
}

export const profileData: ProfileData = {
  name: 'Godwin Goodman Effah',
  firstName: 'Godwin',
  title: 'Senior Frontend Engineer',
  tagline: 'I build modern, performant, and accessible web experiences.',
  bio: [
    'I\'m a Senior Frontend Engineer with a passion for building elegant, high-performance web applications. I specialize in Vue.js, Angular, and TypeScript — crafting interfaces that are both beautiful and accessible.',
    'With years of experience shipping production applications, I focus on clean architecture, great developer experience, and pixel-perfect implementations. I love turning complex problems into simple, intuitive solutions.',
    'When I\'m not coding, you\'ll find me exploring new technologies, contributing to open source, or mentoring other developers.',
  ],
  email: 'hello@godwineffah.dev',
  socialLinks: [
    {
      platform: 'GitHub',
      url: 'https://github.com/goodmaneffah',
      icon: 'mdi:github',
      ariaLabel: 'Visit GitHub profile',
    },
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/in/godwineffah',
      icon: 'mdi:linkedin',
      ariaLabel: 'Visit LinkedIn profile',
    },
    {
      platform: 'Twitter',
      url: 'https://twitter.com/goodmaneffah',
      icon: 'mdi:twitter',
      ariaLabel: 'Visit Twitter profile',
    },
  ],
}
