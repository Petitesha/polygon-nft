/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    colors: {
      header: {
        100: '#6A45D0',
        200: '#F5F5F5',
        300: '#151515',
        400: 'white',
        500: '#787878',
      },
    },
    fontSize: {
        100: '18px',
        200: '48px',
        300: '36px',
        400: '14px',
        600: '1px',
    },
    fontFamily: {
      'coda': 'Coda, cursive',
      'circular':  'Circular Std Book',
    },
    extend: {
      backgroundImage: {
        'Art': "url('/src/Assets/Images/Art.png')",
        'Sports': "url('/src/Assets/Images/Sports.png')",
        'Music': "url('/src/Assets/Images/Music.png')",
        'Videos': "url('/src/Assets/Images/Videos.png')",
        'More': "url('/src/Assets/Images/More.png')",
        'overlay': 'linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))',
      },
    },
  },
  plugins: [],
}
