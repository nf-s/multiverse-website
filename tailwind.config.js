/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-roboto)"],
        mono: ["var(--font-roboto-mono)"],
      },
      colors: {
        primary: {
          base: "#88ec26",
          50: "#f4ffe6",
          100: "#e6fec9",
          200: "#cefc9a",
          300: "#acf75f",
          400: "#88ec26",
          500: "#6cd30f",
          600: "#52a907",
          700: "#3f800b",
          800: "#34650f",
          900: "#2e5512",
          950: "#143003",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
