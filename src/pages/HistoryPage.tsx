import { styled } from "styled-components";
import { useState } from "react";

import { Header, HistoryList, SearchFilterBar } from "../features/History";
import EmptyHistory from "../features/History/components/EmptyHistory";
import { useUrls } from "../features/History/hooks/useUrls";
import AlertModal from "../components/modal/AlertModal";
import useAuthStore from "../store/useAuthStore";
import { RoleError } from "../features/Signup/utils/error";
import { useHistoryFilter } from "../features/History/hooks/useHistoryFilter";
import { useHistoryDelete } from "../features/History/hooks/useHistoryDelete";
import Pagination from "../components/Pagination";

export default function HistoryPage() {
  const [isModal, setIsModal] = useState(false);
  const [page, setPage] = useState(1);
  const { useUserUrls, useDeleteUrl } = useUrls();
  const { mutate: deleteUrls } = useDeleteUrl();

  const { data: originalList } = useUserUrls(page);
  const content = originalList?.content ?? [];

  const { sort, setSort, search, setSearch, sortedList } =
    useHistoryFilter(content);
  const {
    checkedItems,
    handleCheck,
    isDeleteMode,
    setIsDeleteMode,
    toggleDeleteMode,
  } = useHistoryDelete(setIsModal);
  const { role } = useAuthStore();

  if (role === "guest") {
    throw new RoleError();
  }

  return (
    <Container>
      {isModal && (
        <AlertModal
          title={`정말 삭제하시겠습니까?`}
          description={`선택한 ${checkedItems.length}개의 URL을 삭제합니다.`}
          onConfirm={() => {
            deleteUrls(checkedItems);
            setIsDeleteMode((prev) => !prev);
            setIsModal((prev) => !prev);
          }}
          onCancel={() => setIsModal((prev) => !prev)}
        />
      )}
      <Header
        mode={toggleDeleteMode}
        isDeleteMode={isDeleteMode}
        count={content?.length}
      />
      {content?.length ? (
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
            sortedList={sortedList}
            isDeleteMode={isDeleteMode}
            checkedItems={checkedItems}
            onCheck={handleCheck}
            searchKeyword={search}
          />
        </>
      ) : (
        <EmptyHistory />
      )}
      <Pagination originalList={originalList} page={page} setPage={setPage} />
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
