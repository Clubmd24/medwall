import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        luxury: {
          bg: "#0B0B0B",
          surface: "#111111",
          elevated: "#161616",
          border: "#2A2A2A",
          muted: "#8A8A8A",
        },
        gold: {
          DEFAULT: "#D4AF5F",
          soft: "#E8D4A8",
          dim: "#9A7B3C",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to right, rgba(212,175,95,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(212,175,95,0.06) 1px, transparent 1px)",
        "gold-radial": "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(212,175,95,0.15), transparent 55%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
