/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dosis: ["Dosis", "sans-serif"],
        urbanist: ["Urbanist", "sans-serif"],
        silkscreen: ["Silkscreen", "sans-serif"],
        pixelify: ["Pixelify Sans", "sans-serif"],
        spacegrotesk: ["Space Grotesk", "sans-serif"],
      },
      colors:{
        bg: "#1f232c",
        nbg: "#edecf0",
        primary1: "#f86668",
        primary2: "#919cfd",
      }
    },
  },
  plugins: [require('tailwindcss-patterns')],
};
