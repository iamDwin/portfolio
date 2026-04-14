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
    title: 'Heatmap Analytics Platform',
    description:
      'A comprehensive data analytics tool that visualizes user behavior on websites. Built with a team of 30+ developers, featuring real-time heatmaps, session recordings, and actionable insights.',
    image: 'https://cdn.prod.website-files.com/667c60bb6788d92e03b16204/67bdca0d5a7b39b24c7dcf69_aFrame%204553.avif',
    tags: ['Nuxt.js', 'PHP', 'Node.js', 'Python', 'Analytics'],
    liveUrl: 'https://heatmap.com',
    featured: true,
  },
  {
    title: 'CNN Suite v2 — Product Grid Detection',
    description:
      'Leading development of a CNN-based product grid detection system for e-commerce websites. A TypeScript monorepo with a modular pipeline that automatically identifies product tiles, extracts attributes (images, prices, titles, CTAs), and delivers structured data for analytics — with deep Shopify support and shadow DOM traversal.',
    image: '/images/projects/placeholder.svg',
    tags: ['TypeScript', 'CNN', 'Machine Learning', 'Shopify', 'Webpack', 'Node.js'],
    liveUrl: 'https://heatmap.com',
    featured: true,
  },
  {
    title: 'Heatmap Chrome Extension',
    description:
      'A Google Chrome extension for heatmap.com that enables users to interact with analytics data directly in their browser. Led a sub-team of 3 developers from inception to launch.',
    image: '/images/projects/placeholder.svg',
    tags: ['React', 'Chrome Extension API', 'TypeScript'],
    featured: true,
  },
  {
    title: 'Heatmap Surveys Feature',
    description:
      'An in-app survey builder and delivery system for heatmap.com, enabling clients to collect user feedback directly on their websites. Directed a team of 3 developers.',
    image: 'https://cdn.prod.website-files.com/667c60bb6788d92e03b16204/68095c869455efc798c2bae7_43j322680312d190d43a76d3a65d28_Screenshot%202025-04-18%20at%2011.04.39%E2%80%AFPM%201.avif',
    tags: ['Nuxt.js', 'TypeScript', 'REST API', 'PHP'],
    liveUrl: 'https://www.heatmap.com/surveys',
    featured: true,
  },
  {
    title: 'Uri Coding Agent',
    description:
      'An AI-powered autonomous coding assistant with real-time WebSocket communication, app preview, multi-modal prompts, and session persistence.',
    image: '/images/projects/placeholder.svg',
    tags: ['TypeScript', 'Angular', 'Node.js', 'WebSocket', 'Claude SDK'],
    githubUrl: 'https://github.com/iamDwin',
    featured: true,
  },
  {
    title: 'TOLDOIT Web & Mobile Apps',
    description:
      'Full-stack web and mobile applications built with Angular and Ionic, featuring Paystack payment integration, RESTful APIs, and deployed on Azure Cloud.',
    image: '/images/projects/placeholder.svg',
    tags: ['Angular', 'Ionic', 'REST API', 'Azure', 'Paystack'],
    featured: true,
  },
  {
    title: 'Hospital & School Management Systems',
    description:
      'Management systems for healthcare and education sectors, built collaboratively at Quat IT Solutions to streamline operations and record-keeping.',
    image: '/images/projects/placeholder.svg',
    tags: ['PHP', 'JavaScript', 'MySQL', 'Bootstrap'],
    featured: false,
  },
]
