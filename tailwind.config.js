/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Custom columns for the grid
        30: "repeat(30, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
