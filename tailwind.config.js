/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        magenta: {
          500: '#FF00FF',
          600: '#E600E6',
        },
        cyan: {
          500: '#00FFFF',
          600: '#00E6E6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%': { transform: 'translateX(-2px) skew(-5deg)' },
          '20%': { transform: 'translateX(2px) skew(5deg)' },
          '30%': { transform: 'translateX(-1px) skew(-3deg)' },
          '40%': { transform: 'translateX(1px) skew(3deg)' },
          '50%': { transform: 'translateX(-1px) skew(-2deg)' },
          '60%': { transform: 'translateX(1px) skew(2deg)' },
          '70%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};