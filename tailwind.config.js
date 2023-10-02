module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  plugins: [],
  theme: {
    extend: {
      colors: {
        'others-white': '#fff',
        'others-black': '#000',
        'primary-500': '#1bac4b',
        'greyscale-300': '#e0e0e0',
        'greyscale-900': '#212121'
      },
      spacing: {},
      fontFamily: {
        'body-xlarge-medium': 'Urbanist'
      },
      borderRadius: {
        '41xl': '60px',
        '81xl': '100px'
      }
    },
    fontSize: {
      base: '16px',
      lg: '18px',
      '29xl': '48px',
      inherit: 'inherit'
    },
    screens: {
      lg: '680px',
      md: '420px',
      sm: '380px',
      // or maybe name them after devices for `tablet:flex-row`
      tablet: '1024px'
    }
  }
}
