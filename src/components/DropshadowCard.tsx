import { styled } from "styled-components";

interface Props {
  children: React.ReactNode;
  dropshadow?: boolean;
}
export default function DropshadowCard({ children, dropshadow }: Props) {
  return <Container dropshadow={dropshadow}>{children}</Container>;
}

const Container = styled.div<{ dropshadow: boolean }>`
  padding: 20px;
  border: 0.5px solid ${({ theme }) => theme.colors.neutral[200]};
  background-color: ${({ theme }) => theme.colors.common.white};
  border-radius: 15px;
  box-shadow: ${({ dropshadow, theme }) =>
    dropshadow ? theme.dropbox.shadow1 : "none"};
`;
