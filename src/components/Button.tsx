import { ReactElement } from "react";
import { styled, css } from "styled-components";

type Props = {
  size?: "small" | "medium" | "large";
  variant?: "fill" | "outline" | "fill-outline";
  icon?: ReactElement;
  children: string;
  onClick?: () => void;
};
export default function Button({
  size = "medium",
  variant = "fill",
  icon,
  children,
  onClick,
}: Props) {
  return (
    <StyledButton size={size} variant={variant} onClick={onClick}>
      {icon && <IconWrapper>{icon}</IconWrapper>}
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button<{ size: string; variant: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${(props) =>
    props.size === "small" &&
    css`
      padding: 4px 8px;
      border-radius: 20px;
      ${({ theme }) => theme.typo.button.sm}
    `}

  ${(props) =>
    props.size === "medium" &&
    css`
      padding: 8px 16px;
      border-radius: 25px;
      ${({ theme }) => theme.typo.button.md}
    `}

    ${(props) =>
    props.size === "large" &&
    css`
      padding: 12px 20px;
      border-radius: 30px;
      ${({ theme }) => theme.typo.button.lg}
    `}

  ${(props) =>
    props.variant === "fill" &&
    css`
      background-color: ${({ theme }) => theme.colors.primary[500]};
      color: ${({ theme }) => theme.colors.common.white};
      &:hover {
        background-color: ${({ theme }) => theme.colors.primary[600]};
      }
    `}

    ${(props) =>
    props.variant === "outline" &&
    css`
      background-color: ${({ theme }) => theme.colors.common.white};
      color: ${({ theme }) => theme.colors.primary[500]};
      border: 2px solid ${({ theme }) => theme.colors.primary[500]};
      &:hover {
        background-color: ${({ theme }) => theme.colors.primary[100]};
      }
    `}
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  margin-right: 8px;
`;
