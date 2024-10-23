/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Include your HTML file
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JS and JSX files in src
  ],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ["Pacifico", "cursive"], // Adding the custom font
      },
    },
  },
  plugins: [],
}

