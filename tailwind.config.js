/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./public/**/*.{html,js}", "./src/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				primary: "#F24C00",
				secondary: "#485696",
				customBlack: "#2B2A2A",
				lightPrimary: "#F24C0012",
			},
			fontFamily: {
				custom: ["Poppins, sans-serif"],
			},
		},
	},
	plugins: [],
};
