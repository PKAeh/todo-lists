/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        blueShadow: "0px 0px 8px rgba(19,101,239,0.3)",
      },
    },
  },
  plugins: [daisyui],
};
