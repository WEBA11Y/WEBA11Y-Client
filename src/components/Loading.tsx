import { keyframes, styled } from "styled-components";

import Typography from "./Typography";

export default function Loading() {
  return (
    <Wrapper role='status' aria-live='polite'>
      <Spinner />
      <Title variant='title' size='sm'>
        잠시만 기다려 주세요
      </Title>
      <Message variant='text' size='md'>
        해당 페이지로 이동 중입니다.
      </Message>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);
  gap: 7px;
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid ${({ theme }) => theme.colors.neutral[300]};
  border-top-color: ${({ theme }) => theme.colors.primary[500]};
  border-radius: 50%;
  margin-bottom: 10px;
  animation: ${spin} 1s linear infinite;
`;

const Title = styled(Typography)`
  color: ${({ theme }) => theme.colors.primary[500]};
`;

const Message = styled(Typography)`
  color: ${({ theme }) => theme.colors.neutral[500]};
`;
