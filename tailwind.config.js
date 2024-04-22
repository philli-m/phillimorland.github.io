// tailwind.config.js

module.exports = {
  theme: {
    extend: {
      colors: {
        orange: "#f96d00",
        lightgrey: "#393e46",
        purple: "#0f001b",
        gray: "#222831",
      },
      dropShadow: {
        btn: "0 10px 30px rgba(255, 255, 255, 0.25)",
        "btn-hover": "0 20px 80px rgba(255, 255, 255, 0.50)",
      },
      textDecoration: {
        "underline-purple": ["underline", "purple"],
      },
      fontFamily: {
        body: ["Arial", "sans-serif"],
      },
    },
    variants: {
      extend: {
        // Custom variants here
      },
    },
    plugins: [
      // Custom plugins here
    ],
  };
