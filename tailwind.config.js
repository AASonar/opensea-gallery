module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        monda: ["Monda, sans-serif"],
        workSans: ["'Work Sans', sans-serif"],
      },
      colors: {
        purpleBG: "#28293d",
        lightPurple: "#313248",
        lightPurpleOutline: "#464874",
        teal: "#74E0E6",
      },
    },
  },
  plugins: [],
};
