/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        'extra-loose': '3.1',
       
      },
      colors: {
        'custom-green-opacity': 'rgba(1, 72, 40, 0.15)',
        'bg-custom-green-opacity':'rgba(1, 72, 40, 0.8)',
        'bg-custom-yellow-opacity':' rgba(255, 187, 4, 0.2)',
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.2rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },

      padding:{
        'xs':'5px',
        'custom':'20px'

      },

      margin:{
        'custom':'30rem'
      },
    },
    screens: {
      'xs': '468px',
      // => @media (min-width: 468px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'inter': ['Inter'],
      'body': ['"Inter"'],
    }
  },
  plugins: [],
}