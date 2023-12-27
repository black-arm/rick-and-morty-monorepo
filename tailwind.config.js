/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./apps/**/*.{html,ts,css,scss}",
     "./libs/**/*.{html.ts,css,scss}"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["lemonade"],
  },
}

