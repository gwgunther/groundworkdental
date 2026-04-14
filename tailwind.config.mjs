/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          warm: '#5F7F6B',
          'warm-dark': '#4A6B55',
          cream: '#F8F8F3',
          sage: '#5F7F6B',
          'sage-light': '#EBF0EC',
        },
        neutral: {
          dark: '#334155',
          mid: '#64748B',
          light: '#F8F8F3',
          border: '#E0DDD5',
        },
        surface: {
          1: '#FFFFFF',
          2: '#F8F8F3',
          warm: '#FAF8F5',
        },
        charcoal: '#334155',
        'mid-gray': '#64748B',
        'border-light': '#E0DDD5',
      },
      fontFamily: {
        serif: ['Georgia', '"Times New Roman"', 'serif'],
        sans: ['Figtree', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'eyebrow': ['10px', { lineHeight: '1.4', letterSpacing: '0.14em' }],
        'label': ['11px', { lineHeight: '1.4', letterSpacing: '0.12em' }],
      },
    },
  },
};
