const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    fontFamily: {
      sora: "'Sora'",
      inter: "'Inter', sans-serif;",
    },
    backdropFilter: {
      none: 'none',
      blur: 'blur(20px)',
    },
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
      sky: colors.sky,
      green: colors.green,
      primary: '#302E80',
      secondary: '#545DAA',
      accent: '#618CFB',
    },
    daisyui: {
      styled: true,
      themes: false,
      base: true,
      utils: true,
      logs: true,
      rtl: false,
      darkTheme: 'dark',
    },
    borderRadius: {
      'DEFAULT': '0.25rem',
      'none': '0',
      'sm': '0.125rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'xl': '1rem',
      '2xl': '2rem',
      '3xl': '3rem',
      '4xl': '4rem',
      '6xl': '6rem',
      '8xl': '8rem',
      '12xl': '12rem',
      'default': '0.5rem',
    },
    extend: {},
  },
  plugins: [require('daisyui'), require('tailwindcss-filters')],
}
