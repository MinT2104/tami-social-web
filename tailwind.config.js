/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        height: {
          from: {"height": "0%"},
          to: {"height": "100%"},
        },
        },
    },
    
  },
  plugins: [],
}
