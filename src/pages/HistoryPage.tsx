import { styled } from "styled-components";
import { useEffect, useState } from "react";

import { Header, HistoryList, SearchFilterBar } from "../features/History";
import { HistoryListData } from "../features/History/types/HistoryList";
import EmptyHistory from "../features/History/components/EmptyHistory";

const data: HistoryListData[] = [
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
  const [historyListData, setHistoryListData] =
    useState<HistoryListData[]>(data);
  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCheck = (id: number) => {
    setCheckedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleDeleteMode = () => {
    setIsDeleteMode((prev) => !prev);
  };

  useEffect(() => {
    if (!isDeleteMode) {
      setCheckedItems([]);
    }
  }, [isDeleteMode]);

  const handleSearch = () => {
    console.log("Search", setHistoryListData, isModalOpen, setIsModalOpen);
  };

  // const handleDelete = () => {
  //   if (!checkedItems.length) return;
  // };

  return (
    <Container>
      <Header mode={toggleDeleteMode} isDeleteMode={isDeleteMode} />
      {historyListData.length ? (
        <>
          {!isDeleteMode && <SearchFilterBar onSubmit={handleSearch} />}
          <HistoryList
            historyListData={historyListData}
            isDeleteMode={isDeleteMode}
            checkedItems={checkedItems}
            onCheck={handleCheck}
          />
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
