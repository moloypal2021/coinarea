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
        success: {
          DEFAULT: "#22C062",
          alt: "#31AF68",
        },
        info: "#2F80FA",
        danger: "#FF0000",
        warning: "#FD9902",
        paragraph: "#6E8095",
        mute: "#CFCED6",
      },
      boxShadow: {
        d: "0px 10px 30px rgba(0, 0, 0, 0.1)",
        "inner-d": "inset 0px 4px 4px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
