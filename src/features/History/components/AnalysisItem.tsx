import { styled } from "styled-components";
import { BsArrowUpRightCircle } from "react-icons/bs";

import { HistoryListData } from "../types/HistoryList";

interface Props {
  item: HistoryListData;
}
export default function AnalysisItem({ item: { logo, name, date } }: Props) {
  return (
    <ItemContainer>
      <ItemLeft>
        <Logo src={logo} alt={`${name} logo`} />
        <TextContainer>
          <ServiceName>{name}</ServiceName>
          <Date>{date}</Date>
        </TextContainer>
      </ItemLeft>
      <ExternalLink>
        <BsArrowUpRightCircle />
      </ExternalLink>
    </ItemContainer>
  );
}

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[200]};
  cursor: pointer;
`;

const ItemLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Logo = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.neutral[100]};
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ServiceName = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.neutral[900]};
`;

const Date = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.neutral[500]};
`;

const ExternalLink = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.neutral[500]};
  font-size: 24px;
  display: flex;
  align-items: center;
`;
