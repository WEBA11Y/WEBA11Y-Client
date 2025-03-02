import { styled } from "styled-components";
import { FiAlertCircle } from "react-icons/fi";

import DropshadowCard from "../../../components/DropshadowCard";
import Typography from "../../../components/Typography";

const issues = [
  { id: 1, text: "<area> 요소에 대체 텍스트가 누락됨" },
  { id: 2, text: "ARIA 속성이 사양에 맞지 않게 사용됨" },
  {
    id: 3,
    text: "일부 ARIA 입력 필드가 접근 가능한 이름(Accessible Name)을 가지지 않음",
  },
  { id: 4, text: "요소가 더 이상 사용되지 않는 역할(Role)을 포함함" },
];

export default function ImportantIssues() {
  return (
    <DropshadowCard>
      <Typography variant='text' size='mdBold'>
        해결 중요도
      </Typography>
      <List>
        {issues.map(({ id, text }, index) => {
          return (
            <Item key={id} isEven={index % 2}>
              <Typography variant='text' size='mdRegular'>
                {`${id}. ${text}`}
              </Typography>
              <FiAlertCircle />
            </Item>
          );
        })}
      </List>
    </DropshadowCard>
  );
}

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 10px;
`;

const Item = styled.li<{ isEven: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  color: ${({ theme }) => theme.colors.neutral[700]};
  cursor: pointer;
  background: ${({ isEven, theme }) =>
    isEven ? theme.colors.neutral[100] : theme.colors.common.white};
`;
