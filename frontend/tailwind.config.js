/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightOrange: "#fea058",
        darkOrange: "#ff862d",
        bgColor: "#ffe6cc",
      },
    },
  },
  plugins: [require("daisyui")],
};
