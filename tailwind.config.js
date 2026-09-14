/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#15161C",
        panel: "#1D1F28",
        ivory: "#F7F4EE",
        stone: "#9EA1B0",
        line: "#2A2C38",
        blue: {
          DEFAULT: "#6E8FE8",
          dark: "#3E5FC4",
        },
      },
      fontFamily: {
        display: ["Instrument Serif", "serif"],
        body: ["Inter", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(80% 60% at 50% 0%, rgba(110,143,232,0.12) 0%, rgba(21,22,28,0) 60%)",
      },
    },
  },
  plugins: [],
};
