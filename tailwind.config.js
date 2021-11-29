const defaultTheme = require('tailwindcss/defaultTheme')

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
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
