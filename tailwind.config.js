/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E40AF', // Industrial Blue
          dark: '#1E3A8A',
        },
        secondary: {
          DEFAULT: '#F97316', // Orange
          dark: '#EA580C',
        },
        industrial: {
          light: '#F3F4F6',
          dark: '#1F2937',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
