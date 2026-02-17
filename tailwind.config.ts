import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{vue,ts}',
    './components/**/*.{vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.ts',
  ],
  theme: {
    extend: {
      colors: {
        void: '#05050a',
        primary: '#0a0a12',
        surface: '#10101a',
        card: '#161622',
        elevated: '#1e1e2e',
        accent: {
          DEFAULT: '#2d9d4a',
          dim: '#238c3d',
          light: '#3dd68c',
        },
        'text-primary': '#e8e6e0',
        'text-secondary': '#9896a0',
        'text-muted': '#5e5c68',
      },
      fontFamily: {
        display: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'Menlo', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 24px rgba(45, 157, 74, 0.15)',
        'glow-strong': '0 0 40px rgba(45, 157, 74, 0.25)',
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
