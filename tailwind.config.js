/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        mxw: '600px',
        miw: '450px',
      },
    },
  },
  plugins: [],
};
