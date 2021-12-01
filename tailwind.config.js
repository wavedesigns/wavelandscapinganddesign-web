const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Lato', ...defaultTheme.fontFamily.sans],
      serif: ['EB Garamond', ...defaultTheme.fontFamily.serif],
    },
    backgroundImage: {
      'home-banner': "url('/images/banner/home-page-banner.webp')",
      'back-banner': "url('/images/banner/back-page-banner.webp')",
    },
    colors: {
      ...colors,
      darkBlue: {
        light: '#59709E',
        DEFAULT: '#2e3a52',
        dark: '#1F2838',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
