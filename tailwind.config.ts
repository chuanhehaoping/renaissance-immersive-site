import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#F6F1E7",
        "warm-white": "#FBF8F1",
        parchment: "#EFE3CC",
        "marble-white": "#F0EEEA",
        "stone-gray": "#C9C3B8",
        "pale-gold": "#D9B873",
        gold: "#B68A3D",
        "royal-blue": "#2A3E78",
        emerald: "#2D6A4F",
        burgundy: "#5C1E2E",
        "antique-rose": "#C68F8A",
        terracotta: "#B66B4F",
        violet: "#7A6A8E",
        ink: "#1F1A14",
        "ink-soft": "#3D3528",
      },
      fontFamily: {
        display: ["var(--font-display)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        roman: "0.18em",
      },
      maxWidth: {
        editorial: "78rem",
      },
      transitionTimingFunction: {
        salon: "cubic-bezier(0.22, 1, 0.36, 1)",
        curtain: "cubic-bezier(0.65, 0, 0.35, 1)",
      },
      boxShadow: {
        frame:
          "0 0 0 1px rgba(182, 138, 61, 0.35), 0 30px 80px -40px rgba(31, 26, 20, 0.4)",
        plinth: "0 60px 80px -50px rgba(31, 26, 20, 0.45)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slow-drift": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 1.2s cubic-bezier(0.22, 1, 0.36, 1) both",
        "slow-drift": "slow-drift 9s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
