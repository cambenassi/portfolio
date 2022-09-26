/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      'xxs': '200px',
      "xs": '300px',
      "sm": '465px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536'
    },
    extend: {},
  },
  plugins: [],
  "tailwindCSS.includeLanguages": { "plaintext": "javascript" }
}
