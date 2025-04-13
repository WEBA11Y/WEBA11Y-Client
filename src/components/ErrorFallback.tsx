import { styled } from "styled-components";
import { FallbackProps } from "react-error-boundary";
import { FiAlertCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import Typography from "./Typography";
import Button from "./Button";
import { PATH } from "../constants/path";
import { RoleError } from "../features/Signup/utils/error";

export default function ErrorFallback({
  error,
  resetErrorBoundary,
}: FallbackProps) {
  const navigate = useNavigate();
  const isRoleError = error instanceof RoleError;

  const handleClick = () => {
    if (isRoleError) {
      navigate(PATH.SIGNIN);
    } else {
      navigate(PATH.HOME);
    }
    resetErrorBoundary();
  };
  return (
    <Container role='alert'>
      <FiAlertCircle size={50} />
      <Title variant='title'>문제가 발생했습니다</Title>
      <Message variant='text' size='md'>
        {error.message}
      </Message>
      <RetryButton>
        <Button size='full' type='button' onClick={handleClick}>
          {isRoleError ? "로그인 하러가기" : "홈으로 이동"}
        </Button>
      </RetryButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 400px;
  height: calc(100vh - 200px);
  margin: 0 auto;
`;

const Title = styled(Typography)`
  margin: 2rem 0 1rem;
`;
const Message = styled(Typography)`
  margin-bottom: 1.5rem;
`;

const RetryButton = styled.div`
  width: 50%;
  margin-top: 2rem;
`;
