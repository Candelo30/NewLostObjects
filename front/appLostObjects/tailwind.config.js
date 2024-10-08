/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "blue-marguerite": {
          50: "#f2f3fb",
          100: "#e8eaf7",
          200: "#d5d8f0",
          300: "#bbbfe6",
          400: "#9fa0da",
          500: "#8b87cd",
          600: "#776cbb",
          700: "#695da5",
          800: "#564d86",
          900: "#48436c",
          950: "#2b273f",
        },
      },
    },
  },
  plugins: [],
};
