/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'wizard-purple': '#2D1B69',
        'wizard-magenta': '#E91E63',
        'wizard-cyan': '#00BCD4',
        'wizard-pink': '#FF1744',
      },
      backgroundImage: {
        'wizard-gradient': 'linear-gradient(135deg, #2D1B69 0%, #1A0B3D 100%)',
        'hero-gradient': 'linear-gradient(135deg, #E91E63 0%, #2D1B69 100%)',
      },
    },
  },
  plugins: [],
}