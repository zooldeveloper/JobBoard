/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,ts}'],
	theme: {
        colors: {
            'brown': '#222121',
            'yallow': '#f8b430',
            'gray': '#edf7f6',
            'olive': '#006c67',
            'white': '#ffffff',
            'black': '#000000'
        },
        fontFamily: {
            sans: ['Popping', 'sans-serif'],
            serif: ['Spectral', 'serif'],
        },
		extend: {},
	},
    screens: {
        sm: '640px',
        // => @media (min-width: 640px) { ... }
  
        md: '768px',
        // => @media (min-width: 768px) { ... }
  
        lg: '1024px',
        // => @media (min-width: 1024px) { ... }
  
        xl: '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },  
	plugins: [],
};
