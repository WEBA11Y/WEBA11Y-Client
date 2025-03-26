import { styled } from "styled-components";
import { useMemo, useState } from "react";

import { Header, HistoryList, SearchFilterBar } from "../features/History";
import EmptyHistory from "../features/History/components/EmptyHistory";
import { useUrls } from "../features/History/hooks/useUrls";
import { showErrorToast } from "../features/Signup/utils/toast";
import AlertModal from "../components/modal/AlertModal";
import { getSortedList } from "../features/History/utils/sort";
import useAuthStore from "../store/useAuthStore";
import { RoleError } from "../features/Signup/utils/error";
import { useDebounce } from "../hooks/useDebounce";

export default function HistoryPage() {
  const { useUserUrls } = useUrls();
  const { role } = useAuthStore();

  if (role === "guest") {
    throw new RoleError();
  }

  const [sort, setSort] = useState<string>("latest");
  const [search, setSearch] = useState<string>("");
  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const { data } = useUserUrls();
  const debounceSearch = useDebounce(search, 300);

  const filteredData = useMemo(() => {
    return data?.filter((item) =>
      item.summary.toLowerCase().includes(debounceSearch.toLowerCase())
    );
  }, [data, debounceSearch]);

  const historyListData = getSortedList(filteredData, sort);

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
      setIsModal((prev) => !prev);
    }
  };

  return (
    <Container>
      {isModal ? (
        <AlertModal
          title={`정말 삭제하시겠습니까?`}
          description={`선택한 ${checkedItems.length}개의 URL을 삭제합니다.`}
          //삭제 로직 추가
          onConfirm={() => {}}
          onCancel={() => setIsModal((prev) => !prev)}
        />
      ) : null}

      <Header
        mode={toggleDeleteMode}
        isDeleteMode={isDeleteMode}
        count={data?.length}
      />
      {data?.length ? (
        <>
          {!isDeleteMode && (
            <SearchFilterBar
              onSortChange={setSort}
              currentSort={sort}
              onSearchChange={setSearch}
              currentSearchKeyword={search}
            />
          )}
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
