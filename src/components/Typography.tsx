import { styled } from "styled-components";

import theme from "../styles/theme";

type Props = {
  variant: "title" | "text" | "caption" | "button";
  size?: "lg" | "mdRegular" | "md" | "mdBold" | "sm" | "xs";
  children: string;
  as?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};
export default function Typography({
  children,
  variant,
  size,
  as = "p",
  className,
}: Props & { className?: string }) {
  return (
    <StyledTypography
      $variant={variant}
      $size={size}
      as={as}
      className={className}
    >
      {children}
    </StyledTypography>
  );
}

const StyledTypography = styled.div<{
  $variant: Props["variant"];
  $size?: Props["size"];
}>`
  ${({ $variant = "text", $size = "md" }) => `
    font-size:${theme.typo[$variant][$size].fontSize};
    font-weight:${theme.typo[$variant][$size].fontWeight};
    line-height:${theme.typo[$variant][$size].lineHeight};   
`}
`;
