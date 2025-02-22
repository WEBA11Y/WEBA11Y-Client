import { styled } from "styled-components";
import {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

import Typography from "./Typography";

type Props<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  type: string;
  placeholder?: string;
  error?: FieldError | string;
  register: UseFormRegister<T>;
  checkDuplicate?: () => void;
};

export default function Input<T extends FieldValues>({
  name,
  type,
  label,
  placeholder,
  register,
  error,
  checkDuplicate,
}: Props<T>) {
  return (
    <InputContainer hasButton={!!checkDuplicate}>
      <label htmlFor={name}>
        <Typography variant='caption' size='sm'>
          {label}
        </Typography>
      </label>
      <StyledInput
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name, { required: "필수 입력 항목입니다." })}
      />

      {error && (
        <ErrorText>
          {typeof error === "string" ? error : error.message}
        </ErrorText>
      )}
    </InputContainer>
  );
}

const InputContainer = styled.div<{ hasButton: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  label {
    display: none;
  }
`;

const StyledInput = styled.input`
  flex: 1;
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.colors.neutral[500]};
  border-radius: 8px;
  font-size: 12px;
  background-color: ${({ theme }) => theme.colors.common.white};
  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary.blue[500]};
    outline: none;
  }
`;

const ErrorText = styled.span`
  margin-top: 5px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.primary[500]};
`;
