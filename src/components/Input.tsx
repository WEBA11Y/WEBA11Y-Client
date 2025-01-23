import { styled } from "styled-components";
import { FieldError, FieldValues, useForm } from "react-hook-form";

import Typography from "./Typography";

type Props = {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  error?: FieldError;
};

export default function Input({ name, type, label, placeholder }: Props) {
  const { register } = useForm<FieldValues>();
  return (
    <InputContainer>
      <label htmlFor={label}>
        <Typography variant='caption' size='sm'>
          {label}
        </Typography>
      </label>

      <StyledInput
        type={type}
        placeholder={placeholder}
        {...register(name, { required: true })}
      />
    </InputContainer>
  );
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const StyledInput = styled.input`
  margin-top: 5px;
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.colors.neutral[500]};
  border-radius: 8px;
  font-size: 12px;

  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary.blue[500]};
    outline: none;
  }
`;

// const ErrorText = styled.span`
//   margin-top: 5px;
//   font-size: 12px;
//   color: ${({ theme }) => theme.colors.primary[500]};
// `;
