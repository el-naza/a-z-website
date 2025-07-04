import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        lg: "0px 0px 42.1px 0px #00000033",
        sm: "0px 0px 3.5px 0px #0000001A",
      },
      fontFamily: {
        anybody: "var(--font-anybody)",
        ubuntu: "var(--font-ubuntu)",
        inter: "var(--font-inter)",
      },
      keyframes: {
        "marquee-x": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-y": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
      animation: {
        "marquee-horizontal": "marquee-x var(--duration) infinite linear",
        "marquee-vertical": "marquee-y var(--duration) linear infinite",
      },
    },
    colors: {
      white: "#FEFEFE",
      black: "#0C0C0C",
      black2: "#413E3E",
      primary: "#579797",
      primary2: "#67B3C0",
      secondary: "#FF6209",
      tertiary: "#E6EA0F",
      gray: "#AFAFAF",
      gray2: "#F3F3F3",
      "gray-blue": "#EDF3F3",
      transparent: "transparent",
    },
  },
  plugins: [],
};
export default config;
