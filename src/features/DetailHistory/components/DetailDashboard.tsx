import { styled } from "styled-components";

import InspectionList from "./InspectionList";
import Button from "../../../components/Button";
import ServiceHeader from "./ServiceHeader";
import UrlInputSection from "./UrlInputSection";
import { StatBox } from "../../RecentInspection";

export default function DetailDashboard() {
  return (
    <Container>
      <TopSection>
        <ServiceBox>
          <ServiceHeader />
          <ScoreGrid>
            <StatBox
              title='CRITICAL'
              value={1}
              color='red'
              showIcon='failure'
            />
            <StatBox
              title='SERIOUS'
              value={2}
              color='yellow'
              showIcon='review'
            />
            <StatBox
              title='MODERATE'
              value={3}
              color='blue'
              showIcon='checked'
            />
            <StatBox title='MINOR' value={4} color='black' showIcon='null' />
          </ScoreGrid>
        </ServiceBox>
        <UrlInputSection />
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
  width: 100%;
  max-width: 1020px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const TopSection = styled.div``;

const ServiceBox = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1rem;
`;

const ScoreGrid = styled.div`
  display: flex;
  flex-direction: low;
  gap: 1rem;
`;
