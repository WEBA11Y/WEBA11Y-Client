import { styled } from "styled-components";

import HalfCircleProgress from "../../../components/HalfCircleProgress";
import Typography from "../../../components/Typography";

export default function ResolutionChart() {
  return (
    <Card>
      <Typography variant='text' size='mdBold'>
        해결 현황
      </Typography>
      <ChartContainer>
        <HalfCircleProgress label='실패' value={8} total={20} color='#E63946' />
        <HalfCircleProgress label='검토' value={8} total={20} color='#FFC107' />
        <HalfCircleProgress label='권장' value={8} total={20} color='#1E3A8A' />
      </ChartContainer>
    </Card>
  );
}

const Card = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.dropbox.shadow1};
`;

const ChartContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;
