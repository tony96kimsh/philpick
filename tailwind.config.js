/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',  // darkmode
  content: [
    "./index.html",
    "./script.js",
    "./src/darkmode.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
        serif: ['"EB Garamond"', 'serif'],
      },
      colors: {
        primary: '#2b3a55',
        hoverPrimary: '#1d293e',
        hint: '#6b7280',
        price: '#2563eb',
      },
    },
  },
  plugins: [],
}
