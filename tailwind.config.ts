import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: "#FFCE05",
          purple: "#9B39ED"
        },
        base: {
          white: "#FFFFFF",
          light: "#F5F5F5",
          mid: "#E5E5E5",
          dark: "#444444",
          black: "#111111"
        }
      },
      boxShadow: {
        soft: "0 18px 40px -24px rgba(17, 17, 17, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;
