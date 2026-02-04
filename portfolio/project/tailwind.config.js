/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f1fa',
          100: '#d0d3f5',
          200: '#b1b5f0',
          300: '#9297eb',
          400: '#7279e6',
          500: '#535be1',
          600: '#3342dc',
          700: '#2835c8',
          800: '#1e29b4',
          900: '#141ca0',
        },
        secondary: {
          50: '#f6f0ff',
          100: '#e8d8ff',
          200: '#d5b8ff',
          300: '#c49aff',
          400: '#b37cff',
          500: '#a25eff',
          600: '#9040ff',
          700: '#8122ff',
          800: '#7303ff',
          900: '#6500e6',
        },
        accent: {
          50: '#fcf8ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
        },
        navy: {
          50: '#f0f1f8',
          100: '#dadcea',
          200: '#bbc2dc',
          300: '#98a2cb',
          400: '#7786bb',
          500: '#5c6cad',
          600: '#48569a',
          700: '#3a4580',
          800: '#2e3665',
          900: '#0A0F1C',
        },
        success: {
          50: '#edfcf4',
          500: '#22c55e',
          900: '#14532d',
        },
        warning: {
          50: '#fffaeb',
          500: '#f59e0b',
          900: '#78350f',
        },
        error: {
          50: '#fef2f2',
          500: '#ef4444',
          900: '#7f1d1d',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 4px 30px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};