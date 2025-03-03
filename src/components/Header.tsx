import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import LogoImage from "../assets/logo/logo.svg";
import Button from "./Button";
import { PATH } from "../constants/path";
import Typography from "./Typography";

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
        <Typography variant='button' size='mdBold'>
          LOGIN
        </Typography>
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
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.neutral[200]};
`;

const Logo = styled.img`
  width: 70px;
  height: auto;
`;
