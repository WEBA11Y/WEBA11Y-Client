import { styled } from "styled-components";
import { useState } from "react";

import { Header, HistoryList, SearchFilterBar } from "../features/History";
import EmptyHistory from "../features/History/components/EmptyHistory";
import { useRoleAuth } from "../hooks/useRoleAuth";
import { useUrls } from "../features/History/hooks/useUrls";
import { showErrorToast } from "../features/Signup/utils/toast";

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

  const toggleDeleteMode = (type: string) => {
    if (type === "cancel" || type === "delete") {
      setIsDeleteMode((prev) => !prev);
      setCheckedItems([]);
    } else {
      checkedItems.length === 0 && showErrorToast("URL이 선택되지 않았습니다");

      if (!checkedItems.length) return;
      // 확인 버튼을 눌렀을 때, 선택한 아이템이 있으면, 선택한 아이템 총 갯수 n개 삭제하시겠습니까? 모달 창 띄움
    }
  };

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
