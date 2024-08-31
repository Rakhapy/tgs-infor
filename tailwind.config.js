/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'sm': '640px',

        'md': '768px',

        'lg': '1024px',

        'xl': '1280px',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        "inter": ['Inter', 'sans-serif'],
        "nunito": ['Nunito', 'sans-serif'],
        "lexend": ['Lexend', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

