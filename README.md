# Goodman's Portfolio

Personal portfolio website for Godwin Goodman Effah — Software Engineer. Built with Nuxt 3, TailwindCSS, and deployed on Netlify.

## Tech Stack

- **[Nuxt 3](https://nuxt.com)** — Vue 3 framework with SSR/SSG
- **[TailwindCSS](https://tailwindcss.com)** — Utility-first CSS with custom design tokens
- **[@nuxtjs/color-mode](https://color-mode.nuxtjs.org)** — Dark/light theme switching
- **[@nuxt/icon](https://github.com/nuxt/icon)** — Iconify MDI icon set

## Getting Started

```bash
npm install
npm run dev       # http://localhost:3000
```

## Scripts

```bash
npm run dev       # Development server
npm run build     # SSR production build
npm run generate  # Static site generation
npm run preview   # Preview production build locally
```

## Deployment

This site is deployed on **Netlify** via static generation. Configuration is in [`netlify.toml`](./netlify.toml).

- Build command: `npm run generate`
- Publish directory: `.output/public`

Any push to `main` triggers an automatic deploy.
