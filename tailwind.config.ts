import type { Config } from "tailwindcss";

const config: Config = {
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
      fontFamily: {
        'noto-sans-thai': ['Noto Sans Thai', 'sans-serif'], // เพิ่มฟอนต์ Noto Sans Thai
      },
      fontSize: {
        'custom': '12px', 
        'title' :'24px'
      },
      lineHeight: {
        'custom': '16px', 
        'title': '36px'
      },
    },
  },
  plugins: [],
};
export default config;
