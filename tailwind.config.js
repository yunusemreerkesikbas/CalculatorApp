/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "light-toggle-bg": "#A9DCFD",
        "light-active-toggle": "#D8EEFF",
        "dark-toggle-bg": "#1B6A9C",
        "dark-active-toggle": "#003661",
        "light-key-color": "#ffffff4d",
        "light-keypad-theme": "#A9DCFD",
        "dark-keypad-theme": "#3D76AB",
        "dark-key-color": "rgba(5, 5, 5, 0.3)",
      },
      boxShadow: {
        "light-keypad-shadow": "0px -5px 70px 0px rgba(0, 0, 0, 0.10)",
        "dark-keypad-shadow": "0px -5px 70px 0px rgba(0, 0, 0, 0.10)",
      },
    },
  },
  plugins: [],
};
