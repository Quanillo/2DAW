module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily:{
        'breakingbad': ['breakingbad', 'cursive'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}