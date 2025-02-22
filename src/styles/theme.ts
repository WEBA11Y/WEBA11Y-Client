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
      fontWeight: 600,
      lineHeight: "56px",
    },
    mdBold: {
      fontSize: "36px",
      fontWeight: 600,
      lineHeight: "44px",
    },
    md: {
      fontSize: "36px",
      fontWeight: 500,
      lineHeight: "44px",
    },
    mdRegular: {
      fontSize: "36px",
      fontWeight: 400,
      lineHeight: "44px",
    },
    sm: {
      fontSize: "24px",
      fontWeight: 600,
      lineHeight: "32px",
    },
    xs: {
      fontSize: "20px",
      fontWeight: 600,
      lineHeight: "28px",
    },
  },
  text: {
    lg: {
      fontSize: "18px",
      fontWeight: 600,
      lineHeight: "28px",
    },
    mdBold: {
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: "24px",
    },
    md: {
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "24px",
    },
    mdRegular: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px",
    },
    sm: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "20px",
    },
    xs: {
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "16px",
    },
  },
  button: {
    lg: {
      fontSize: "16px",
      fontWeight: 700,
      lineHeight: "20px",
    },
    mdBold: {
      fontSize: "14px",
      fontWeight: 600,
      lineHeight: "18px",
    },
    md: {
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "18px",
    },
    mdRegular: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "18px",
    },

    sm: {
      fontSize: "12px",
      fontWeight: 600,
      lineHeight: "16px",
    },
    xs: {
      fontSize: "10px",
      fontWeight: 600,
      lineHeight: "14px",
    },
  },
  caption: {
    lg: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "20px",
    },
    mdBold: {
      fontSize: "12px",
      fontWeight: 600,
      lineHeight: "16px",
    },
    md: {
      fontSize: "12px",
      fontWeight: 500,
      lineHeight: "16px",
    },
    mdRegular: {
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "16px",
    },

    sm: {
      fontSize: "10px",
      fontWeight: 400,
      lineHeight: "14px",
    },
    xs: {
      fontSize: "8px",
      fontWeight: 400,
      lineHeight: "12px",
    },
  },
  overline: {
    lg: {
      fontSize: "12px",
      fontWeight: 700,
      lineHeight: "16px",
    },
    mdBold: {
      fontSize: "10px",
      fontWeight: 600,
      lineHeight: "14px",
    },
    md: {
      fontSize: "10px",
      fontWeight: 500,
      lineHeight: "14px",
    },
    mdRegular: {
      fontSize: "10px",
      fontWeight: 400,
      lineHeight: "14px",
    },

    sm: {
      fontSize: "8px",
      fontWeight: 700,
      lineHeight: "12px",
    },
    xs: {
      fontSize: "6px",
      fontWeight: 700,
      lineHeight: "10px",
    },
  },
};

const mixins = {
  flexCenter: `
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  flexColumnCenter: `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  flexRowCenter: `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `,
  flexRowBetween: `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `,
  flexColumnBetween: `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  `,
};

const theme = {
  colors,
  typo,
  mixins,
} as const;

export default theme;
