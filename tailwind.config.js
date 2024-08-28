import { nextui } from '@nextui-org/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'yellow-green': '#E5FF4A',
        'gray-white': '#F2F2F2',
        'text': '#333333',
        'white-bg': '#FAFAFA'
      },
      fontFamily: {
        titleBold: ['titleBold', 'sans-serif'],
        workSans: ['sansText', 'sans-serif'],
        interText: ['interText', 'sans-serif'],
        interTextBold: ['interTextBold', 'sans-serif'],
      },
    },
  },
  plugins: [nextui({
    themes: {
      "normal": {
        extend: "dark",
        colors: {
          background: "#04020D",
          foreground: "#FAFAFA",
          primary: {
            50: "#3B096C",
            100: "#520F83",
            200: "#7318A2",
            300: "#9823C2",
            400: "#c031e2",
            500: "#DD62ED",
            600: "#F182F6",
            700: "#FCADF9",
            800: "#FDD5F9",
            900: "#FEECFE",
            DEFAULT: "#E5FF4A",
            foreground: "#333333"
          },
          focus: "#F182F6",
        },
        layout: {
          disabledOpacity: "0.3",
          radius: {
            small: "4px",
            medium: "6px",
            large: "8px",
          },
          borderWidth: {
            small: "1px",
            medium: "2px",
            large: "3px",
          },
        },
      },
    },
  })],
};