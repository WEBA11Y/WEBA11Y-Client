import { styled } from "styled-components";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { useState } from "react";

import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { InspectionFormType } from "../types/main";
import { useUrls } from "../../History/hooks/useUrls";
import { showErrorToast } from "../../Signup/utils/toast";
import DuplicateModal from "../../../components/modal/DuplicateModal";

interface InspectionFormProps {
  register: UseFormRegister<InspectionFormType>;
  errors: FieldErrors<InspectionFormType>;
  getValues: () => InspectionFormType;
}

export default function InspectionForm({
  register,
  errors,
  getValues,
}: InspectionFormProps) {
  const [isDuplicateModalOpen, setIsDuplicateModalOpen] = useState(false);

  const navigate = useNavigate();

  const { useRegisterUrl } = useUrls();
  const registerUrl = useRegisterUrl();

  const handleSubmit = () => {
    const { summary, url } = getValues();
    if (!summary || !url)
      return showErrorToast("서비스명과 URL을 모두 입력해주세요");
    registerUrl.mutate(
      {
        summary,
        url,
        parentId: null,
      },
      {
        onSuccess: (id) => {
          navigate(`/history/${id}`);
        },
        onError: (error: AxiosError) => {
          if (error.response?.status === 400) {
            showErrorToast("URL 형식이 올바르지 않습니다.");
          } else if (error.response?.status === 409) {
            setIsDuplicateModalOpen(true);
          } else {
            showErrorToast("검사 요청에 실패했습니다.");
          }
        },
      }
    );
  };

  return (
    <FormContainer
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      {isDuplicateModalOpen && (
        <DuplicateModal
          onReInspect={() => setIsDuplicateModalOpen(false)}
          onGoToDetailPage={() => setIsDuplicateModalOpen(false)}
        />
      )}
      <Input
        type='text'
        name='summary'
        label='서비스 명'
        placeholder='서비스 명을 작성해주세요'
        register={register}
        error={errors.summary}
      />
      <Input
        type='text'
        name='url'
        label='url'
        placeholder='검수하고자 하는 URL을 넣어주세요'
        register={register}
        error={errors.url}
      />
      <Button type='submit' size='full' variant='darkFill'>
        검사하기
      </Button>
    </FormContainer>
  );
}

const FormContainer = styled.form`
  width: 100%;
  max-width: 350px;
  margin-top: 30px;
`;
