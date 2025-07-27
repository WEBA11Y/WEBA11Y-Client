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
    const { description, url } = getValues();

    if (!description?.trim()) {
      return showErrorToast("서비스명을 입력해주세요");
    }
    if (!url?.trim()) {
      return showErrorToast("URL을 입력해주세요");
    }

    registerUrl.mutate(
      {
        description: description.trim(),
        url: url.trim(),
        parentId: null,
      },
      {
        onSuccess: (data) => {
          const id = typeof data === "object" && data?.id ? data.id : data;
          if (id) {
            navigate(`/stream/${id}`);
          } else {
            showErrorToast("등록은 완료되었지만 페이지 이동에 실패했습니다.");
          }
        },
        onError: (error: AxiosError) => {
          console.log("Error:", error);
          if (error?.response?.status === 400) {
            showErrorToast("URL 형식이 올바르지 않습니다.");
          } else if (error?.response?.status === 409) {
            setIsDuplicateModalOpen(true);
          } else if (error?.code === "NETWORK_ERROR" || !error?.response) {
            showErrorToast("네트워크 연결을 확인해주세요.");
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
        name='description'
        label='서비스 명'
        placeholder='서비스 명을 작성해주세요'
        register={register}
        error={errors.description}
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
