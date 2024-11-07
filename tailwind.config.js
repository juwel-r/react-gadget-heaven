/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily :{
        sora: ['Sora', 'sans-serif'],
      },
      colors:{
        primary:'#9538E2',
        secondery: '#309C08',
        darkGray: '#09080F99'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

