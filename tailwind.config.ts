import { defineConfig } from 'tailwindcss'

/
 * Tailwind CSS configuration for FashionTV cosmetics website
 * This configuration focuses on a luxury brand experience with specific colors and animations.
 *
 * @see https://tailwindcss.com/docs/configuration
 */
export default defineConfig({
  theme: {
    extend: {
      colors: {
        pink: {
          light: '#F8BBD0', // lighter shade for background
          DEFAULT: '#D81B60', // primary pink color
          dark: '#C2185B', // darker shade for accents
        },
        white: '#FFFFFF', // primary white color for backgrounds and text
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideIn: 'slideIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
    },
  },
  plugins: [],
});