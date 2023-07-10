/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "light-toggle-bg": "#A9DCFD",
        "light-active-toggle": "#D8EEFF",
        "dark-toggle-bg": "#1B6A9C",
        "dark-active-toggle": "#003661",
        "light-display-bg-theme": {
          DEFAULT: "linear-gradient(#FEFEFE, #F9F9F9, #F3F3F3, #E5E5E5)",
        },
        "dark-display-bg-theme": {
          DEFAULT: "linear-gradient(#373737, #252628, #000309)",
        },
        "light-keypad-bg-color": (theme) => ({
          0: "linear-gradient(326deg, rgba(138,212,254,1) 60%, rgba(234,234,234,1) 100%)",
        }),
        "light-keypad-color": "#ffffff4d",
        "dark-keypad-bg-theme": "rgba(0, 34, 53, 0.4)",
        "dark-keypad-color": "rgba(5, 5, 5, 0.3)",
      },
      boxShadow: {
        "light-key-shadow": "0px -5px 70px 0px rgba(0, 0, 0, 0.10)",
      },
    },
  },
  plugins: [],
};
