import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import { PATH } from "../../../constants/path";
import Typography from "../../../components/Typography";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

export default function SigninForm() {
  const navigate = useNavigate();

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
      <form>
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
        <Button variant='fill' size='full' disabled>
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
