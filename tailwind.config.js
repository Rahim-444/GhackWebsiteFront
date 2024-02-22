/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {colors: {
      'custom-blue':'#2C2D5B',
      'custom-orange':'#F67366',
      'custom-grey':'#333333',
      }},
    
  },
  plugins: [],
};
