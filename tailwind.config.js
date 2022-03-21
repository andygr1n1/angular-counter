const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    fontFamily: {
      sexy: ["Inspiration", ...defaultTheme.fontFamily.mono],
    },
    extend: {},
  },
  plugins: [],
};
