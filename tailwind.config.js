/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ['./components/**/*.{js,ts,tsx}','./app/**/*.{js,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
  },
  plugins: [],
};
