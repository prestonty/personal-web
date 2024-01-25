/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'cloudBurst': '#1e2949',
    },
    extend: {},
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
}

