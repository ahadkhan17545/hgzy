/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#f95959",
        gray: "#6B7280",
        white: "#FFFFFF",
        text: "#768096",
        marqueeText:"#303A4c"
      },
      backgroundColor: {
        backgroundWhite: "#f7f8ff",
        red: "#f95959",
        pink: "#FFC0CB",
        white: "#FFFFFF",
        lightWhite: "#E0E0E0",
        sideBg: "#9195A3",
        amountBG: "#f95959",
      },
    },
  },
  plugins: [],
};
