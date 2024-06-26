/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xsm: "360px",
        smd: "503px",
        customsection2:"450px",
        mainsection:"796px",
      },
      colors: {
        primary: "#4869E8",
      },
      backgroundImage: {
        "hero-pattern":
          "url('https://www.cubix.co/storage/app/media/home/banner-slider-img/modernizing-mobile-platforms-opt-updated-img.webp')",
      },
      img: {
       maxwidth: "none",
      },
    },
  },
  plugins: [],
};
