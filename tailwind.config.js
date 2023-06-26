/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'primary': 'hsl(171, 66%, 44%)',
      'secondary': 'hsl(233, 100%, 69%)',
      'color-title': 'hsl(210, 10%, 33%)',
      'color-text': 'hsl(201, 11%, 66%)',
      'background': '#F2F2F2',            // Concrete
    },
    extend: {
      fontSize: {
          sm: '0.8rem',
          base: '1rem',
          xl: '1.25rem',
          '2xl': '1.5rem', 
          '3xl': '2rem',
          '4xl': '2.5rem',
          '5xl': '3rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
