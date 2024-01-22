import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        verdigris: '#4aa3a3',
        'pewter-blue': '#87b5b5',
        'columbia-blue': '#c0d8d8',
        'medium-aquamarine': '#57e2b1',
        'medium-jungle-green': '#1d2f2f',
      },
      boxShadow: {
        md: '1px 1px 10px 2px #3a5f5f',
      },
      listStyleType: {
        circle: 'circle',
        square: 'square',
      },
    },
  },
  plugins: [],
};
export default config;
