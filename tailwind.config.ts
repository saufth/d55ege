// Types
import type { Config } from 'tailwindcss'

/** Default values for sizing and spacing */
const sizingConfig = {
  breakpoints: {
    xs: '20rem', /* 320px */
    sm: '24rem', /* 384px */
    md: '28rem', /* 448px */
    lg: '32rem', /* 512px */
    xl: '36rem', /* 576px */
    '2xl': '42rem', /* 672px */
    '3xl': '48rem', /* 768px */
    '4xl': '56rem', /* 896px */
    '5xl': '64rem', /* 1024px */
    '6xl': '72rem', /* 1152px */
    '7xl': '80rem', /* 1280px */
    '8xl': '85.375rem', /* 1366px */
    '9xl': '120rem' /* 1920px */
  },
  defaults: {
    0.75: '0.1875rem', /* 3px */
    15: '3.75rem', /* 60px */
    18: '4.5rem', /* 72px */
    '9/20': '45%',
    '11/20': '55%'
  }
} as const

export default {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        // Primary - Aristotelica
        'primary-light': ['Primary Light', 'sans serif'],
        'primary-regular': ['Primary Regular', 'sans serif'],
        'primary-bold': ['Primary Bold', 'sans serif'],
        // Secondary - Proxima Soft
        'secondary-light': ['Secondary Light', 'sans serif'],
        'secondary-regular': ['Secondary Regular', 'sans serif'],
        'secondary-bold': ['Secondary Bold', 'sans serif']
      },
      colors: {
        primary: '#ee750f', // Pumpkin
        secondary: '#0089A1' // Celadon Blue
      },
      width: {
        ...sizingConfig.breakpoints,
        ...sizingConfig.defaults
      },
      maxWidth: {
        '1/2': '50%',
        screen: '100vw',
        ...sizingConfig.breakpoints
      },
      height: {
        ...sizingConfig.breakpoints,
        ...sizingConfig.defaults
      },
      padding: {
        '3%': '3%',
        '5%': '5%',
        '11%': '11%',
        ...sizingConfig.defaults
      },
      margin: {
        ...sizingConfig.defaults
      },
      zIndex: {
        60: '60',
        70: '70'
      },
      fontSize: {
        md: ['0.938rem', { lineHeight: '1.375rem' }], // 15px
        '4.5xl': ['2.5rem', { lineHeight: '2.5rem' }] // 40px
      },
      backgroundImage: {
        solutions: 'url(/images/sections/solutions.jpg)',
        history: 'url(/images/sections/history.jpg)',
        contact: 'url(/images/sections/contact.jpg)'
      },
      animation: {
        'tansition-1-3': 'tansition-1-3 20s infinite ease',
        'tansition-2-3': 'tansition-2-3 20s infinite ease',
        'tansition-3-3': 'tansition-3-3 20s infinite ease'
      },
      keyframes: {
        'tansition-1-3': {
          '0%': {
            opacity: '1'
          },
          '23%': {
            opacity: '1'
          },
          '33%': {
            opacity: '0'
          },
          '90%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          }
        },
        'tansition-2-3': {
          '0%': {
            opacity: '0'
          },
          '23%': {
            opacity: '0'
          },
          '33%': {
            opacity: '1'
          },
          '56%': {
            opacity: '1'
          },
          '66%': {
            opacity: '0'
          },
          '100%': {
            opacity: '0'
          }
        },
        'tansition-3-3': {
          '0%': {
            opacity: '0'
          },
          '56%': {
            opacity: '0'
          },
          '66%': {
            opacity: '1'
          },
          '90%': {
            opacity: '1'
          },
          '100%': {
            opacity: '0'
          }
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class'
    })
  ]
} satisfies Config
