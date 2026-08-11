/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        'bz-blue': '#168BE4',
        'bz-blue-hover': '#1171ba',
        'bz-ink': '#0A0F1C',
        'bz-text': '#64748b',
        'bz-bg': '#FFFFFF',
        'bz-surface': '#F8FAFC',
        'bz-surface-subtle': '#F1F5F9',
        'bz-border': '#E2E8F0',
        'bz-dark': '#060913',
      }
    },
  },
  plugins: [],
}
