import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        main: "1200px"
      },
      width: {
        main: "1200px"
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.65)",
          "0 0px 65px rgba(255, 255,255, 0.5)"
        ]
      }
    },
  },
  plugins: [],
};
export default config;
