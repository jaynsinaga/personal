/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: '#0A0A0A',
          deep: '#0A0A0A',
          secondary: '#111111',
          surface: '#171717',
          elevated: '#1D1D1D',
          border: '#262626',
          'border-light': '#333333',
        },
        cream: {
          DEFAULT: '#F3EBDD',
          light: '#FAF7F2',
          muted: '#C9C0B0',
          secondary: '#918B82',
          dark: '#524E48',
          subtle: '#22201D',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.2em',
        ultra: '.28em',
      },
      fontSize: {
        'hero': 'clamp(3rem, 7.5vw, 7.5rem)',
        'section-number': 'clamp(4rem, 10vw, 9rem)',
      },
      transitionTimingFunction: {
        'editorial': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
