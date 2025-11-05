/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4ff',
          100: '#e6edff',
          200: '#d1deff',
          300: '#b8c8ff',
          400: '#9ca8ff',
          500: '#667eea',
          600: '#5a6fd8',
          700: '#4c5cc7',
          800: '#3d4bb5',
          900: '#2d3aa3',
        },
        secondary: {
          50: '#faf7ff',
          100: '#f4ecff',
          200: '#e8d8ff',
          300: '#d9bfff',
          400: '#c7a2ff',
          500: '#764ba2',
          600: '#6a4190',
          700: '#5e377e',
          800: '#522d6c',
          900: '#46235a',
        },
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease forwards',
        'slide-up': 'slideUp 0.8s ease forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-dot': 'pulse 2s infinite',
      },
      keyframes: {
        fadeIn: {
          to: { opacity: '1' }
        },
        slideUp: {
          to: { 
            transform: 'translateY(0)',
            opacity: '1'
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
