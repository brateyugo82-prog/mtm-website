/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mtm: {
          red: "#C00000",   // MTM Hauptfarbe (Logo-Rot)
          gray: "#F5F5F5",  // Hintergrundfarbe
          dark: "#171717",  // Standard-Textfarbe
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
        mono: ["var(--font-roboto-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
