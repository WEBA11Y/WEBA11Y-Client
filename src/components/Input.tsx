import { styled } from "styled-components";
import {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

import Typography from "./Typography";
import Button from "./Button";

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
      <div className='input-with-button'>
        <StyledInput
          id={name}
          type={type}
          placeholder={placeholder}
          {...register(name, { required: "필수 입력 항목입니다." })}
        />
        {checkDuplicate && (
          <Button
            type='button'
            variant='outline'
            size='small'
            onClick={checkDuplicate}
          >
            중복 확인
          </Button>
        )}
      </div>
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

  .input-with-button {
    display: flex;
    align-items: center;
    gap: ${({ hasButton }) => (hasButton ? "10px" : "0")};
  }
`;

const StyledInput = styled.input`
  flex: 1;
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.colors.neutral[500]};
  border-radius: 8px;
  font-size: 12px;

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
