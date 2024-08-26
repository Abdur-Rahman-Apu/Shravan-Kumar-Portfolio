/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff7500",
        secondary: "#2f4362",
      },
    },
  },
  plugins: [require("daisyui")],
};
