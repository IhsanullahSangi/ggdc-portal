/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        collegeDark: '#0A2540',
        collegeGreen: '#10B981',
      }
    },
  },
  plugins: [],
}