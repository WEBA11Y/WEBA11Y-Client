import { useState } from "react";
import { styled } from "styled-components";

import DropshadowCard from "../../../components/DropshadowCard";
import StatusTab from "./StatusTab";

interface Issue {
  id: number;
  title: string;
  description: string;
}

const issues: Issue[] = Array(6)
  .fill(null)
  .map((_, index) => ({
    id: index + 1,
    title: "Critical CSS 미삽입",
    description:
      "주요 CSS가 <HEAD> 태그에 인라인으로 삽입되지 않았습니다. 이는 페이지 초기 로딩 속도를 저하시킬 수 있습니다.",
  }));

export default function InspectionList() {
  const [selectedTab, setSelectedTab] = useState("검토");
  console.log(selectedTab);
  return (
    <DropshadowCard dropshadow>
      <Container>
        <StatusTab onSelect={setSelectedTab} />
        <ListContainer>
          {issues.map((issue) => (
            <IssueItem key={issue.id}>
              <IssueContent>
                <IssueTitle>{issue.title}</IssueTitle>
                <IssueDescription>{issue.description}</IssueDescription>
              </IssueContent>
              <CheckBox type='checkbox' />
            </IssueItem>
          ))}
        </ListContainer>
      </Container>
    </DropshadowCard>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 400px;
  overflow-y: scroll;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const IssueItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[200]};
`;

const IssueContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 20px;
`;

const IssueTitle = styled.span`
  font-weight: bold;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.neutral[900]};
`;

const IssueDescription = styled.span`
  width: 500px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.neutral[600]};
`;

const CheckBox = styled.input`
  width: 16px;
  height: 16px;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.neutral[300]};
`;
