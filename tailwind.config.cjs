/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "pale-blue": "hsl(225, 100%, 94%)",
        "bright-blue": "hsl(245, 75%, 52%)",
        "very-pale-blue": "hsl(225, 100%, 98%)",
        "desaturated-blue": "hsl(224, 23%, 55%)",
        "dark-blue": "hsl(223, 47%, 23%)",
      },
    },
  },
  plugins: [],
};
