/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: { 
    fontFamily: {
     'unisans' : ["logofont",],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'link' : '#1a97da',
      'orange': '#fea918',
      'green': '#57F287',
      'white': '#FFFFFF',
      'blurple': '#5865F2',
      'lightgray': '#424549',
      'gray': '#36393e',
      'notblack': '#282b30',
      'black': '#1e2124'
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
      '9xl': '7rem',
      '10xl': '8rem',
      '11xl': '9rem',
      '12xl': '10rem',
      '14xl': '11rem',
      '16xl': '12rem',
      '17xl': '13rem',
      
      
    }
  },
  plugins: [],
}