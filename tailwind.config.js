/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-300": "#fffcf7",
        "theme-500": "#f7e9dc",
        "theme-700": "#ec755d",
        "theme-blue": "#b4dfe5",
        "theme-hover": "#382413",
        "font": "#332116",
        "font-light": "#bfb7b2"
      }
    },
  },
  plugins: [],
}