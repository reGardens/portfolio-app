import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
    ],
  theme: {
    extend: {
      colors: {
        traditionalColor100: '#F8DCCE',
        traditionalColor200: '#F2BBA0',
        traditionalColor300: '#EB9B73',
        traditionalColor400: '#E47D49',
        traditionalColor500: '#dd6022',
        traditionalColor600: '#B14D1B',
        traditionalColor700: '#853A14',
        traditionalColor800: '#59260D',
        traditionalColor900: '#2C1307',

        darkColor100: '#B9C1D4',
        darkColor200: '#7E8BA9',
        darkColor300: '#4E5C7E',
        darkColor400: '#293654',
        darkColor500: '#0F172A',
        darkColor600: '#0C1221',
        darkColor700: '#090E18',
        darkColor800: '#060910',
        darkColor900: '#030508',
      },
      keyframes: {
        'gentle-float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'flag-wave': {
          '0%, 100%': { transform: 'rotate(0deg) skewX(0deg)' },
          '25%': { transform: 'rotate(1deg) skewX(2deg)' },
          '50%': { transform: 'rotate(0deg) skewX(0deg)' },
          '75%': { transform: 'rotate(-1deg) skewX(-2deg)' },
        },
        'flag-roll': {
          '0%, 100%': { transform: 'perspective(400px) rotateY(0deg)' },
          '25%': { transform: 'perspective(400px) rotateY(-8deg)' },
          '50%': { transform: 'perspective(400px) rotateY(0deg)' },
          '75%': { transform: 'perspective(400px) rotateY(8deg)' },
        },
        'flag-realistic': {
          '0%': { transform: 'perspective(600px) rotateY(0deg) scaleX(1)' },
          '25%': { transform: 'perspective(600px) rotateY(5deg) scaleX(0.98)' },
          '50%': { transform: 'perspective(600px) rotateY(0deg) scaleX(1)' },
          '75%': { transform: 'perspective(600px) rotateY(-5deg) scaleX(0.98)' },
          '100%': { transform: 'perspective(600px) rotateY(0deg) scaleX(1)' },
        }
      },
      animation: {
        'gentle-float': 'gentle-float 3s ease-in-out infinite',
        'flag-wave': 'flag-wave 2s ease-in-out infinite',
        'flag-roll': 'flag-roll 2.5s ease-in-out infinite',
        'flag-realistic': 'flag-realistic 2s ease-in-out infinite',
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
  darkMode: 'class',
};
export default config;