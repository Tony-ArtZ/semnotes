/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'blue-dark': '#12182B',
        'blue': '#394F6B',
        'green-dark': '#329D9C',
        'green': '#7BE495',
        'yellow': '#E5EFC1',
      },
      backgroundImage: {
        "paper": "repeating-linear-gradient(#12182B 0px, #12182B 29px, #7BE495 30px)",
      }
    },
  },
  plugins: [],
}
