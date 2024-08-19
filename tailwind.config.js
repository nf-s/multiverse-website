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
          base: "#bdf214",
          50: "#fcffe5",
          100: "#f5ffc7",
          200: "#eaff96",
          300: "#d8fd59",
          400: "#bdf214",
          500: "#a4d909",
          600: "#7fae02",
          700: "#5f8407",
          800: "#4d680c",
          900: "#40580f",
          950: "#213102",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
