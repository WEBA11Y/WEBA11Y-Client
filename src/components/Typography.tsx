import { styled } from "styled-components";

import theme from "../styles/theme";

type Props = {
  variant: "title" | "text" | "caption" | "button";
  size?: "lg" | "mdRegular" | "md" | "mdBold" | "sm" | "xs";
  children: string;
  color?: string;
  as?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};
export default function Typography({
  children,
  variant,
  size,
  color,
  as = "p",
}: Props) {
  return (
    <StyledTypography variant={variant} size={size} color={color} as={as}>
      {children}
    </StyledTypography>
  );
}

const StyledTypography = styled.div<Omit<Props, "children,as">>`
  ${({ variant = "text", size = "md", color }) => `
    font-size:${theme.typo[variant][size].fontSize};
    font-weight:${theme.typo[variant][size].fontWeight};
    line-height:${theme.typo[variant][size].lineHeight};   
     color: ${color ? color : "inherit"};  

`}
`;
