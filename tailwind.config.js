/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'egg':'#FEFAE0',
        'lg-brown' : '#DDA15E',
        'dk-brown' : '#BC6C25',
      },
    },
  },
  plugins: [],
}