import { styled } from "styled-components";

import Button from "../../../components/Button";
import Typography from "../../../components/Typography";

interface Props {
  mode: (type: string) => void;
  isDeleteMode: boolean;
  count: number | undefined;
}

export default function Header({ mode, isDeleteMode, count }: Props) {
  return (
    <Container>
      <RegistrationURL variant='text' size='lg'>
        등록된 URL ({count ? count : 0})
      </RegistrationURL>
      {count &&
        count > 0 &&
        (isDeleteMode ? (
          <ButtonGroup>
            <Button
              variant='outline'
              type='button'
              onClick={() => mode("cancel")}
            >
              취소
            </Button>
            <Button variant='fill' type='button' onClick={() => mode("submit")}>
              확인
            </Button>
          </ButtonGroup>
        ) : (
          <Button variant='fill' type='button' onClick={() => mode("delete")}>
            삭제
          </Button>
        ))}
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
