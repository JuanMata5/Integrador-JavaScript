/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        'body-rgb': 'rgb(25, 225, 225)', // Cambia estos valores por los que necesites
      },
      maxWidth: {
        '1280': '1280px',
        '990': '990px',
      },
      minWidth: {
        '320': '320px',
        '956': '956px',
      },
      transitionDuration: {
        '1000': '1000ms',
      sectionHidden: {
        'hidden': 'display:none ',
      },
    },
  },
  plugins: [],
}
}