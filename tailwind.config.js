/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#020916",
        accent: {DEFAULT: "#CEFF7E", 400: '#C2FC5E'},
        description: '#9CA3AF'
      },
      fontFamily: {
        'dmsans': ["DM Sans", 'sans-serif']
      },
      maxWidth: {
        'wtf': '82rem'
      },
      borderRadius: {
        'wtf': '0.625rem',
        'wtftlr': '0.625rem 0.625rem 0 0',
        'wtfxl': '1.25rem'

      },
      boxShadow: {
        'inner-light': 'inset 0 2px 0 0 rgba(255, 255, 255, 0.15)',
        'inner-light-sm': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.15)'
      },
      animation: {
        slowSpin: 'spin 16s infinite linear'
      }
    },
  },
  plugins: [],
};
