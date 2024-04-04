import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  mode: "jit",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/_server/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/solo-timer/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: colors.neutral,
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        crescendo: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.25)" },
        },
      },
      animation: {
        crescendo: "crescendo 0.5s alternate infinite ease-in-out;",
      },
    },
  },
  daisyui: {
    themes: [
      {
        pomopartyTheme: {
          primary: "#FF6666",
          "primary-content": "#FFF",
          secondary: "#FF8989",
          "secondary-content": "#FFF",
          accent: "#FFEADD",
          "accent-content": "#FFF",
          neutral: "#FF8989",
          "base-100": "#FFF",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
export default config;
