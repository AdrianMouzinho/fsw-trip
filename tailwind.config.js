/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'light-purple': '#DDD5EA',
        purple: '#590BD8',
        'dark-purple': '#312A4F',
        'walter-white': '#F5F5F5',
        'light-gray': '#BBBFBF',
        gray: '#717171',
        red: '#FE3838',
      },
    },
  },
  plugins: [],
}
