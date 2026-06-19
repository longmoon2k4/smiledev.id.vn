/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./gta5/index.html",
    "./gta5/src/**/*.{js,ts,jsx,tsx}",
    "./minecraft/index.html",
    "./minecraft/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: '#f8f9fa',
        dark: '#111827',
        deepDark: '#0a0a0a',
        fpt: '#F26F21',
        cyan: '#00b4d8',
        cyanBright: '#00FFFF',
        electric: '#0077b6',
        electricBright: '#0066FF',
        glass: 'rgba(255, 255, 255, 0.6)',
        glassDark: 'rgba(255, 255, 255, 0.05)',
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.03))',
      },
    },
  },
  plugins: [],
}
