const colors = {
  primary: {
    100: "#fdecec",
    200: "#fbc0c0",
    300: "#f68f8f",
    400: "#f06262",
    500: "#e63946",
    600: "#d6283b",
    700: "#b5212f",
    800: "#921920",
    900: "#701216",
  },
  neutral: {
    100: "#f8f9fa",
    200: "#e9ecef",
    300: "#dee2e6",
    400: "#ced4da",
    500: "#adb5bd",
    600: "#6c757d",
    700: "#495057",
    800: "#343a40",
    900: "#212529",
  },
  secondary: {
    yellow: {
      100: "#fff9e6",
      200: "#fff3bf",
      300: "#ffeb99",
      400: "#ffe070",
      500: "#ffc947",
      600: "#dba83a",
      700: "#b7892d",
      800: "#936a21",
      900: "#704c16",
    },
    blue: {
      100: "#eaf4fa",
      200: "#c7e1f0",
      300: "#a3cde6",
      400: "#76b0d1",
      500: "#2a6f97",
      600: "#245c7c",
      700: "#1d4962",
      800: "#163749",
      900: "#0f2631",
    },
  },
  common: {
    black: "#000000",
    white: "#ffffff",
  },
};

const typo = {
  title: {
    lg: {
      fontSize: "48px",
      fontWeight: "600", // semibold
      lineHeight: "56px",
    },
    md: {
      bold: {
        fontSize: "36px",
        fontWeight: "600", // semibold
        lineHeight: "44px",
      },
      medium: {
        fontSize: "36px",
        fontWeight: "500", // medium
        lineHeight: "44px",
      },
      regular: {
        fontSize: "36px",
        fontWeight: "400", // regular
        lineHeight: "44px",
      },
    },
    sm: {
      fontSize: "24px",
      fontWeight: "600", // semibold
      lineHeight: "32px",
    },
    xs: {
      fontSize: "20px",
      fontWeight: "600", // semibold
      lineHeight: "28px",
    },
  },
  text: {
    lg: {
      fontSize: "18px",
      fontWeight: "600", // semibold
      lineHeight: "28px",
    },
    md: {
      bold: {
        fontSize: "16px",
        fontWeight: "600", // semibold
        lineHeight: "24px",
      },
      medium: {
        fontSize: "16px",
        fontWeight: "500", // medium
        lineHeight: "24px",
      },
      regular: {
        fontSize: "16px",
        fontWeight: "400", // regular
        lineHeight: "24px",
      },
    },
    sm: {
      fontSize: "14px",
      fontWeight: "400", // regular
      lineHeight: "20px",
    },
    xs: {
      fontSize: "12px",
      fontWeight: "400", // regular
      lineHeight: "16px",
    },
  },
  button: {
    lg: {
      fontSize: "16px",
      fontWeight: "700", // bold
      lineHeight: "20px",
    },
    md: {
      fontSize: "14px",
      fontWeight: "600", // semibold
      lineHeight: "14px",
    },
    sm: {
      fontSize: "12px",
      fontWeight: "600", // semibold
      lineHeight: "12px",
    },
  },
  caption: {
    fontSize: "12px",
    fontWeight: "400", // regular
    lineHeight: "16px",
  },
  overline: {
    fontSize: "10px",
    fontWeight: "700", // bold
    lineHeight: "10px",
  },
};

const theme = {
  colors,
  typo,
} as const;

export default theme;
