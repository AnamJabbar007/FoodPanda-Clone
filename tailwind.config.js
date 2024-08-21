/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'top-bottom': '0 0.3rem 2rem rgb(0 0 0 / 10%)',
      },
      zIndex: {
        '-1': '-1', // Add custom z-index value
      },
    },
  },
  plugins: [],
}
