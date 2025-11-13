/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary": "rgb(10, 25, 47)",
        "secondary": "rgb(249, 115, 22)",
        "tertiary": "rgb(84, 214, 187)",
      },
    },
    screens: {
      lg: {max:"2023px"},
      sm: {max:"1000px"},
    },

  },
  plugins: [],
}

