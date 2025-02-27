import { styled } from "styled-components";
import { BsArrowUpRightCircle } from "react-icons/bs";

import DropshadowCard from "../../../components/DropshadowCard";
import Typography from "../../../components/Typography";

const dates = [
  "2025.01.01",
  "2025.01.02",
  "2025.01.03",
  "2025.01.03",
  "2025.01.03",
  "2025.01.03",
  "2025.01.03",
  "2025.01.03",
  "2025.01.03",
];

export default function InspectionDate() {
  return (
    <DropshadowCard dropshadow>
      <Container>
        <Typography variant='text' size='mdBold'>
          검색 내역 (5)
        </Typography>
        <DateList>
          {dates.map((date, index) => (
            <DateItem key={date} faded={index !== 0} variant='button' size='md'>
              {date} <BsArrowUpRightCircle />
            </DateItem>
          ))}
        </DateList>
      </Container>
    </DropshadowCard>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 250px;
  overflow-y: auto;
`;

const DateList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const DateItem = styled(Typography)<{ faded: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  color: ${({ theme, faded }) =>
    faded ? theme.colors.neutral[400] : theme.colors.neutral[900]};
  font-weight: ${({ faded }) => (faded ? "normal" : "bold")};
  border-top: 1px solid ${({ theme }) => theme.colors.neutral[200]};
`;
