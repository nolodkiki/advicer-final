/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'blue-100': 'hsl(217, 19%, 38%)',
      'blue-200': 'hsl(217, 19%, 24%)',
      'blue-300': 'hsl(218, 23%, 16%)',
      'cyan': 'hsl(193, 38%, 86%)',
      'green': 'hsl(150, 100%, 66%)',
    },
    fontFamily: {
      sans: ['Manrope', 'sans-serif'],
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widest: '.25em',
      widestXL: '.4em'
    },
    boxShadow: {
      'shadow': '0px 0px 40px 14px rgba(51, 255, 194, 0.2)'
    }
  },
  plugins: [],
}

