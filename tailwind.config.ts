import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          purple: 'rgb(var(--purple))',
          hover: 'rgb(var(--purple-hover))',
          light: 'rgb(var(--light-purple))',
        },
        grey: {
          dark: 'rgb(var(--dark-grey))',
          light: 'rgb(var(--light-grey))',
          default: 'rgb(var(--grey))',
          border: 'rgb(var(--border-grey))',
        },
        error: {
          default: 'rgb(var(--red))',
        },
        white: {
          DEFAULT: 'rgb(var(--white))',
        }
      }
    },
  },
  plugins: [],
};
export default config;
