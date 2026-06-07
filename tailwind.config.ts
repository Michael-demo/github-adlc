import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#06195c',
        cream: '#EFF4FF',
        neon: '#6FFF00',
      },
      fontFamily: {
        grotesk: ['Anton', 'Impact', 'sans-serif'],
        condiment: ['Condiment', 'cursive'],
      },
    },
  },
  plugins: [],
} satisfies Config;
