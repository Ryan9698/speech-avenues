/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // tailwind.config.js
  theme: {
    extend: {
      fontFamily: {
        dancing: ['"Dancing Script"', "cursive"],
      },
      // If you've already extended other theme properties, include them here as well
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              fontFamily: `${theme("fontFamily.dancing")}`,
            },
            p: {
              marginBottom: "1em",
              lineHeight: "1.75",
            },
            a: {
              color: theme("colors.blue.500"),
              "&:hover": {
                color: theme("colors.blue.700"),
              },
              textDecoration: "underline",
            },
            // Add more custom styles as needed
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // Include other plugins as needed
  ],
};
