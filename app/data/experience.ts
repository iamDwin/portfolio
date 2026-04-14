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
    company: 'Heatmap.com',
    role: 'Software Developer',
    period: 'Sep 2022 — Present',
    description:
      'Delivering features across the full product stack — from core analytics infrastructure to internal AI tooling — while heading multiple engineering initiatives and managing cross-functional sub-teams.',
    highlights: [
      'Collaborated with 30+ developers and QAs to build and maintain the core Heatmap analytics platform using Nuxt.js and PHP',
      'Headed development of CnN Suite v2 — a Classification And Naming engine that semantically understands e-commerce pages at scale across 45+ pipeline modules with site fingerprinting and a Claude-powered training data analyser',
      'Directed a team of 3 to build the Heatmap Surveys feature — an in-app survey builder and delivery system now live at heatmap.com/surveys',
      'Built and manage the CnN Correction Tool — an internal Chrome extension (Manifest V3) used by QA teams to verify and correct classification labels, with Jira integration, Monaco editor, and AWS S3-synced multi-user conflict resolution',
      'Built Heatmap Radar — an AI-powered internal Slack bot giving the team natural-language access to customer data via a Claude router-worker pipeline across ClickHouse, Intercom, and Jira, with 10 analytical skills and automated HubSpot-triggered onboarding health checks',
      'Built and enhanced the site audit service for the Heatmap AI Grader — a static analysis engine scoring sites across accessibility, SEO, performance, security, and best practices, increasing issue detection by 10× through a centralised configuration architecture',
    ],
    current: true,
  },
  {
    company: 'TOLDOIT',
    role: 'Senior Software Engineer',
    period: 'Jul 2022 — Sep 2022',
    description:
      'Led engineering teams in the design, development, and deployment of web and mobile applications.',
    highlights: [
      'Led a team of software engineers in designing, developing, and deploying web applications',
      'Spearheaded mobile application development and deployment to the Google Play Store using the Ionic framework',
    ],
    current: false,
  },
  {
    company: 'TOLDOIT',
    role: 'Software Engineer',
    period: 'Feb 2021 — Jul 2022',
    description:
      'Developed frontend interfaces and integrated backend services for web and mobile applications across multiple product lines.',
    highlights: [
      'Built frontend-backend communication using microservices and RESTful APIs',
      'Integrated third-party APIs including Paystack for payment processing',
      'Developed user-friendly interfaces with Angular and Ionic for web and mobile apps',
      'Managed DEV and PROD deployments on Ubuntu servers hosted on Azure Cloud',
      'Created visual designs, icons, and logos with Adobe Photoshop',
      'Collaborated with product managers to define MVPs and deliver effective solutions',
    ],
    current: false,
  },
  {
    company: 'Ghana Community Network Service Limited (GCNet)',
    role: 'Satellite Tracking & Logistics',
    period: 'Sep 2019 — Aug 2020',
    description:
      'Managed transit department operations and satellite tracking systems for nationwide logistics.',
    highlights: [
      'Maintained records for 300+ tracking devices monitoring heavy-duty trucks transporting goods from Tema harbor to borders nationwide',
    ],
    current: false,
  },
  {
    company: 'Quat IT Solutions',
    role: 'Web Developer',
    period: 'Sep 2018 — Aug 2020',
    description:
      'Collaborated with a team of five to develop management systems for healthcare and education sectors.',
    highlights: [
      'Developed efficient hospital management systems',
      'Contributed to building school management systems',
    ],
    current: false,
  },
]
