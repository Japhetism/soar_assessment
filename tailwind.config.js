/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '@media (min-width: 768px)': {
          '.scrollbar-hide-desktop': {
            'scrollbar-width': 'none',     /* Firefox */
            '-ms-overflow-style': 'none',  /* IE and Edge */
          },
          '.scrollbar-hide-desktop::-webkit-scrollbar': {
            display: 'none',               /* Chrome, Safari, Opera */
          },
        },
      });
    }
  ]
}

