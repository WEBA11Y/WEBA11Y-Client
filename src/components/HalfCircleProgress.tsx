import { Cell, Pie, PieChart } from "recharts";
import { styled } from "styled-components";

import Typography from "./Typography";

interface Props {
  label: string;
  value: number;
  total: number;
  color: string;
}

export default function HalfCircleProgress({
  label,
  value,
  total,
  color,
}: Props) {
  const data = [
    { value, color },
    { value: total - value, color: "#F8F9FA" },
  ];

  return (
    <Container>
      <PieChart width={150} height={120}>
        <Pie
          data={data}
          dataKey='value'
          startAngle={180}
          endAngle={0}
          cx='50%'
          cy='60%'
          innerRadius={55}
          outerRadius={70}
          cornerRadius={10}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
      <TextContainer>
        <Typography variant='text' size='mdBold'>
          {label}
        </Typography>
        <Result>
          <Typography variant='text' size='lg'>
            {`${value}`}
          </Typography>
          /
          <Total variant='text' size='md'>
            {`${total}`}
          </Total>
        </Result>
      </TextContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
`;

const Result = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

const Total = styled.div`
  color: ${({ theme }) => theme.colors.neutral[600]};
`;
