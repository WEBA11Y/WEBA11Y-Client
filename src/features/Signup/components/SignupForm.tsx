import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { PATH } from "../../../constants/path";
import Typography from "../../../components/Typography";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { useSignup } from "../hooks/useSignup";
import { SignupFormType } from "../types/signup.d";

type Props = {
  id: string;
  password: string;
};

export default function SignupForm() {
  const navigate = useNavigate();
  const { postSignup } = useSignup();
  const { handleSubmit } = useForm<Props>();

  const onSubmit = (data: SignupFormType) => {
    postSignup.mutate(data, {
      onSuccess: () => {
        alert("회원가입이 완료되었습니다!");
      },
      onError: (error) => {
        alert(`회원가입 중 오류가 발생했습니다: ${error.message}`);
      },
    });
  };

  return (
    <SignupFormContainer>
      <div className='title'>
        <Typography variant='title' size='sm'>
          회원가입
        </Typography>
        <Typography variant='text' size='sm'>
          더 많은 사람들과 소통하는 웹, 검수 서비스로 시작하세요.
        </Typography>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type='email'
          name='id'
          label='아이디'
          placeholder='아이디를 입력하세요'
        />
        <Input
          type='password'
          name='password'
          label='비밀번호'
          placeholder='비밀번호를 입력하세요'
        />
        <Button variant='fill' size='full'>
          회원가입
        </Button>
      </form>

      <div className='auth'>
        <Typography variant='text' size='xs'>
          이미 계정이 있으신가요?
        </Typography>
        <button type='button' onClick={() => navigate(PATH.SIGNIN)}>
          <Typography variant='button' size='sm'>
            로그인하기
          </Typography>
        </button>
      </div>
    </SignupFormContainer>
  );
}

const SignupFormContainer = styled.div`
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
