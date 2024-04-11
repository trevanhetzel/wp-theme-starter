/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.php'],
  theme: {
    extend: {
      fontSize: {
        'md': '.938rem',
        'l': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.313rem',
        '3xl': '2.188rem',
        '4xl': '2.5rem',
        '5xl': '3.438rem',
        '6xl': '5rem'
      },
      fontFamily: {
        'serif': ['Vidaloka', 'serif']
      },
      colors: {
        'gold': '#EFC06E',
        'light-gold': '#FADEAA',
        'grey': '#EBEBEB',
        'purple': '#332676'
      }
    },
  },
  plugins: [],
}

