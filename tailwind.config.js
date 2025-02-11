/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      width: {
        '1100': '1100px'
      },
      Color: {
        primary: '#f1f1f1',
        secondary1: '',
        secondary2: '',
      },
      maxWidth: {
        '600': '600px',
      }
    },
    
  },
  plugins: [],
}

