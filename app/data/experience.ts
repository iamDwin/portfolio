export interface ExperienceEntry {
  company: string
  role: string
  period: string
  description: string
  highlights: string[]
  current: boolean
}

export const experience: ExperienceEntry[] = [
  {
    company: 'Tech Company',
    role: 'Senior Frontend Engineer',
    period: 'Jan 2023 — Present',
    description:
      'Leading frontend architecture and development for customer-facing applications. Driving adoption of modern frameworks and best practices across engineering teams.',
    highlights: [
      'Architected a shared design system used by 5 product teams',
      'Reduced initial page load time by 45% through code splitting and lazy loading',
      'Mentored 3 junior developers and led weekly knowledge-sharing sessions',
      'Implemented comprehensive accessibility compliance across all products',
    ],
    current: true,
  },
  {
    company: 'Digital Agency',
    role: 'Frontend Developer',
    period: 'Mar 2021 — Dec 2022',
    description:
      'Built responsive, high-performance web applications for diverse clients across fintech, healthcare, and e-commerce sectors.',
    highlights: [
      'Delivered 12+ client projects on time with high satisfaction scores',
      'Built reusable component libraries that reduced development time by 30%',
      'Integrated third-party APIs and payment gateways for e-commerce platforms',
    ],
    current: false,
  },
  {
    company: 'Startup Inc',
    role: 'Junior Frontend Developer',
    period: 'Jun 2019 — Feb 2021',
    description:
      'Developed and maintained user interfaces for SaaS products. Collaborated closely with designers and backend engineers.',
    highlights: [
      'Migrated legacy jQuery codebase to modern Vue.js architecture',
      'Improved test coverage from 20% to 85% with unit and integration tests',
      'Contributed to open-source projects and internal tooling',
    ],
    current: false,
  },
]
