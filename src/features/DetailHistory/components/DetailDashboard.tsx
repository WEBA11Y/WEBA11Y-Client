import { styled } from "styled-components";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import InspectionList from "./InspectionList";
import Button from "../../../components/Button";
import ServiceHeader from "./ServiceHeader";
import UrlInputSection from "./UrlInputSection";
import { StatBox } from "../../RecentInspection";
import { useUrls } from "../../History/hooks/useUrls";
import UrlList from "./UrlList";
import AlertModal from "../../../components/modal/AlertModal";

export default function DetailDashboard() {
  const [showUrlList, setShowUrlList] = useState(false);
  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  const [isModal, setIsModal] = useState(false);
  const navigate = useNavigate();

  const { useDeleteUrl, useUrlDetails } = useUrls();
  const { mutate: deleteUrls } = useDeleteUrl();
  const { history_id: historyId } = useParams();
  const { data } = useUrlDetails(Number(historyId));

  const childUrls = data?.child ?? [];

  const handleCheck = (id: number) => {
    setCheckedItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const openModal = () => setIsModal(true);
  const closeModal = () => setIsModal(false);

  const handleDelete = () => {
    deleteUrls(checkedItems);
    setIsModal(false);
    setCheckedItems([]);
  };
  return (
    <Container>
      <TopSection>
        <ServiceBox>
          <ServiceHeaderWrapper>
            <ServiceHeader
              showUrlList={showUrlList}
              onToggleList={() => setShowUrlList((prev) => !prev)}
              onTrashClick={openModal}
              url={data?.url ?? ""}
              urlId={data?.id ?? 0}
              summary={data?.summary ?? ""}
              parentId={data?.parentId ?? 0}
              favicon={data?.favicon ?? ""}
            />
            {showUrlList && (
              <UrlList
                urls={childUrls}
                onCheck={handleCheck}
                checkedItems={checkedItems}
              />
            )}
          </ServiceHeaderWrapper>

          <ScoreGrid>
            <StatBox
              title='총 위반 갯수'
              value={1}
              color='red'
              showIcon='failure'
            />
            <StatBox
              title='미수정'
              value={2}
              color='yellow'
              showIcon='review'
            />
            <StatBox
              title='수정완료'
              value={3}
              color='blue'
              showIcon='checked'
            />
          </ScoreGrid>
        </ServiceBox>
        <UrlInputSection />
      </TopSection>
      <InspectionList />
      <BottomSection>
        <Button
          variant='outline'
          type='button'
          onClick={() => navigate("/history")}
        >
          목록으로
        </Button>
        <Button variant='fill' type='button'>
          재검사
        </Button>
      </BottomSection>
      {isModal && (
        <AlertModal
          title='정말 삭제하시겠습니까?'
          description={`선택한 ${checkedItems.length}개의 URL을 삭제합니다.`}
          onConfirm={handleDelete}
          onCancel={closeModal}
        />
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
  gap: 15px;
`;

const ServiceHeaderWrapper = styled.div`
  position: relative;
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const TopSection = styled.div``;

const ServiceBox = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

const ScoreGrid = styled.div`
  display: flex;
  flex-direction: low;
  gap: 1rem;
`;
