import { styled } from "styled-components";

import { Header, HistoryList, SearchFilterBar } from "../features/History";
import { HistoryListData } from "../features/History/types/HistoryList";
import EmptyHistory from "../features/History/components/EmptyHistory";
import { useDeleteMode } from "../features/History/hooks/useDeleteMode";

const historyListData: HistoryListData[] = [
  {
    id: 1,
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    name: "PawMate",
    date: "2024.09.08",
  },
  {
    id: 2,
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png",
    name: "PawMate",
    date: "2024.09.08",
  },
];

export default function HistoryPage() {
  const { isDeleteMode } = useDeleteMode();

  const handleSearch = () => {
    console.log("Search");
  };
  return (
    <Container>
      <Header />
      {historyListData.length ? (
        <>
          {!isDeleteMode && <SearchFilterBar onSubmit={handleSearch} />}
          <HistoryList historyListData={historyListData} />
        </>
      ) : (
        <EmptyHistory />
      )}
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
