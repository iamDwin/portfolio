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
      'Building data analytics tools and leading feature development in a cross-functional team of 30+ developers and QAs.',
    highlights: [
      'Collaborated with 30 developers and QAs to build a data analytics platform using Nuxt.js and PHP',
      'Led a sub-team of 3 to develop a Google Chrome extension using React',
      'Directed a team of 3 in creating the surveys feature for heatmap.com',
      'Partnered with 5 developers to implement an AI naming feature, optimizing element and section naming on client sites',
      'Designed and executed business logic automations using Node.js and Python, improving operational efficiency',
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
