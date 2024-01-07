import { Theme, extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
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