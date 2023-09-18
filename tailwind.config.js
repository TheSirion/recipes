/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {
    extend: {
      height: {
        '128': '26rem',
      }
    },
  },
  plugins: [],
}

