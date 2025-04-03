import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { FiCheckCircle, FiBox } from "react-icons/fi";

import { HistoryListData } from "../types/HistoryList";
import { PATH } from "../../../constants/path";
import { getHighlightedText } from "../utils/getHighlightedText";

interface Props {
  item: HistoryListData;
  isDeleteMode: boolean;
  checkedItems: number[];
  onCheck: (id: number) => void;
  searchKeyword: string;
}

export default function AnalysisItem({
  item: { id, summary, createDate, favicon },
  isDeleteMode,
  onCheck,
  checkedItems,
  searchKeyword,
}: Props) {
  const isChecked = checkedItems.includes(id);

  return (
    <ItemContainer to={isDeleteMode ? undefined : `${PATH.HISTORY}/${id}`}>
      <ItemLeft>
        {favicon ? (
          <Logo src={favicon} alt={`${summary} logo`} />
        ) : (
          <EmptyLogo>
            <FiBox />
          </EmptyLogo>
        )}

        <TextContainer>
          <ServiceName>
            {getHighlightedText(summary, searchKeyword)}
          </ServiceName>
          <Date>{createDate.split("T")[0]}</Date>
        </TextContainer>
      </ItemLeft>

      {isDeleteMode ? (
        <CheckBox $isChecked={isChecked} onClick={() => onCheck(id)}>
          <FiCheckCircle />
        </CheckBox>
      ) : (
        <ExternalLink>
          <BsArrowUpRightCircle />
        </ExternalLink>
      )}
    </ItemContainer>
  );
}

const ItemContainer = styled(Link)`
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

const EmptyLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.neutral[400]};
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

const CheckBox = styled.button<{ $isChecked: boolean }>`
  color: ${({ theme, $isChecked }) =>
    $isChecked ? theme.colors.primary[500] : theme.colors.neutral[500]};
  font-size: 24px;
`;
