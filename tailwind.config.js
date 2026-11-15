/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				cream: "#fcfdf5",
				crimson: "#c03654",
				"dark-card": "#0D1117",
				gold: "#D4AF37",
				beige: "#F5F5DC",
				cesama: {
					bg: "#eeeeee",
					blue: "#92bddfb3",
					green: "#6fb489c7",
					yellow: "#cbcc53a8",
					gray: "#acacaca8",
				},
				tribos: {
					brown: "#64301a",
					darkBrown: "#3f2a1a",
					dark: "#0b0b0b",
				},
			},
			fontFamily: {
				inter: ["var(--font-inter)", "sans-serif"],
				geist: ["var(--font-geist)", "geist", "sans-serif"],
				yeager: ["var(--font-yeager)", "yeager", "Times New Roman", "Times", "serif"],
				yeagerLight: ["var(--font-yeager-light)", "yeagerLight", "sans-serif"],
				kouzan: ["var(--font-kouzan)", "kouzan", "sans-serif"],
				potta: ["var(--font-potta)", "sans-serif"],
			},
			keyframes: {
				desenhoAparece: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				moveArrow: {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(15px)" },
				},
				rotacao: {
					to: { "--ang-angle": "360deg" },
				},
				showMenu: {
					"0%": { transform: "translateY(100px)" },
					"100%": { transform: "translateY(0)" },
				},
				moveTitle: {
					"0%": { opacity: "0", transform: "translateX(100px)" },
					"100%": { transform: "translateX(0)" },
				},
			},
			animation: {
				desenhoAparece: "desenhoAparece 1s cubic-bezier(0.33, 0, 0.67, 1) 600ms forwards",
				moveArrow: "moveArrow 2s ease-in-out infinite",
				rotacao: "rotacao 3s linear infinite",
			},
		},
	},
	plugins: [],
};
