import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import LogoImage from "../assets/logo/logo.svg";
import Button from "./Button";
import { PATH } from "../constants/path";

export default function Header() {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Logo src={LogoImage} alt='장애인 마크와 w가 합쳐진 서비스 로고' />
      <Button
        size='medium'
        variant='fill'
        type='button'
        onClick={() => {
          navigate(PATH.SIGNIN);
        }}
      >
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
