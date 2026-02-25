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
    ],
  },
  {
    title: 'Mobile',
    icon: 'mdi:cellphone',
    skills: [
      'Ionic Framework',
      'Capacitor',
      'Progressive Web Apps',
      'Responsive Design',
    ],
  },
  {
    title: 'Backend & APIs',
    icon: 'mdi:server-outline',
    skills: [
      'Node.js',
      'PHP',
      'Python',
      'REST APIs',
      'Microservices',
      'Database Management',
    ],
  },
  {
    title: 'Tools & DevOps',
    icon: 'mdi:wrench-outline',
    skills: [
      'Git',
      'Azure Cloud',
      'Ubuntu Server',
      'Adobe Photoshop',
      'Scrum / Agile',
      'CI/CD',
    ],
  },
]
