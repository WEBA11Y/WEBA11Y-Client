import { styled } from "styled-components";
import { useEffect, useState } from "react";

import { Header, HistoryList, SearchFilterBar } from "../features/History";
import EmptyHistory from "../features/History/components/EmptyHistory";
import { useRoleAuth } from "../hooks/useRoleAuth";
import { useUrls } from "../features/History/hooks/useUrls";

export default function HistoryPage() {
  useRoleAuth();
  const { useUserUrls } = useUrls();
  const { data: historyListData } = useUserUrls();

  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  const [isDeleteMode, setIsDeleteMode] = useState(false);

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

  // const handleDelete = () => {
  //   if (!checkedItems.length) return;
  // };

  return (
    <Container>
      <Header
        mode={toggleDeleteMode}
        isDeleteMode={isDeleteMode}
        count={historyListData?.length}
      />
      {historyListData?.length ? (
        <>
          {!isDeleteMode && <SearchFilterBar onSubmit={() => {}} />}
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
