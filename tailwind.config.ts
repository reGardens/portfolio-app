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
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
  darkMode: 'class',
};
export default config;