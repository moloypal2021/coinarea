module.exports = {
  purge: {
    enabled: true,
    content: ["./public/**/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "light-nav": "#F3F5F6",
        success: "#22C062",
        danger: "#FF0000",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
