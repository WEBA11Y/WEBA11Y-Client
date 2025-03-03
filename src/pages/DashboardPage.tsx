import { styled } from "styled-components";

import {
  RecentInspectionResult,
  ResolutionChart,
  ImportantIssues,
  IssueStatus,
  URLList,
  Summary,
} from "../features/RecentInspection";

export default function Dashboard() {
  return (
    <Container>
      <RecentInspectionResult />
      <MainContent>
        <LeftSection>
          <Summary />
          <ResolutionChart />
          <ImportantIssues />
        </LeftSection>
        <RightSection>
          <IssueStatus />
          <URLList />
        </RightSection>
      </MainContent>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 1020px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const MainContent = styled.div`
  display: flex;
  gap: 15px;
  align-items: stretch;
`;

const LeftSection = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const RightSection = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
