/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#F4EEE1',
        surface: '#FFFFFF',
        gold: {
          DEFAULT: '#B8894A',
          dark: '#9C723A',
          soft: '#EFE3D0',
        },
        espresso: '#2B241C',
        stone: '#6B6459',
        savannah: '#1F6E52',
        clay: '#C1562F',
        hairline: '#E4DCC9',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        hero: ['clamp(2.25rem, 4.4vw, 3.5rem)', { lineHeight: '1.04', letterSpacing: '-0.02em' }],
        section: ['clamp(1.75rem, 2.6vw, 2.125rem)', { lineHeight: '1.12', letterSpacing: '-0.015em' }],
        eyebrow: ['0.6875rem', { lineHeight: '1', letterSpacing: '0.18em' }],
      },
      borderRadius: {
        card: '18px',
        pill: '999px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(43,36,28,0.04), 0 10px 30px -18px rgba(43,36,28,0.30)',
        lift: '0 2px 6px rgba(43,36,28,0.05), 0 26px 48px -26px rgba(43,36,28,0.38)',
        header: '0 1px 0 rgba(228,220,201,1), 0 12px 28px -24px rgba(43,36,28,0.4)',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
      maxWidth: {
        shell: '1240px',
      },
    },
  },
  plugins: [],
}