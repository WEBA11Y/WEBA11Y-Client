import { styled } from "styled-components";

import LogoImage from "../assets/logo/logo.svg";
import Button from "./Button";

export default function Header() {
  return (
    <HeaderContainer>
      <Logo src={LogoImage} alt='장애인 마크와 w가 합쳐진 서비스 로고' />
      <Button size='medium' variant='fill'>
        LOGIN
      </Button>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  width: 100%;
  padding: 15px 20px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 70px;
  height: auto;
`;
