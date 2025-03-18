import { styled } from "styled-components";
import { FiAlertOctagon } from "react-icons/fi";

import DropshadowCard from "../../../components/DropshadowCard";
import Typography from "../../../components/Typography";

export default function EmptyHistory() {
  return (
    <DropshadowCard dropshadow>
      <Container>
        <StyledTypography variant='title' size='sm'>
          <FiAlertOctagon />
          등록된 URL이 없습니다
        </StyledTypography>
      </Container>
    </DropshadowCard>
  );
}

const Container = styled.div`
  ${({ theme }) => theme.mixins.flexColumnCenter};
  height: calc(100vh - 350px);
`;

const StyledTypography = styled(Typography)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.colors.neutral[300]};
  svg {
    font-size: 40px;
  }
`;
