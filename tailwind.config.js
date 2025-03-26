/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FF4D8D', // Bright pink
          DEFAULT: '#FF1A75', // Medium pink
          dark: '#CC0052'  // Dark pink
        },
        secondary: {
          light: '#018dd2', // Bright blue
          DEFAULT: '#0171aa', // Medium blue
          dark: '#015582'  // Dark blue
        },
        accent: {
          orange: '#FF7A3D', // Bright orange
          pink: '#FF3366',   // Vibrant pink
          blue: '#018dd2',   // Specified blue
          purple: '#8B31FF'  // Deep purple
        }
      },
      fontFamily: {
        sans: ['Nunito', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'gradient-rainbow': 'linear-gradient(45deg, #FF4D8D, #018dd2, #FF7A3D, #8B31FF)',
      }
    },
  },
  plugins: [],
};