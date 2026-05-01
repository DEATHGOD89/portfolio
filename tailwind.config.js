/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        crimson: {
          50: 'rgb(var(--color-accent))',
          100: 'rgb(var(--color-accent))',
          200: 'rgb(var(--color-accent))',
          300: 'rgb(var(--color-accent))',
          400: 'rgb(var(--color-accent))',
          500: 'rgb(var(--color-accent))',
          600: 'rgb(var(--color-accent))',
          700: 'rgb(var(--color-accent))',
          800: 'rgb(var(--color-accent))',
          900: 'rgb(var(--color-accent))',
          950: 'rgb(var(--color-accent))',
        },
        'accent-fg': 'rgb(var(--color-accent-fg))',
        gold: { // Keep gold temporarily for backward compatibility while migrating
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
      },
      fontFamily: {
        'display': ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
