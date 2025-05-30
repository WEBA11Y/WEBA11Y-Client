import { styled } from "styled-components";
import { IoClose } from "react-icons/io5";
import FocusLock from "react-focus-lock";
import { useForm } from "react-hook-form";

import LogoImage from "../../assets/logo/logo.svg";
import { useUrls } from "../../features/History/hooks/useUrls";
import Input from "../Input";
import Button from "../Button";

interface Props {
  onClose: () => void;
  urlId: number;
  summary: string;
  parentId: number;
  url: string;
}

export default function EditModal({
  onClose,
  urlId,
  summary,
  parentId,
  url,
}: Props) {
  const { useUpdateUrl } = useUrls();
  const { mutate: updateUrl } = useUpdateUrl();

  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: { summary },
  });

  const watchedSummary = watch("summary", "");

  const onSubmit = () => {
    updateUrl(
      { id: urlId, data: { summary: watchedSummary, parentId, url } },
      {
        onSuccess: () => {
          onClose();
        },
        onError: (err) => {
          console.error("서비스명 변경 실패", err);
        },
      }
    );
  };

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
                name='summary'
                label='서비스 명'
                placeholder='서비스 명을 작성해주세요'
                register={register}
              />
              <Button
                type='submit'
                size='full'
                variant='darkFill'
                disabled={!watchedSummary.trim() || isSubmitting}
              >
                변경하기
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
