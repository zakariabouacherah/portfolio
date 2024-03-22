/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffb331",
        primary1: "#f8b02c",
        bgprimary: "#ffb33155",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
