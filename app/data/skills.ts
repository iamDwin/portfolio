export interface SkillCategory {
  title: string
  icon: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: 'mdi:monitor-dashboard',
    skills: [
      'Vue.js',
      'Angular',
      'React',
      'TypeScript',
      'Nuxt',
      'Next.js',
      'TailwindCSS',
      'SCSS',
    ],
  },
  {
    title: 'Backend & APIs',
    icon: 'mdi:server-outline',
    skills: [
      'Node.js',
      'Express',
      'REST APIs',
      'GraphQL',
      'PostgreSQL',
      'Supabase',
      'Firebase',
    ],
  },
  {
    title: 'Tools & DevOps',
    icon: 'mdi:wrench-outline',
    skills: [
      'Git',
      'Docker',
      'CI/CD',
      'Vercel',
      'Netlify',
      'AWS',
      'Figma',
    ],
  },
  {
    title: 'Practices',
    icon: 'mdi:lightbulb-outline',
    skills: [
      'Accessibility (a11y)',
      'Performance',
      'Unit Testing',
      'E2E Testing',
      'Agile / Scrum',
      'Code Review',
    ],
  },
]
