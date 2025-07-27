import { styled } from "styled-components";
import { FiAlertTriangle } from "react-icons/fi";
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from "react-icons/ai";

import Typography from "../../../components/Typography";

interface StatBoxProps {
  title: string;
  value: number;
  color: string;
  showIcon: string;
}

export default function StatBox({
  title,
  value,
  color,
  showIcon,
}: StatBoxProps) {
  return (
    <Container>
      <Header>
        <Title variant='text' size='md'>
          {title}
        </Title>
        {showIcon === "failure" ? (
          <AiOutlineCloseCircle fill='#E63946' />
        ) : showIcon === "review" ? (
          <FiAlertTriangle stroke='#FFC947' />
        ) : showIcon === "checked" ? (
          <AiOutlineCheckCircle fill='#2A6F97' />
        ) : null}
      </Header>
      <ValueContainer>
        <Value>{value}</Value>
        <Dot color={color} />
      </ValueContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.common.white};
  border: 1px solid ${({ theme }) => theme.colors.neutral[200]};
  border-radius: 12px;
  padding: 15px;
  flex: 1;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  gap: 10px;
  svg {
    font-size: 25px;
  }
`;

const Title = styled(Typography)`
  color: ${({ theme }) => theme.colors.neutral[600]};
`;

const ValueContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

const Value = styled.span`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.common.black};
`;

const Dot = styled.span<{ color: string }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-left: 5px;
  transform: translateY(5px);
  background-color: ${({ color, theme }) =>
    color === "red"
      ? theme.colors.primary[500]
      : color === "yellow"
        ? theme.colors.secondary.yellow[500]
        : color === "blue"
          ? theme.colors.secondary.blue[500]
          : theme.colors.common.black};
`;
