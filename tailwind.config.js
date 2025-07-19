/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // 1940s British Government Colors
        'wartime': {
          50: '#f8f6f0',
          100: '#f0ebe0',
          200: '#e6dcc8',
          300: '#d4c5a0',
          400: '#c4b078',
          500: '#b8a05e',
          600: '#a08c52',
          700: '#857346',
          800: '#6d5f3d',
          900: '#5a4f35',
        },
        'british': {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#102a43',
        },
        'victory': {
          50: '#fef7f0',
          100: '#feecdc',
          200: '#fcd9bd',
          300: '#fdba8c',
          400: '#ff8a4c',
          500: '#ff5a1f',
          600: '#d03801',
          700: '#b43403',
          800: '#8a2c0d',
          900: '#73230d',
        },
        'heritage': {
          50: '#faf8f5',
          100: '#f2ede4',
          200: '#e8dcc7',
          300: '#d9c7a3',
          400: '#c9b07d',
          500: '#b8975f',
          600: '#a17c4a',
          700: '#86653e',
          800: '#6e5235',
          900: '#5a432c',
        }
      },
      fontFamily: {
        'times': ['Times New Roman', 'Times', 'serif'],
        'garamond': ['Garamond', 'Times New Roman', 'serif'],
        'typewriter': ['Courier New', 'Courier', 'monospace'],
      },
      backgroundImage: {
        'paper': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23f4f1e8\" fill-opacity=\"0.4\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"1.5\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
        'vintage-lines': "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23d4c5a0\" fill-opacity=\"0.1\" fill-rule=\"evenodd\"%3E%3Cpath d=\"m0 40l40-40h-40v40zm40 0v-40h-40l40 40z\"/%3E%3C/g%3E%3C/svg%3E')",
      },
      boxShadow: {
        'vintage': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(139, 69, 19, 0.06)',
        'paper': 'inset 0 1px 3px 0 rgba(139, 69, 19, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'typewriter': '0 2px 4px 0 rgba(0, 0, 0, 0.1), inset 0 2px 0 0 rgba(255, 255, 255, 0.15)',
      },
      animation: {
        'typewriter': 'typewriter 2s steps(40) 1s 1 normal both',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
      },
      keyframes: {
        typewriter: {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    },
  },
  plugins: [],
};