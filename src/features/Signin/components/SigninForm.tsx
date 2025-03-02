import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { PATH } from "../../../constants/path";
import { useSignin } from "../hooks/useSignin";
import { SigninFormType } from "../types/signin";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Typography from "../../../components/Typography";

export default function SigninForm() {
  const navigate = useNavigate();
  const { mutate } = useSignin();
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<SigninFormType>();

  const userId = watch("userId");
  const password = watch("password");

  const isFormValid = userId?.trim() !== "" && password?.trim() !== "";

  const onSubmit = (data: SigninFormType) => {
    mutate(data, {
      onSuccess: () => {
        navigate(PATH.HOME);
      },
    });
  };

  return (
    <SigninFormContainer>
      <div className='title'>
        <Typography variant='title' size='sm'>
          로그인
        </Typography>
        <Typography variant='text' size='sm'>
          더 많은 사람들과 소통하는 웹, 검수 서비스로 시작하세요.
        </Typography>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type='text'
          name='userId'
          label='아이디'
          placeholder='아이디'
          register={register}
          error={errors.userId}
        />

        <Input
          type='password'
          name='password'
          label='비밀번호'
          placeholder='비밀번호'
          register={register}
          error={errors.password}
        />

        {errors.root && <ErrorText>{errors.root.message}</ErrorText>}

        <Button
          variant='fill'
          size='full'
          type='submit'
          disabled={!isFormValid}
        >
          로그인
        </Button>
      </form>

      <div className='auth'>
        <Typography variant='text' size='xs'>
          계정이 없으신가요?
        </Typography>
        <button type='button' onClick={() => navigate(PATH.SIGNUP)}>
          <Typography variant='button' size='sm'>
            회원가입하기
          </Typography>
        </button>
      </div>
    </SigninFormContainer>
  );
}

const SigninFormContainer = styled.div`
  width: 100%;
  max-width: 480px;
  padding: 0 20px;

  .title {
    ${({ theme }) => theme.mixins.flexColumnCenter};
    margin-bottom: 30px;
    gap: 10px;
  }
  .auth {
    margin-top: 20px;
    ${({ theme }) => theme.mixins.flexRowCenter};
    button {
      margin-left: 5px;
    }
  }
`;

const ErrorText = styled.p`
  color: ${({ theme }) => theme.colors.primary[500]};
  font-size: 12px;
  margin-top: 5px;
  text-align: center;
`;
