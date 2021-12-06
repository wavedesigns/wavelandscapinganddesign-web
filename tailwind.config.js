const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
delete colors['lightBlue']

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
        200: '#59709E',
        DEFAULT: '#2e3a52',
        900: '#131B25',
      },
      skyBlue: {
        DEFAULT: '#7594d1',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
