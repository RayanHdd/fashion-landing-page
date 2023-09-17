/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'green-chromatic':'#224F34',
        'green-pallid':'#C2EFD4',
        'green-normal':'#267D49',
        dark :'#373737',
        'dark-smooth' :'#454545',
        white: '#FFFFFF',
        'grey-normal': '#6F6F6F',
        'green-pallid2':'#A3F3BE',
      },
      fontFamily: {
        elephant: "Elephant",
        "poppins-medium": "Poppins-Medium",
        "poppins-semiBold": "Poppins-SemiBold",
        "rufina-bold": "Rufina-Bold",
        "robotoSlab-medium": "RobotoSlab-Medium",
        "robotoSlab-bold": "RobotoSlab-Bold",
        "robotoSerif-SemiBold": "RobotoSerif-SemiBold"
      },
    },
  },
  plugins: [],
}