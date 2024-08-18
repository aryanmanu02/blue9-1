const { Config } = require('tailwindcss');

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideIn: {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        fadeIn: 'fadeIn 1s ease-out',
        slideIn: 'slideIn 1s ease-out',
        fadeInUp: "fadeInUp 0.8s ease-out",
      },
      // animation: {
      //   fadeInUp: "fadeInUp 0.8s ease-out",
      // },
      colors: {
        primary: '#F60',
        darkBlue: '#0B1B35',
        customGray: '#8A898E',
        lightBlue: '#1E0E62',
        customLightGray: '#15143966',
      },
      fontSize: {
        normal: '1.125rem',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

module.exports = config;
