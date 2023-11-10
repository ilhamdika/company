const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

     theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                fontWeight: {
                    thin: '100',
                    hairline: '100',
                    extralight: '200',
                    light: '300',
                    normal: '400',
                    medium: '500',
                    semibold: '600',
                    bold: '700',
                    extrabold: '800',
                    'extra-bold': '800',
                    black: '900',},
            },
            
        },
    },

    theme: {
        screens: {
          'tablet': '640px',
          // => @media (min-width: 640px) { ... }
    
          'laptop': '1024px',
          // => @media (min-width: 1024px) { ... }
    
          'desktop': '1280px',
          // => @media (min-width: 1280px) { ... }

          'mobile': {'max': '639px'},
        },

        extend: {
            colors: {
              dark: '#2b2929',
            },
          },
      },
      darkMode: 'class',
      variants: {
        extend: {},
      },

    plugins: [require('@tailwindcss/forms')],
};
