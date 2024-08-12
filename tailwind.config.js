/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: { sans: ["Red Hat Text", "ui-sans-serif"] },
    screens: {
      mobile: { min: "0px", max: "375px" },
    },
    extend: {
      fontFamily: {
        "red-hat-txt": "Red Hat Text",
        "red-hat-itlc": "Red Hat Text Italic",
      },
      colors: {
        brand: {
          red: "hsl(14, 86%, 42%)",
          green: "hsl(159, 69%, 38%)",
          sand: "#FCF8F5",
          rose: {
            50: "hsl(20, 50%, 98%)",
            100: "hsl(13, 31%, 94%)",
            300: "hsl(14, 25%, 72%)",
            400: "hsl(7, 20%, 60%)",
            500: "hsl(12, 20%, 44%)",
            900: "hsl(14, 65%, 9%)",
          },
        },
      },
    },
  },
  plugins: [],
};
