/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xsm: "360px",
      },
      colors: {
        primary: "#0643d6",
      },
      backgroundImage: {
        "hero-pattern":
          "url('https://www.cubix.co/storage/app/media/home/banner-slider-img/modernizing-mobile-platforms-opt-updated-img.webp')",
      },
    },
  },
  plugins: [],
};
