import { styled } from "styled-components";
import FocusLock from "react-focus-lock";

import Button from "../Button";

interface DuplicateModalProps {
  onReInspect: () => void;
  onGoToDetailPage: () => void;
}

export default function DuplicateModal({
  onReInspect,
  onGoToDetailPage,
}: DuplicateModalProps) {
  return (
    <Overlay>
      <FocusLock>
        <ModalBox role='dialog' aria-modal='true'>
          <h2>현재 등록된 URL이 존재합니다.</h2>
          <p>
            재검사를 원하시면 계속 진행하거나,
            <br />
            상세 페이지에서 확인할 수 있습니다.
          </p>
          <ButtonGroup>
            <Button variant='outline' size='large' onClick={onReInspect}>
              재검사
            </Button>
            <Button variant='darkFill' size='large' onClick={onGoToDetailPage}>
              이전 결과 보기
            </Button>
          </ButtonGroup>
        </ModalBox>
      </FocusLock>
    </Overlay>
  );
}

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalBox = styled.div`
  background: ${({ theme }) => theme.colors.common.white};
  padding: 2rem;
  border-radius: 12px;
  width: 400px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 20px;
`;
