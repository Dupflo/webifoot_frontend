/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    fontSize: {
      xxs: '0.625rem', // 10px
      xs: '0.75rem', //12px
      base: '0.875rem', //14px
      md: '0.938rem', //15px
      lg: '1.125rem', //18px
      xl: '1.25rem', //20px
      '2xl': '1.563rem', //25px
      '3xl': '2.188rem', //35px
      '4xl': '2.5rem', //40px
      '5xl': '2.813rem', // 45px
    },
    extend: {
      colors: {
        dark: '#233552',
        primary: '#273C9A',
        secondary: '#A7CEF6',
        light: '#EDF6FE',
        gray: '#6C6C6C',
      },
    },
  },
  plugins: [],
}
