/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E7163',   // Teal Green (MK letters)
        secondary: '#0A0604', // Deep brown/black background
        bronze: '#7A4E2D',    // Loom & figures accent
        gold: '#C68C53',      // Warm golden brown (border/text)
        beige: '#D7B88C',     // Rope/natural highlight
        bgLight: '#FAFAFF',   // Light background
        bgGrey: '#F3F3F7',    // Subtle grey tint
        textDark: '#230903',  // Rich dark text
        textLight: '#FAFAFF', // White/light text
        accent: '#7A4E2D',    // Using bronze as accent for buttons/icons
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Roboto', 'sans-serif'],
        accent: ['Merriweather', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-in-left': 'slideInLeft 1.2s ease-out',
        'scale-up': 'scaleUp 0.8s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
