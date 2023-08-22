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
          base: "#26dc9c",
          100: "#d4f8eb",
          200: "#a8f1d7",
          300: "#7deac4",
          400: "#51e3b0",
          500: "#26dc9c",
          600: "#1eb07d",
          700: "#17845e",
          800: "#0f583e",
          900: "#082c1f",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
