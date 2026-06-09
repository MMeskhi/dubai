/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        coral: '#CB7266',
        brown: '#5F413D',
        'brown-dark': '#4A322F',
        sepia: '#F5F0EC',
        'brand-yellow': '#F6BC5E',
        stroke: '#E5E2DF',
        ink: '#191514',
        muted: '#646569',
      },
      fontFamily: {
        heading: ["'TT Firs Neue'", "'DM Sans'", "'Inter'", 'sans-serif'],
      },
      maxWidth: {
        container: '1344px',
        'container-xl': '1440px',
      },
      borderRadius: {
        '4xl': '24px',
      },
    },
  },
  plugins: [],
}
