/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /(bg|text|border)-brand-(green|red|orange|brown|yellow|blue|sky)/,
      variants: ['hover', 'group-hover'],
    },
  ],
  theme: {
    extend: {
      colors: {
        'royal-blue': '#2C3A8C',
        'brand-gold': '#A59381',
        'soft-off-white': '#FAF9F6',
        'charcoal': '#3E3A36',
        'rose-primary': '#8B6E66',
        'navy-block': '#070B2B',
        'brand-accent': '#d83b9d',
        'violet': '#5a5af3',
        'brand-orange': '#E56D24',
        'brand-yellow': '#F0B823',
        'brand-terracotta': '#BC5A42',
        'soft': '#EAE0D5',
        'primary': '#2C3A8C',
        'primary-rose': '#2C3A8C',
        'secondary': '#A59381',
        'secondary-beige': '#A59381',
        'brand-blue': '#2C3A8C',
        'brand-glow': '#349FCC',
        'brand-red': '#C5282F',
        'brand-sky': '#349FCC',
        'brand-green': '#2D9A47',
        'accent-red': '#EF4444',
        'accent-green': '#22C55E',
        'bg-light': '#EFE7DF',
        'bg-soft': '#F5EEEC',
        'bg-base': '#EFE7DF',
        'bg-surface': '#F5EEEC',
        'bg-elevated': '#EAE0D5',
        'text-dark': '#3E3A36',
        'text-primary': '#3E3A36',
        'text-secondary': 'rgba(62,58,54,0.8)',
        'inst-pink': '#FDF2F0',
        'inst-blue': '#2C3A8C',
        'inst-green': '#006738',
        'inst-yellow': '#E8BD63',
      },
      fontFamily: {
        heading: ['"Source Serif 4"', 'Georgia', 'serif'],
        body: ['Inter', 'DM Sans', 'sans-serif'],
        jakarta: ['Inter', 'sans-serif'],
        display: ['"Source Serif 4"', 'Georgia', 'serif'],
        inter: ['Inter', 'sans-serif'],
        sans: ['Inter', 'DM Sans', 'sans-serif'],
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #d83b9d 0%, #a259ff 50%, #5a5af3 100%)',
      },
      borderRadius: {
        'lg': '32px',
        'md': '20px',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        'ticker': 'ticker 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
