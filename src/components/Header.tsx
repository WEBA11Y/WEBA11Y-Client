import styled from "styled-components";

import LogoImage from "../assets/logo/logo.svg";

export default function Header() {
  return (
    <HeaderContainer>
      <Logo src={LogoImage} alt='장애인 마크와 w가 합쳐진 서비스 로고' />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  width: 100%;
  padding: 15px 0;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Logo = styled.img`
  width: 70px;
  height: auto;
`;
