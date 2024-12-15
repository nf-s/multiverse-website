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
          base: "#FEC816",
          50: "#FFF9E6",
          100: "#FFF4D1",
          200: "#FFE9A4",
          300: "#FEDD71",
          400: "#FED343",
          500: "#FEC816",
          600: "#DAA801",
          700: "#A27D01",
          800: "#705601",
          900: "#382B00",
          950: "#191300",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
