import { styled } from "styled-components";

import { HistoryListProps } from "../features/History/types/HistoryList";

type PaginationProps = {
  originalList?: HistoryListProps;
  page: number;
  setPage: (page: number) => void;
};

export default function Pagination({
  originalList,
  page,
  setPage,
}: PaginationProps) {
  return (
    <div>
      {originalList && originalList.totalPage > 1 && (
        <PaginationContainer>
          <StepButton
            onClick={() => setPage(Math.max(page - 1, 1))}
            disabled={page === 1}
          >
            이전
          </StepButton>
          {Array.from({ length: originalList.totalPage }, (_, i) => i + 1).map(
            (num) => (
              <PageButton
                key={num}
                onClick={() => setPage(num)}
                $active={page === num}
              >
                {num}
              </PageButton>
            )
          )}
          <StepButton
            onClick={() => setPage(Math.min(page + 1, originalList.totalPage))}
            disabled={page === originalList.totalPage}
          >
            다음
          </StepButton>
        </PaginationContainer>
      )}
    </div>
  );
}

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 6px;
  margin: 10px 0;
  flex-wrap: wrap;
`;

const StepButton = styled.button<{ $active?: boolean }>`
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.common.black};
  color: ${({ theme }) => theme.colors.common.white};
  &:disabled {
    background-color: ${({ theme }) => theme.colors.neutral[200]};
    color: ${({ theme }) => theme.colors.neutral[600]};
    cursor: not-allowed;
  }
`;
const PageButton = styled.button<{ $active?: boolean }>`
  padding: 6px 12px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  background-color: ${({ $active, theme }) =>
    $active ? theme.colors.neutral[900] : theme.colors.neutral[100]};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.common.white : theme.colors.neutral[900]};
  font-weight: ${({ $active }) => ($active ? "bold" : "normal")};

  &:hover {
    background-color: ${({ $active, theme }) =>
      $active ? theme.colors.neutral[900] : theme.colors.neutral[200]};
  }
`;
