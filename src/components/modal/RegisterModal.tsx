import { styled } from "styled-components";
import FocusLock from "react-focus-lock";
import { useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";

import LogoImage from "../../assets/logo/logo.svg";
import InspectionForm from "../../features/Main/components/InspectionForm";
import { InspectionFormType } from "../../features/Main/types/main";

interface RegisterModalProps {
  onClose: () => void;
}

export default function RegisterModal({ onClose }: RegisterModalProps) {
  const {
    register,
    formState: { errors },
    getValues,
  } = useForm<InspectionFormType>();
  return (
    <Overlay>
      <FocusLock>
        <ModalBox role='dialog' aria-modal='true'>
          <ModalHeader>
            <Logo src={LogoImage} alt='로고' />
            <CloseButton onClick={onClose} aria-label='모달 닫기'>
              <IoClose size={24} />
            </CloseButton>
          </ModalHeader>
          <InspectionForm
            register={register}
            errors={errors}
            getValues={getValues}
          />
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
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const Logo = styled.img`
  height: 32px;
`;

const CloseButton = styled.button`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.neutral[800]};
`;
