module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  plugins: [],
  theme: {
    extend: {},
    screens: {
      lg: '680px',
      md: '420px',
      sm: '380px',
      // or maybe name them after devices for `tablet:flex-row`
      tablet: '1024px',
    },
  },
}
