import { Theme, extendTheme } from "@chakra-ui/react";

const breakpoints = {
  base: "0px",
  sm: "375px",
  md: "768px",
  lg: "1120px",
  xl: "1440px",
  "2xl": "1920px",
};

export const theme = extendTheme({
  breakpoints,
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  colors: {
    gray: {
      "50": "#F5F8FA",
      "100": "#DADADA",
      "700": "#999999",
      "800": "#47585B",
    },
    yellow: {
      "500": "#FFBA08",
    }
  },
  styles: {
    global: {
      background: "gray.50",
      color: "gray.800"
    }
  }
} as Theme | {})