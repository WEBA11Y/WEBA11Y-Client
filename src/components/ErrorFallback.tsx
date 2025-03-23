import { styled } from "styled-components";
import { FallbackProps } from "react-error-boundary";
import { FiAlertCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import Typography from "./Typography";
import Button from "./Button";
import { getFriendlyMessage } from "../utils/errorMessage";
import { PATH } from "../constants/path";

export default function ErrorFallback({
  error,
  resetErrorBoundary,
}: FallbackProps) {
  const message = getFriendlyMessage(error);
  const navigate = useNavigate();

  const isAuthError = message.includes("로그인");
  return (
    <Container role='alert'>
      <FiAlertCircle size={50} />
      <Title variant='title'>문제가 발생했습니다</Title>
      <Message variant='text' size='md'>
        {getFriendlyMessage(error)}
      </Message>
      <RetryButton>
        <Button
          size='full'
          type='button'
          onClick={() => {
            if (isAuthError) {
              navigate(PATH.SIGNIN);
            } else {
              resetErrorBoundary();
            }
          }}
        >
          {isAuthError ? "로그인하러 가기" : "다시 시도"}
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
