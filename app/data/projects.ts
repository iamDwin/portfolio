export interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
  category: 'work' | 'personal'
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
    category: 'work',
  },
  {
    title: 'CnN Suite v2 — Classification And Naming',
    description:
      'Heading the development of an intelligent DOM classification and naming engine that semantically understands e-commerce pages at scale. The system analyses homepages, product pages, and collection pages across thousands of Shopify and custom stores — classifying and naming every element (hero sections, product grids, pricing, CTAs, reviews) using a multi-stage pipeline with 45+ modules, site fingerprinting, and a Claude-powered two-pass analyser for training data generation.',
    image: '/images/projects/placeholder.svg',
    tags: ['TypeScript', 'Classification', 'Claude AI', 'Shopify', 'Node.js', 'Webpack'],
    liveUrl: 'https://heatmap.com',
    featured: true,
    category: 'work',
  },
  {
    title: 'Heatmap Radar',
    description:
      'Built an AI-powered internal Slack bot that democratises access to customer data across the Heatmap team. Team members ask natural-language questions and get instant, contextual answers drawn from ClickHouse, Intercom, and Jira via a router-worker pipeline (Claude Haiku routes, Claude Sonnet executes). Features 10 pre-built analytical skills — churn analysis, trial health checks, at-risk fleet scans, revenue reconciliation, refund decisions, A/B test reports — plus automated HubSpot-triggered onboarding health checks, per-site memory, and a full admin command suite, all from Slack.',
    image: '/images/freepik__a-horizontal-logo-combining-a-logomark-and-the-wor__76116.png',
    tags: ['Python', 'Claude AI', 'Slack Bolt', 'ClickHouse', 'MCP', 'PydanticAI', 'Docker'],
    featured: true,
    category: 'work',
  },
  {
    title: 'Heatmap Surveys Feature',
    description:
      'An in-app survey builder and delivery system for heatmap.com, enabling clients to collect user feedback directly on their websites. Directed a team of 3 developers.',
    image: 'https://cdn.prod.website-files.com/667c60bb6788d92e03b16204/68095c869455efc798c2bae7_43j322680312d190d43a76d3a65d28_Screenshot%202025-04-18%20at%2011.04.39%E2%80%AFPM%201.avif',
    tags: ['Nuxt.js', 'TypeScript', 'REST API', 'PHP'],
    liveUrl: 'https://www.heatmap.com/surveys',
    featured: true,
    category: 'work',
  },
  {
    title: 'CnN Correction Tool',
    description:
      'Built and manage an internal Chrome extension that enables QA teams to verify and correct CnN classification labels directly on heatmap recording pages. Features element navigation across 100+ classifications with variable replacement, Jira ticket creation, Monaco-powered JSON editing, and intelligent multi-user conflict resolution synced to AWS S3 — all from a Manifest V3 side panel.',
    image: '/images/projects/placeholder.svg',
    tags: ['TypeScript', 'Chrome Extension', 'Manifest V3', 'AWS S3', 'Jira API', 'Webpack'],
    featured: true,
    category: 'work',
  },
  {
    title: 'Heatmap AI Grader — Site Audit Service',
    description:
      'Built and enhanced the site audit service for an AI-powered website grading platform. The service performs static analysis across HTML, CSS, and JavaScript — scoring sites on five weighted dimensions: accessibility, best practices, SEO, security, and performance. Introduced a centralised configuration system that replaced hard-coded limits, increasing issue detection from 4 to 40+ per report (a 10× improvement), with prioritised recommendations and before/after code examples. Integrated into a RabbitMQ microservices pipeline with async processing, AWS S3 report storage, and a 30-day Redis cache.',
    image: '/images/projects/placeholder.svg',
    tags: ['TypeScript', 'Node.js', 'RabbitMQ', 'AWS S3', 'Cheerio', 'Redis', 'NestJS'],
    liveUrl: 'https://heatmap.com',
    featured: true,
    category: 'work',
  },
  {
    title: 'Preach',
    description:
      'A ministry companion app for pastors, evangelists, and church leaders — built to help teams capture people quickly, follow up consistently, and stay aligned across branches so no soul is forgotten. Features a Quick Capture flow for bulk contact intake, soul tracking with status management, group and outreach organisation, visitation records, multi-branch admin, and a full subscription system with monthly/yearly church plans. Built as a native iOS and Android app with a responsive web landing page. Currently in Google Play Console testing.',
    image: '/images/preachmobile.png',
    tags: ['Angular', 'Ionic', 'Capacitor', 'Supabase', 'TypeScript', 'Paystack'],
    liveUrl: 'https://preachmobile.com',
    featured: true,
    category: 'personal',
  },
  {
    title: 'Uri Coding Agent',
    description:
      'An AI-powered autonomous coding assistant with real-time WebSocket communication, app preview, multi-modal prompts, and session persistence.',
    image: '/images/projects/placeholder.svg',
    tags: ['TypeScript', 'Angular', 'Node.js', 'WebSocket', 'Claude SDK'],
    githubUrl: 'https://github.com/iamDwin',
    featured: true,
    category: 'personal',
  },
  {
    title: 'TOLDOIT Web & Mobile Apps',
    description:
      'Full-stack web and mobile applications built with Angular and Ionic, featuring Paystack payment integration, RESTful APIs, and deployed on Azure Cloud.',
    image: '/images/projects/placeholder.svg',
    tags: ['Angular', 'Ionic', 'REST API', 'Azure', 'Paystack'],
    featured: true,
    category: 'work',
  },
  {
    title: 'Hospital & School Management Systems',
    description:
      'Management systems for healthcare and education sectors, built collaboratively at Quat IT Solutions to streamline operations and record-keeping.',
    image: '/images/projects/placeholder.svg',
    tags: ['PHP', 'JavaScript', 'MySQL', 'Bootstrap'],
    featured: false,
    category: 'work',
  },
]
