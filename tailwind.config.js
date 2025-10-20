// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = { // 👈 Mude "export default" para "module.exports ="
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0a84ff',
        secondary: '#1a202c',
        'background-light': '#f7fafc',
        'text-light': '#e2e8f0',
        'text-dark': '#2d3748',
        'card-bg': '#2d3748',
      }
    },
  },
  plugins: [],
}