/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans'],
      },
      backgroundImage: {
        'main-light': 'linear-gradient(135deg, hsla(45, 29%, 97%, 1) 81%, hsla(60, 100%, 97%, 1) 100%)',
        'main-dark': 'linear-gradient(315deg, hsla(210, 75%, 4%, 1) 1%, hsla(210, 78%, 7%, 1) 4%, hsla(210, 90%, 10%, 1) 24%, hsla(210, 100%, 15%, 1) 79%, hsla(210, 100%, 20%, 1) 100%)',
        'card-dark-gradient': 'linear-gradient(68deg, rgba(0,51,102,1) 75%, rgba(204,204,51,1) 98%);',
        'chip-gradient': 'linear-gradient(135deg, hsla(242, 47%, 34%, 1) 24%, hsla(221, 74%, 40%, 1) 42%, hsla(212, 100%, 48%, 1) 73%, hsla(213, 99%, 47%, 1) 89%, hsla(213, 97%, 46%, 1) 96%)',
      },
      textColor: {
        'company-blue': '#003366',
        'company-yellow': '#cccc33',
        'company-grey': '#cccccc',
      },
      backgroundColor: {
        'company-blue': '#003366',
        'company-yellow': '#cccc33',
        'company-grey': '#cccccc',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}