/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        slideToLogoLg: "slideToLogoLg 7s ease-out forwards",
        slideToLogoMd: "slideToLogoMd 7s ease-out forwards",
        slideToLogoSm: "slideToLogoSm 7s ease-out forwards",
      },
      keyframes: {
        slideToLogoLg: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-2%)" }, 
        },
        slideToLogoMd: {
          "0%": { transform: "translateX(50%)" },
          "100%": { transform: "translateX(-2%)" },
        },
        slideToLogoSm: {
          "0%": { transform: "translateX(20%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      
      screens: {
        sm: '580px',
        md: '640px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};