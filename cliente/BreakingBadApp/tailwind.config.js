module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily:{
        'breakingbad': ['breakingbad', 'cursive'],
      },
      dropShadow: {
        'lime': '0 35px 35px rgba(217,249,157, 0.05)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}