# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server at http://localhost:3000
npm run build      # Build for production (SSR)
npm run generate   # Static site generation
npm run preview    # Preview production build locally
```

No test or lint commands are configured.

## Architecture

This is a **Nuxt 3 single-page portfolio** — one route (`/`), six scroll sections, no routing between pages. All navigation is smooth-scroll to section IDs with a 64px navbar offset.

**Entry chain:** `app.vue` → `layouts/default.vue` (navbar + footer) → `pages/index.vue` (six stacked sections).

### Data layer

All content lives in TypeScript files under `app/data/`:
- `profile.ts` — personal info, contact, socials
- `projects.ts` — featured projects array
- `experience.ts` — work history timeline
- `skills.ts` — skill categories with icons
- `navigation.ts` — navbar links → section IDs

To update portfolio content, edit these files only. Components read from them directly.

### Composables (auto-imported)

Four composables in `app/composables/` cover all interactive behavior:

| Composable | Purpose | Used in |
|---|---|---|
| `useTheme()` | Wraps `@nuxtjs/color-mode`, returns toggle + icon | `ThemeToggle.vue` |
| `useSmoothScroll()` | `scrollTo(sectionId)` with 64px navbar offset | `TheNavbar`, `TheHero` |
| `useScrollReveal()` | IntersectionObserver → `isVisible` ref for fade/slide-up | All section components |
| `useActiveSection()` | Watches scroll to highlight current nav link | `TheNavbar.vue` |

### Theming

Two-layer system:
1. **CSS variables** in `assets/css/theme.css` — dark (default) and light themes defined as RGB values on `:root` and `.light`
2. **Tailwind** in `tailwind.config.ts` — custom colors that reference those CSS variables (e.g. `bg-void`, `text-primary`, `border-border`, `shadow-glow`)

Dark mode is class-based (`darkMode: 'class'`). `@nuxtjs/color-mode` manages the class. Do not add `dark:` Tailwind variants — use the semantic color tokens instead (they change automatically with theme).

### Icons

Uses `@nuxt/icon` with the MDI icon set (`@iconify-json/mdi`). Reference icons as `mdi:icon-name` in the `<Icon name="mdi:github" />` component.

### Animations

Scroll-triggered via `useScrollReveal()` + Tailwind custom keyframes (`fade-in`, `slide-up`, `bounce-slow`). The `isVisible` ref from the composable drives conditional classes. All major sections use this pattern.
