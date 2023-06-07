/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-page": "#050A0F",
        "border-page": "#cccccc71",
        "emphasis-page": "#4AC9FF"
      },
      fontFamily: {
        "inter": "'Inter', sans-serif"
      },
    },
  },
  plugins: [],
}

