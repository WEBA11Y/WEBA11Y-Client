import { styled } from "styled-components";

import Button from "../../../components/Button";
import Typography from "../../../components/Typography";

interface Props {
  mode: () => void;
  isDeleteMode: boolean;
}

export default function Header({ mode, isDeleteMode }: Props) {
  const count = 3;

  return (
    <Container>
      <RegistrationURL variant='title' size='sm'>
        등록된 URL ({count})
      </RegistrationURL>
      {isDeleteMode ? (
        <ButtonGroup>
          <Button variant='outline' type='button' onClick={mode}>
            취소
          </Button>
          <Button variant='fill' type='button'>
            확인
          </Button>
        </ButtonGroup>
      ) : (
        <Button variant='fill' type='button' onClick={mode}>
          삭제
        </Button>
      )}
    </Container>
  );
}
const Container = styled.div`
  ${({ theme }) => theme.mixins.flexRowBetween};
`;

const RegistrationURL = styled(Typography)`
  color: ${({ theme }) => theme.colors.neutral[700]};
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;
