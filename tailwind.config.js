/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sr: {
          bg: {
            base: "#FFFFFF",
            soft: "#F4F0FF",
            yellow: "#FFFBEB"
          },
          text: {
            primary: "#0F0F14",
            secondary: "#6B7280"
          },
          button: "#111111",
          graybtn: "#e5e7eb",
          footer: {
            bg: "#111827",
            text: "#E5E7EB"
          }
        }
      },
      fontFamily: {
        display: ['Inter','ui-sans-serif','system-ui','Segoe UI','Helvetica','Arial'],
        body: ['Inter','ui-sans-serif','system-ui']
      },
      container: {
        center: true,
        padding: '1.5rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1200px',
        },
      },
      spacing: {
        'section': '4rem',
        'section-sm': '2rem',
        '18': '4.5rem',
      },
      borderRadius: {
        'card': '1rem',
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'card-hover': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      }
    },
  },
  plugins: [],
}
