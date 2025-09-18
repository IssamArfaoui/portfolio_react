/** @type {import('tailwindcss').Config} */
// import "preline/preline";

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        arima: ["Arima", "cursive"],
        rethink: ["Rethink Sans", "sans-serif"],
      },
    },
  },
  plugins: [
  ],
}

