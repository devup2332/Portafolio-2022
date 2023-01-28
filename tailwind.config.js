/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#0F121D",
				accent: "#820505",
				"black-opacity": "rgba(0,0,0,0.5)",
				"black-opacity-loader": "rgba(0,0,0,0.1)",
				secondPrimary: "#1CB6AB",
			},
			fontFamily: {
				Commissioner: "Commissioner",
				Montsserrat: "Montserrat",
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
