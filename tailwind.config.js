const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1170px',
        '2xl': '1170px',
      },
    },
    colors: {
      // 'bg-theme-color': '#5230A2',
      // 'bg-theme-color2': '#6948B7',
      // 'bg-theme-color3': '#808080',
      // 'bg-theme-color4': '#A7B4C0',
      // 'bg-theme-color5': '#898A8D',
      // 'bg-theme-color6': '#4F5154',
      // 'bg-theme-color7': '#254254',
      // 'bg-theme-color8': '#232529',
      // 'bg-theme-color9': '#F9F8FB',
      // 'bg-theme-color10': '#200A52',
      // 'bg-theme-color11': '#140539',
      // 'bg-theme-color12': '#44E0B7',

      'color-theme': '#5230A2',
      'color-theme-2': '#6948B7',
      'color-theme-3': '#808080',
      'color-theme-4': '#A7B4C0',
      'color-theme-5': '#898A8D',
      'color-theme-6': '#4F5154',
      'color-theme-7': '#254254',
      'color-theme-8': '#232529',
      'color-theme-9': '#F9F8FB',
      'color-theme-10': '#200A52',
      'color-theme-11': '#140539',
      'color-theme-12': '#44E0B7',
      'color-white': '#ffffff',
      'color-black': '#000000'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
