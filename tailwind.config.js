///** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     //"./libs/**/*.{html.ts,css,scss}"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["lemonade"],
  },
}

