/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './modules/**/*.{js,ts,jsx,tsx}',
    './helpers/**/*.{js,ts,jsx,tsx}'
  ],
  safelist: [
    'lg:grid-cols-2',
    'lg:grid-cols-3',
    'lg:grid-cols-4',
    'lg:grid-cols-5',
    'lg:grid-cols-6',
    'lg:grid-cols-7',
    'lg:grid-cols-8',
    'md:grid-cols-2',
    'md:grid-cols-3',
    'md:grid-cols-4',
    'md:grid-cols-5',
    'md:grid-cols-6',
    'md:grid-cols-7',
    'md:grid-cols-8',
    'sm:grid-cols-2',
    'sm:grid-cols-3',
    'sm:grid-cols-4',
    'sm:grid-cols-5',
    'sm:grid-cols-6',
    'sm:grid-cols-7',
    'sm:grid-cols-8',
    'w-3.5',
    'w-4',
    'w-5',
    'w-6',
    'w-8',
    'w-12',
    'h-3.5',
    'h-4',
    'h-5',
    'h-6',
    'h-8',
    'h-12',
    'bg-primary-dark',
    'from-primary',
    'to-secondary',
    'to-primary',
    'from-secondary',
    'rounded-3xl',
    'duration-150',
    'bg-black',
    'bg-red-100',
    'bg-red-100',
    'bg-green-100',
    'bg-blue-100',
    'text-red-800',
    'text-red-800',
    'text-green-800',
    'text-blue-800',
    'opacity-10',
    'opacity-20',
    'opacity-30',
    'opacity-40',
    'opacity-50',
    'opacity-60',
    'opacity-70',
    'opacity-80',
    'opacity-90',
    'border-b-2'
  ],

  theme: {
    extend: {
      borderRadius: {
        '4xl': '2.25rem'
      },
      boxShadow: {
        '01': '0px 8px 18px 10px rgba(0, 0, 0, .4);',
        '02': '0 10px 20px 0 rgb(0, 0, 0, .08)',
        '03': '0 10px 20px 0 rgb(0, 0, 0, .15)'
      },
      colors: {
        black: '#1A181B',
        gray: {
          DEFAULT: '#9BA1A7',
          dark: '#1C1C1C',
          light: '#f1f1f1'
        },
        primary: {
          DEFAULT: '#f6ebcd',
          dark: '#deab53',
          darker: '#ad853f',
          light: '#fefae4'
        },
        secondary: {
          DEFAULT: '#0c7b79',
          blue: '#061137',
          brown: '#C8A84E',
          gold: '#F6EDD9',
          purple: {
            DEFAULT: '#8DA1FF',
            dark: '#747496',
            light: '#EEEDFF'
          }
        }
      },
      fontFamily: {
        lato: ['var(--font-lato)'],
        montserrat: ['var(--font-montserrat)'],
        poppins: ['var(--font-poppins)'],
        raleway: ['var(--font-raleway)'],
        roboto: ['var(--font-roboto)'],
      },
      gridTemplateColumns: {
        'icon-text': '14px minmax(0, 1fr)',
        sidebar: '16rem minmax(0, 1fr)'
      },
      spacing: {
        18: '4.5rem'
      },
      transitionDuration: {
        2000: '2000ms'
      }
    }
  }
};
