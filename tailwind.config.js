/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'fareplay-dark': '#0A0B0D',
        'fareplay-card': '#13141A',
        'fareplay-primary': '#FF3366',
        'fareplay-secondary': '#FF6B4D',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};