import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#843030",
        "brand-dark": "#6d2628",
        ink: "#292929",
        muted: "#737373",
        blush: "#fff0f0",
      },
      maxWidth: { content: "1600px" },
      fontFamily: { sans: ["Plus Jakarta Sans", "Arial", "sans-serif"] },
    },
  },
  plugins: [],
} satisfies Config;
