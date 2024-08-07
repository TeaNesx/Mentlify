/** @type {import('tailwindcss').Config} */
const {colors: defaultColors} = require('tailwindcss/defaultTheme');

const colors = {
  ...defaultColors,
  ...{
    'mentlify-green': '#2ECC71',
    'mentlify-gray': '#555555',
    'mentlify-secondary': '#009679',
    'mentlify-white': '#F2F2F2',
  },
};

module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    colors: colors,
  },
  plugins: [],
};
