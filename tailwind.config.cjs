/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./menu.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./src/menu.html",
    "./src/setdinner.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin"), require("flowbite-typography")],
};
