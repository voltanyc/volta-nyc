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
        "v-green": "#85CC17",
        "v-green-dark": "#6aaa10",
        "v-blue": "#2562EC",
        "v-blue-dark": "#1a4fd4",
        "v-bg": "#F7F7F2",
        "v-ink": "#0D0D0D",
        "v-muted": "#6B7280",
        "v-border": "#E5E5DF",
        "v-card": "#FFFFFF",
        "v-dark": "#111110",
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-jakarta)", "sans-serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "marquee-slow": "marquee 50s linear infinite",
        "fade-up": "fadeUp 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
