const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    colors: {
      light_gray_faq_block: '#F1F1F1',
      gray_faq_block: '#FAFAFA',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      blue: colors.blue,
      purple: colors.purple,
      pink: colors.pink,
      primary: '#29348E',
      secondary: '#545DAA',
      accent: '#618CFB',
    },
    extend: {},
  },
  plugins: [],
}
