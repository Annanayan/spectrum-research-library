/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sr: {
          bg: "#ffffff",
          text: "#0a0a0a",
          muted: "#6b7280",
          panel: "#f5f5f5",
          button: "#111111",
          graybtn: "#e5e7eb",
          pink: "#D498E1"
        }
      },
      fontFamily: {
        display: ['Inter','ui-sans-serif','system-ui','Segoe UI','Helvetica','Arial'],
        body: ['Inter','ui-sans-serif','system-ui']
      }
    },
  },
  plugins: [],
}
