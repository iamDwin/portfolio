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
      'Angular',
      'Vue.js',
      'React.js',
      'Nuxt.js',
      'TypeScript',
      'JavaScript',
      'Angular Material',
      'Bootstrap',
      'TailwindCSS',
      'Chrome Extensions (Manifest V3)',
    ],
  },
  {
    title: 'Mobile',
    icon: 'mdi:cellphone',
    skills: [
      'Ionic Framework',
      'Capacitor',
      'Supabase',
      'Progressive Web Apps',
      'Responsive Design',
    ],
  },
  {
    title: 'Backend & APIs',
    icon: 'mdi:server-outline',
    skills: [
      'Node.js',
      'NestJS',
      'PHP',
      'Python',
      'REST APIs',
      'WebSockets',
      'Microservices',
      'RabbitMQ',
      'Redis',
      'ClickHouse',
      'Supabase',
      'Database Management',
    ],
  },
  {
    title: 'AI & Automation',
    icon: 'mdi:brain',
    skills: [
      'Claude AI / Anthropic SDK',
      'Prompt Engineering',
      'PydanticAI',
      'MCP (Model Context Protocol)',
      'Slack Bolt',
    ],
  },
  {
    title: 'Tools & DevOps',
    icon: 'mdi:wrench-outline',
    skills: [
      'Git',
      'Docker',
      'AWS S3',
      'Azure Cloud',
      'Paystack',
      'Ubuntu Server',
      'Adobe Photoshop',
      'Scrum / Agile',
      'CI/CD',
    ],
  },
]
