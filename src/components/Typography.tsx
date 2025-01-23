import { styled } from "styled-components";

import theme from "../styles/theme";

type Props = {
  variant: "title" | "text" | "caption" | "button";
  size?: "lg" | "md" | "sm" | "xs";
  children: string;
};
export default function Typography({ children, variant, size }: Props) {
  return (
    <StyledTypography variant={variant} size={size}>
      {children}
    </StyledTypography>
  );
}

const StyledTypography = styled.div<Omit<Props, "children">>`
  ${({ variant = "text", size = "md" }) => `
    font-size:${theme.typo[variant][size].fontSize};
    font-weight:${theme.typo[variant][size].fontWeight};
    line-height:${theme.typo[variant][size].lineHeight};
`}
`;
