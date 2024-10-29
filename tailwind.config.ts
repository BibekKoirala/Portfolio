import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        color1: '#eee8b2', // Soft Yellow
        color2: '#c18d52', // Bronze
        color3: '#081b1b', // Dark Teal
        color4: '#203b37', // Forest Green
        color5: '#5a8f76', // Sea Green
        color6: '#96cdb0', // Light Green
        color7: '#092312',
        color8: '#0d351b',
      },
      fontSize: {
        'xs': '0.75rem',  // 12px
        'sm': '0.875rem', // 14px
        'tiny': '0.875rem', // 14px
        'base': '1rem',    // 16px
        'lg': '1.125rem',  // 18px
        'xl': '1.25rem',   // 20px
        '2xl': '1.5rem',   // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem',  // 36px
        '5xl': '3rem',     // 48px
        '6xl': '4rem',     // 64px
        // Custom sizes
        'custom-lg': '1.75rem',  // 28px
        'custom-xl': '2rem',     // 32px
        // Add more as needed
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
