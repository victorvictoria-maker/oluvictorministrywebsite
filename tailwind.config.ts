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
      colors: {
        background: "var(--white)",
        primaryColour: {
          DEFAULT: "var(--red)",
          80: "var(--red-80)",
          90: "var(--red-90)",
        },
        secondaryColour: {
          DEFAULT: "var(--blue)",
          80: "var(--blue-80)",
          90: "var(--blue-90)",
        },
        orangeColour: {
          DEFAULT: "var(--orange)",
          80: "var(--orange-80)",
          90: "var(--orange-90)",
        },
        powder: {
          DEFAULT: "var(--powder)",
          80: "var(--powder-80)",
          90: "var(--powder-90)",
        },
      },

      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        lora: ["Lora", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
