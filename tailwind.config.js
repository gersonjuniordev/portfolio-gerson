/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        'gray': {
          800: '#1F1F1F',
          900: '#121212',
        },
        'accent': {
          light: '#E2E8F0',  // Cinza claro elegante
          main: '#F8FAFC',   // Branco suave
          dark: '#94A3B8'    // Cinza médio
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      },
      backgroundImage: {
        'noise': "url('/noise.png')",
        'gradient-subtle': 'linear-gradient(to right, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
      }
    },
  },
  plugins: [],
}

