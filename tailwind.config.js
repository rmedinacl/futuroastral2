module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
     // Path to the tremor module
     "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
     './node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif']
      },
      keyframes: {
        animatedBackground: {
          '0%': { backgroundColor: '#BBD2C5' },
          '50%': { backgroundColor: '#C6E492' },
          '100%': { backgroundColor: '#BBD2C5' },
        },
      },
      animation: {
        animated: 'animatedBackground 2s linear infinite',
      }
    }
  },
      variants: {
       extend: {
       animation: ['responsive', 'motion-safe', 'motion-reduce']
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require("preline/plugin"),
  ],
};
