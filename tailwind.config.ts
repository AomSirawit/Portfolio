import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        navy: {
          900: "#050510", // Darker for deep background
          800: "#0a0a1a", // Main navy background
        },
        accent: {
          cyan: "#06b6d4", // New Cyan accent color
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
