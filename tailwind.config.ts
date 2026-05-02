import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1B3A6B",
          light: '#2563EB',
          dark: '#0F2447',
        },
        secondary: {
          DEFAULT: '#3B82F6',
          light: '#DBEAFE',
        },
        success: '#22C55E',
        danger: '#EF4444',
        background: '#F0F4F8',
      },
      accent: {
        DEFAULT: "#12B5EA",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        xs: ['9px', '12px'],
        sm: ['10px', '14px'],
        base: ['12px', '18px'],
        md: ['14px', '20px'],
        lg: ['16px', '24px'],
        xl: ['18px', '26px'],
        '2xl': ['20px', '30px'],
        '3xl': ['24px', '36px'],
      },
    },
  },
  plugins: [],
};

export default config;
