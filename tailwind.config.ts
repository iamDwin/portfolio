import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{vue,ts}',
    './components/**/*.{vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.ts',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        void: 'rgb(var(--color-void) / <alpha-value>)',
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        card: 'rgb(var(--color-card) / <alpha-value>)',
        elevated: 'rgb(var(--color-elevated) / <alpha-value>)',
        accent: {
          DEFAULT: 'rgb(var(--color-accent) / <alpha-value>)',
          dim: 'rgb(var(--color-accent-dim) / <alpha-value>)',
          light: 'rgb(var(--color-accent-light) / <alpha-value>)',
        },
        'text-primary': 'rgb(var(--color-text-primary) / <alpha-value>)',
        'text-secondary': 'rgb(var(--color-text-secondary) / <alpha-value>)',
        'text-muted': 'rgb(var(--color-text-muted) / <alpha-value>)',
        overlay: 'rgb(var(--color-overlay) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',
        'on-accent': 'rgb(var(--color-on-accent) / <alpha-value>)',
      },
      fontFamily: {
        display: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'Menlo', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 24px rgb(var(--color-accent) / 0.15)',
        'glow-strong': '0 0 40px rgb(var(--color-accent) / 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
