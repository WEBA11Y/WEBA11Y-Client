import { styled } from "styled-components";
import { UseFormRegister, FieldErrors } from "react-hook-form";

import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { InspectionFormType } from "../types/main";

interface InspectionFormProps {
  register: UseFormRegister<InspectionFormType>;
  errors: FieldErrors<InspectionFormType>;
}

export default function InspectionForm({
  register,
  errors,
}: InspectionFormProps) {
  return (
    <FormContainer onSubmit={() => {}}>
      <Input
        type='text'
        name='serviceName'
        label='서비스 명'
        placeholder='서비스 명을 작성해주세요'
        register={register}
        error={errors.serviceName}
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
