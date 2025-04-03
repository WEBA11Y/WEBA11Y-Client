import { styled } from "styled-components";
import FocusLock from "react-focus-lock";

import Button from "../Button";

interface AlertModalProps {
  title: string;
  description: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function AlertModal({
  title,
  description,
  onConfirm,
  onCancel,
}: AlertModalProps) {
  return (
    <Overlay>
      <FocusLock>
        <ModalBox role='dialog' aria-modal='true'>
          <h2>{title}</h2>
          <p>{description}</p>
          <ButtonGroup>
            <Button variant='outline' size='large' onClick={onCancel}>
              취소
            </Button>
            <Button variant='darkFill' size='large' onClick={onConfirm}>
              삭제
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
  width: 360px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 20px;
`;
