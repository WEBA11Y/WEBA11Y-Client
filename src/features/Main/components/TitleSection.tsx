import { styled } from "styled-components";

import Typography from "../../../components/Typography";

export default function TitleSection() {
  return (
    <TitleContainer>
      <Typography variant='title' size='mdBold'>
        모든 사용자를 위한 웹
      </Typography>
      <Typography variant='title' size='mdRegular'>
        접근성은 선택이 아닌 필수입니다.
      </Typography>
      <Typography variant='text' size='mdRegular'>
        검수 서비스를 통해 여러분의 웹사이트를 더 많은 사람들에게 열어주세요.
      </Typography>
    </TitleContainer>
  );
}

const TitleContainer = styled.div`
  margin-bottom: 5px;
`;
