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
      fontFamily: {
        anybody: "var(--font-anybody)",
        ubuntu: "var(--font-ubuntu)",
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
    },
  },
  plugins: [],
};
export default config;





