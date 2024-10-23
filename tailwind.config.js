const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#020916",
        accent: { DEFAULT: "#008be9", 400: "#3eb1ed" },
        description: "#9CA3AF",
      },
      maxWidth: {
        wtf: "82rem",
      },
      borderRadius: {
        wtf: "0.625rem",
        wtftlr: "0.625rem 0.625rem 0 0",
        wtfxl: "1.25rem",
      },
      boxShadow: {
        "inner-light": "inset 0 2px 0 0 rgba(255, 255, 255, 0.15)",
        "inner-light-sm": "inset 0 1px 0 0 rgba(255, 255, 255, 0.15)",
      },
      animation: {
        slowSpin: "spin 16s infinite linear",
      },
      textShadow: {
        default: "0 4px 4px rgba(0, 0, 0, 1)",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
