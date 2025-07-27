import { styled } from "styled-components";
import { IoClose } from "react-icons/io5";
import FocusLock from "react-focus-lock";
import { useForm } from "react-hook-form";

import LogoImage from "../../assets/logo/logo.svg";
import Input from "../Input";
import Button from "../Button";

interface Props {
  onClose: () => void;
  currentUrl?: string;
}

export default function AddSubUrlModal({ onClose, currentUrl }: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting },
  } = useForm({ defaultValues: { currentUrl } });

  const watchedUrl = watch("currentUrl", "");

  const onSubmit = () => {};

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
          <ModalContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                type='text'
                name='currentUrl'
                label='url'
                placeholder='추가할 url을 입력하세요'
                register={register}
              />
              <Button
                type='submit'
                size='full'
                variant='darkFill'
                disabled={!watchedUrl || isSubmitting}
              >
                검사하기
              </Button>
            </form>
          </ModalContent>
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
  margin-bottom: 30px;
`;

const Logo = styled.img`
  height: 32px;
`;

const CloseButton = styled.button`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.neutral[800]};
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;
