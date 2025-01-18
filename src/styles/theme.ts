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
      size: "48px",
      weight: "600", // semibold
      lineHeight: "56px",
      description: "주요 제목이나 페이지 타이틀",
    },
    md: {
      bold: {
        size: "36px",
        weight: "600", // semibold
        lineHeight: "44px",
        description: "중간 크기의 제목",
      },
      medium: {
        size: "36px",
        weight: "500", // medium
        lineHeight: "44px",
        description: "중간 크기의 제목",
      },
      regular: {
        size: "36px",
        weight: "400", // regular
        lineHeight: "44px",
        description: "중간 크기의 제목",
      },
    },
    sm: {
      size: "24px",
      weight: "600", // semibold
      lineHeight: "32px",
      description: "섹션 소제목, 카드 제목 등",
    },
    xs: {
      size: "20px",
      weight: "600", // semibold
      lineHeight: "28px",
      description: "작은 제목, 부제목",
    },
  },
  text: {
    lg: {
      size: "18px",
      weight: "600", // semibold
      lineHeight: "28px",
      description: "큰 본문 텍스트. 강조된 텍스트에 사용",
    },
    md: {
      bold: {
        size: "16px",
        weight: "600", // semibold
        lineHeight: "24px",
        description: "일반적인 본문 텍스트",
      },
      medium: {
        size: "16px",
        weight: "500", // medium
        lineHeight: "24px",
        description: "일반적인 본문 텍스트",
      },
      regular: {
        size: "16px",
        weight: "400", // regular
        lineHeight: "24px",
        description: "일반적인 본문 텍스트",
      },
    },
    sm: {
      size: "14px",
      weight: "400", // regular
      lineHeight: "20px",
      description: "작은 본문 텍스트",
    },
    xs: {
      size: "12px",
      weight: "400", // regular
      lineHeight: "16px",
      description: "아주 작은 본문 텍스트. 서브텍스트나 툴팁에 사용",
    },
  },
  button: {
    lg: {
      size: "16px",
      weight: "700", // bold
      lineHeight: "20px",
      description: "큰 버튼 라벨",
    },
    md: {
      size: "14px",
      weight: "600", // semibold
      lineHeight: "14px",
      description: "중간 크기의 버튼 라벨",
    },
    sm: {
      size: "12px",
      weight: "600", // semibold
      lineHeight: "12px",
      description: "작은 버튼 라벨",
    },
  },
  caption: {
    size: "12px",
    weight: "400", // regular
    lineHeight: "16px",
    description: "설명글, 보조 텍스트",
  },
  overline: {
    size: "10px",
    weight: "700", // bold
    lineHeight: "10px",
    description: "섹션 라벨, 상단 설명",
  },
};

const theme = {
  colors,
  typo,
} as const;

export default theme;
