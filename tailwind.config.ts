import type { Config } from 'tailwindcss';

const config: Config = {
  
  darkMode: 'class', 
  
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f8fafc',
          100: '#eef2ff',
          500: '#5b21b6',
          700: '#4c1d95',
        },
      },
    },
  },
  plugins: [],
};

export default config;