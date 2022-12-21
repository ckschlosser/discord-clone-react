/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      lightGrey: "#F6F6F6",
      navGrey: "#4f5660",
      darkGrey: "#23272a",
      black: "#000",
      lightestBlue: "#00b0f4",
      lighterBlue: "#7983F5",
      mainBlue: "#5865f2",
      heroBlue: "#404EED",
    },
    extend: {
      fontFamily: {
        cabin: ["Cabin", "sans-serif"],
      },
    },
  },
  plugins: [],
};
