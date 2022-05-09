/* eslint-disable node/no-unpublished-require */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        normal: '0px 2px 6px 0px rgba(185, 191, 146, 0.51)'
      },
      colors: {
        themeGreen: '#03D34A'
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
};
