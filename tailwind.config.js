/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["*.{html,js}"],
	theme: {
		extend: {
			backgroundColor: {
				bl: "#2D2D2D",
				rd: "#E83535",
			},
			borderColor: {
				bl: "#2D2D2D",
				rd: "#E83535",
			},
			textColor: {
				bl: "#2D2D2D",
				rd: "#E83535",
			},

			fontFamily: {
				georama: ["Georama", "sans-serif"],
			},

			borderRadius: {
				"4xl": "20px",
			},
		},
	},
	plugins: [],
};
