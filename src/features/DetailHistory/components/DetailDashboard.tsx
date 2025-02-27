import { styled } from "styled-components";

import InspectionList from "./InspectionList";
import UrlStructure from "./UrlStructure";
import Summary from "./Summary";
import InspectionDate from "./InspectionDate";
import Button from "../../../components/Button";

export default function DetailDashboard() {
  return (
    <Container>
      <TopSection>
        <FlexItem ratio={3}>
          <Summary />
        </FlexItem>
        <FlexItem ratio={1}>
          <UrlStructure />
        </FlexItem>
        <FlexItem ratio={1}>
          <InspectionDate />
        </FlexItem>
      </TopSection>
      <InspectionList />
      <BottomSection>
        <Button variant='outline' type='button'>
          목록으로
        </Button>
        <Button variant='fill' type='button'>
          재검사
        </Button>
      </BottomSection>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

const FlexItem = styled.div<{ ratio: number }>`
  flex: ${({ ratio }) => ratio};
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;
