/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode:"jit",
  theme: {
    fontfamily:{
      Roboto: ["Roboto","sans-serif"],
      Poppins:["Poppins","sans-serif"],
    },
    extend: {
      screens:{
        "1000px": "1050px",
        "1100": "1110px",
        "800px": "800px",
        "1300px":"1300px",
        "400px" : "400px"
      },
    },
  },
  plugins: [],
}

