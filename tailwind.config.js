/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        wedding: {
          burgundy: "#3a1a29",
          olive: "#9e9820",
          rust: "#8f481d",
          cream: "#f7f4ec",
        },
      },
    },
  },
  plugins: [],
};
