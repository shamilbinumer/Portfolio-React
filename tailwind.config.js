/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      backgroundImage:{
        'light-mode-bg':"url('./public/Images/light-bg.jpg')",
        'dark-mode-bg':"url('./public/Images/blue-backround.jpg')"
      }
    },
  },
  plugins: [],
}

