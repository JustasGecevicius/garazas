const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      aspectRatio: {
        "4/3": "4 / 3",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".transform-center": {
          transform: "translate(-50%, 0)",
          left: "50%",
        },
        ".transform-v-center": {
          transform: "translate(0, -50%)",
          top: "50%",
        },
        ".flex-row": {
          display: "flex",
          "flex-direction": "row",
        },
        ".flex-col": {
          display: "flex",
          "flex-direction": "column",
        },
        ".center": {
          "justify-content": "center",
          "align-items": "center",
        },
      });
    }),
  ],
};
