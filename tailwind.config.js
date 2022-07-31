/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cta: "",
        logoBg: "#567191",
        purple: "#5B6BE1",
        lightBlue: "#edf2fc",
        black1: "#394759",
        lightBlue2: "#8193A8",
        blackLight: "rgba(91, 107, 225, 0.04)",
        outer_container: "rgba(255, 255, 255, 0.8)",
        gray1: "#F5F6F7",
      },
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
      },
      gridTemplateColumns: {
        mainBody: "2fr 4fr",
      },
    },
  },
  plugins: [],
};
