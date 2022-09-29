/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#0F121D',
        'accent': '#820505',
        'black-opacity': "rgba(0,0,0,0.5)"
      },
      fontFamily: {
        "Commissioner": "Commissioner" 
      }
    },
  },
  plugins: [],
};
