/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{jsx,html,tsx}"],
  theme: {
    extend: {
      colors: {
        "background": "#050A0F",
        "border": "#cccccc71",
        "emphasis": "#4AC9FF"
      },
      fontWeight: {
        "500": "500",
        "600": "600",
        "900": "900",
      },
      fontFamily: {
        "inter": "'Inter', sans-serif"
      },
      width: {
        "28%": "28%",
        "45%": "45%",
      }
    },
  },
  plugins: [],
}

