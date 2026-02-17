export interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    title: 'Uri Coding Agent',
    description:
      'An AI-powered autonomous coding assistant with real-time WebSocket communication, app preview, multi-modal prompts, and session persistence.',
    image: '/images/projects/placeholder.svg',
    tags: ['TypeScript', 'Angular', 'Node.js', 'WebSocket', 'Claude SDK'],
    githubUrl: 'https://github.com/goodmaneffah/uri-agent',
    featured: true,
  },
  {
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce solution with product catalog, shopping cart, checkout flow, and real-time inventory management.',
    image: '/images/projects/placeholder.svg',
    tags: ['Vue.js', 'Nuxt', 'Supabase', 'TailwindCSS', 'Stripe'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/goodmaneffah',
    featured: true,
  },
  {
    title: 'Analytics Dashboard',
    description:
      'Interactive data visualization dashboard with real-time charts, filters, and exportable reports for business intelligence.',
    image: '/images/projects/placeholder.svg',
    tags: ['Angular', 'TypeScript', 'D3.js', 'RxJS', 'REST API'],
    liveUrl: 'https://example.com',
    featured: true,
  },
  {
    title: 'Design System',
    description:
      'A comprehensive component library and design system used across multiple product teams, with full documentation and accessibility compliance.',
    image: '/images/projects/placeholder.svg',
    tags: ['Vue.js', 'Storybook', 'TypeScript', 'SCSS', 'a11y'],
    githubUrl: 'https://github.com/goodmaneffah',
    featured: true,
  },
]
