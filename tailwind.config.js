module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        "betterhover": { raw: "(hover: hover)" },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
