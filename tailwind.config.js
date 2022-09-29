/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F121D",
        accent: "#820505",
        "black-opacity": "rgba(0,0,0,0.5)",
      },
      fontFamily: {
        Commissioner: "Commissioner",
      },
      maxWidth: {
        "8xl": "1500px",
      },
      screens: {
        "3xl": "1735px",
      },
    },
  },
  important: "#__next",
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
