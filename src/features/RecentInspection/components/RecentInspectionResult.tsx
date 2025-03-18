import { styled } from "styled-components";

import Typography from "../../../components/Typography";
import Select from "../../../components/Select";

export const fetchServices = async () => {
  return [
    { label: "웹접근성 서비스", value: "웹접근성 서비스" },
    { label: "보안 점검 서비스", value: "보안 점검 서비스" },
  ];
};

export default function RecentInspectionResult() {
  return (
    <Header>
      <Right>
        <Typography variant='title' size='xs'>
          최근 검사 결과
        </Typography>
        <Date variant='text' size='mdRegular'>
          2024.09.08
        </Date>
      </Right>
      <Left>
        <Select
          name='서비스'
          placeholder='서비스 선택'
          fetchOptions={fetchServices}
          size='large'
        />
      </Left>
    </Header>
  );
}

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 10px;
`;

const Date = styled(Typography)`
  color: ${({ theme }) => theme.colors.neutral[500]};
`;

const Left = styled.div``;
