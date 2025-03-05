import { ReactElement, ReactNode } from "react";
import { styled, css } from "styled-components";

type Props = {
  size?: "small" | "medium" | "large" | "full";
  variant?: "fill" | "outline" | "fill-outline" | "darkFill";
  type: "button" | "submit" | "reset";
  icon?: ReactElement;
  children: ReactNode;
  onClick?: () => void;
  fullWidth?: boolean;
  disabled?: boolean;
};
export default function Button({
  size = "medium",
  variant = "fill",
  icon,
  children,
  type,
  onClick,
  disabled = false,
}: Props) {
  return (
    <StyledButton
      size={size}
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {icon && <IconWrapper>{icon}</IconWrapper>}
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button<{
  size: string;
  variant: string;
  disabled: boolean;
}>`
  ${({ theme }) => theme.mixins.flexCenter};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  white-space: nowrap;
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};

  background-color: ${({ theme, disabled, variant }) =>
    disabled
      ? theme.colors.neutral[200]
      : variant === "fill"
        ? theme.colors.primary[500]
        : variant === "darkFill"
          ? theme.colors.common.black
          : theme.colors.common.white};

  color: ${({ theme, disabled, variant }) =>
    disabled
      ? theme.colors.neutral[500]
      : variant === "fill"
        ? theme.colors.common.white
        : variant === "darkFill"
          ? theme.colors.common.white
          : theme.colors.primary[500]};

  border: 1px solid
    ${({ theme, disabled, variant }) =>
      disabled
        ? theme.colors.neutral[300]
        : variant === "fill"
          ? theme.colors.common.white
          : variant === "darkFill"
            ? theme.colors.common.black
            : theme.colors.primary[500]};

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
    props.size === "full" &&
    css`
      width: 100%;
      padding: 15px 0;
      border-radius: 10px;
      ${({ theme }) => theme.typo.button.md}
    `}

    &:hover {
    background-color: ${({ theme, disabled, variant }) =>
      disabled
        ? theme.colors.neutral[200]
        : variant === "fill"
          ? theme.colors.primary[600]
          : variant === "darkFill"
            ? theme.colors.common.black
            : theme.colors.primary[100]};
  }
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  margin-right: 8px;
`;
