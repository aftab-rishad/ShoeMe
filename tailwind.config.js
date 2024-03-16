/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        background: "#fdf7f6",
        darkBg: "#080302",
        textColor: "#170805",
        darkTextColor: "#faedea",
        primary: "#d14834",
        darkPimary: "#cc432e",
        secondary: "#91e6dd",
        darkSecondary: "#196c64",
        accent: "#6177db",
        darkAccent: "#243a9e",
        redHover: "#9d0208",
        golden: "#FFD700",
      },
    },
  },
  plugins: [],
};
