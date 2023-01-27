import { createTheme } from "@mui/material";
const theme = createTheme({
	palette: {
		primary: {
			main: "#0F121D",
		},
		secondary: {
			main: "#820505",
		},
	},
	typography: {
		button: {
			textTransform: "none",
		},
		fontFamily: ["Commissioner", "Montserrat"].join(","),
	},
	components: {
		MuiInputBase: {
			styleOverrides: {
				input: {},
			},
		},
		MuiButton: {
			styleOverrides: {
				text: {
					fontFamily: "Montserrat",
				},
			},
		},
	},
});

export default theme;
