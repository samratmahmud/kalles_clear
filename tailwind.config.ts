import type {Config} from "tailwindcss";
import {fontFamily} from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00BAD4",
        blue: {
          "200": "rgb(245, 193, 255)",
          "500": "#007aff",
          "600": "#0d6efd",
          "700": "#0d6efd",
        },
        gray: {
          "100": "#6c757d47",
          "400": "rgba(255, 255, 255, 0.47)",
          "800": "#101010",
        },
        fuchsia: {"500": "#A05DFE"},
        slate: {
          "300": "rgba(255, 255, 255)",
          "600": "rgba(32, 32, 32)",
        },
        orange: {"300": "rgb(255, 255, 222)"},
        green: {
          "200": "rgb(159, 209, 255)",
          "400": "#35E6CC",
          "600": "#35E6CC",
        },
      },
    },
    fontSize: {
      xs: ["10px", {lineHeight: "1.2", letterSpacing: ""}],
      sm: ["12px", {lineHeight: "1.4", letterSpacing: "0.3px"}],
      md: ["14px", {lineHeight: "1.4", letterSpacing: "0.3px"}],
      base: ["16px", {lineHeight: "1.4", letterSpacing: "0.3px"}],
      lg: ["18px", {lineHeight: "1.2", letterSpacing: ""}],
      xl: ["20px", {lineHeight: "1.2", letterSpacing: "-0.32px"}],
      "2xl": ["22px", {lineHeight: "1.2", letterSpacing: ""}],
      "3xl": ["24px", {lineHeight: "43px", letterSpacing: ".3px"}],
      "4xl": ["30px", {lineHeight: "1.2", letterSpacing: ""}],
      "5xl": ["32px", {lineHeight: "1.2", letterSpacing: "-0.32px"}],
      "6xl": ["36px", {lineHeight: "43px", letterSpacing: ".3px"}],
      "7xl": ["38px", {lineHeight: "1.1", letterSpacing: "-0.96px"}],
      "8xl": ["40px", {lineHeight: "1.25", letterSpacing: "0.4px"}],
      "9xl": ["44px", {lineHeight: "1.25", letterSpacing: "0.4px"}],
      "10xl": ["48px", {lineHeight: "1.1", letterSpacing: "-0.96px"}],
      "11xl": ["50px", {lineHeight: "1.2", letterSpacing: "0.5px"}],
      "12xl": ["60px", {lineHeight: "1.25", letterSpacing: "0.4px"}],
      "13xl": ["64px", {lineHeight: "1.25", letterSpacing: "0.4px"}],
      "14xl": ["70px", {lineHeight: "1.2", letterSpacing: "0.5px"}],
      "15xl": ["72px", {lineHeight: "1.25", letterSpacing: "-2.16px"}],
      "16xl": ["80px", {lineHeight: "1.25", letterSpacing: "0.4px"}],
      "17xl": ["120px", {lineHeight: "144px", letterSpacing: "-6px"}],
      "18xl": ["128px", {lineHeight: "1.2", letterSpacing: "0.5px"}],
      "19xl": ["240px", {lineHeight: "1.2", letterSpacing: ""}],
    },
    fontFamily: {
      Poppins: ["Poppins", ...fontFamily.sans],
    },
    backgroundImage: {
      "header-bg": "url('/images/bg.jpeg')",
      newP: "linear-gradient(100deg, #00BAD4 7.72%, #2194FF 118.76%)",
      hotP: "linear-gradient(113deg, #EA1D62 5.37%, #F2944F 108.05%)",
      buttonS1: "linear-gradient(80.57deg, #5128E3 10.86%, #AA3BF2 89.96%)",
      buttonS2: "linear-gradient(99.68deg, #00BAD4 7.72%, #2194FF 118.76%)",
      buttonS3: "linear-gradient(80.57deg, #CE1BFB 10.86%, #35E6CC 89.96%)",
      "btn-mb": "linear-gradient(90deg, transparent, #00BAD4, transparent)",
      "one-stop": "linear-gradient(81deg, #CE1BFB 10.86%, #35E6CC 89.96%)",
      "top-marque": "linear-gradient(110deg, #202020 0%, #101010 100%)",
      "50+":
        "linear-gradient(81deg, #5C39B2 -1.5%, #BB4190 44.74%, #DE6475 71.64%, #F9B05E 111.84%)",
      "pink-primary": "linear-gradient(173deg, #CE1BFB 10.86%, #35E6CC 89.96%)",
      "gray-black":
        "linear-gradient(90deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 30.42%, rgba(255, 255, 255, 0) 69.5%, rgba(255, 255, 255, 0.24) 100%)",
      "demos-card":
        "linear-gradient(180deg, #1A1A1A 0%, rgba(26, 26, 26, 0.00) 100%)",
      "black-gray":
        "linear-gradient(180deg, #000 0%, rgba(255, 255, 255, 0.22) 100%)",
      "primary-pink-gradient":
        "linear-gradient(180deg, #36E6CC 0%, #C32BF8 69.39%, rgba(0, 0, 0, 0) 100%)",
      "pages-bg": "url('/images/pages_bg.png')",
      "clean-bg":
        "-webkit-linear-gradient(81.01deg, #5C39B3 -1.5%, #BB4190 44.74%, #DE6475 71.64%, #F9B05E 111.84%)",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    screens: {
      sm: "525px",
      md: "768px",
      lg: "992px",
      xl: "1150px",
      "2xl": "1365px",
      "3xl": "1550px",
      "4xl": "1700px",
      "5xl": "1860px",
    },
  },
  plugins: [],
};
export default config;
