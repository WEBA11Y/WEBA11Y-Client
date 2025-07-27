import { styled } from "styled-components";

import Typography from "../../../components/Typography";
import DropshadowCard from "../../../components/DropshadowCard";
import Select from "../../../components/Select";
import { mockRecentInspection } from "../mock";

const fetchCategory = async () => {
  return [
    { label: "중요도", value: "중요도" },
    { label: "단계", value: "단계" },
  ];
};

export default function IssueStatus() {
  return (
    <DropshadowCard dropshadow>
      <TopContent>
        <Typography variant='text' size='mdBold'>
          카테고리별 현황
        </Typography>
        <Select
          name='결과분류'
          placeholder='상태'
          fetchOptions={fetchCategory}
        />
      </TopContent>

      <List>
        {mockRecentInspection.importance.map((item) => {
          return (
            <ListItem key={item.level}>
              <div>
                <Typography variant='text' size='mdBold'>
                  {item.level}
                </Typography>
                <Des variant='caption' size='mdRegular'>
                  {item.description}
                </Des>
              </div>
              <Count>
                <Issue variant='text' size='lg'>
                  {`${item.issues}`}
                </Issue>
                <Typography variant='text' size='lg'>
                  {`/${item.total}`}
                </Typography>
              </Count>
            </ListItem>
          );
        })}
      </List>
    </DropshadowCard>
  );
}

const List = styled.div`
  margin-top: 10px;
`;

const TopContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 -20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[200]};
  padding: 0 20px 20px;
`;

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[200]};
`;

const Des = styled(Typography)`
  color: ${({ theme }) => theme.colors.neutral[500]};
`;

const Issue = styled(Typography)`
  color: ${({ theme }) => theme.colors.secondary.blue[600]};
`;

const Count = styled.div`
  display: flex;
  gap: 2px;
`;
