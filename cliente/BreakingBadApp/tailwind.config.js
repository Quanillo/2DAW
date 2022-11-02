module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        'breakingbad': ['breakingbad', 'cursive'],
        'heart': ['heart', 'cursive'],
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