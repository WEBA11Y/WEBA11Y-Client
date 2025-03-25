import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import LogoImage from "../assets/logo/logo.svg";
import Button from "./Button";
import { PATH } from "../constants/path";
import Typography from "./Typography";
import useAuthStore from "../store/useAuthStore";

export default function Header() {
  const navigate = useNavigate();
  const { isLoggedIn, logout: performLogout } = useAuthStore();
  const home = location.pathname === "/";

  const logout = () => {
    performLogout();
    navigate(PATH.HOME);
  };

  return (
    <HeaderContainer>
      <Logo
        src={LogoImage}
        alt='장애인 마크와 w가 합쳐진 서비스 로고'
        onClick={() => navigate(PATH.HOME)}
      />
      <RightSection>
        {isLoggedIn && home && (
          <Button
            size='medium'
            variant='fill'
            type='button'
            onClick={() => navigate(PATH.DASHBOARD)}
          >
            <Dashboard variant='button' size='lg'>
              MY DASHBOARD
            </Dashboard>
          </Button>
        )}
        {isLoggedIn ? (
          <Button
            size='medium'
            variant='outline'
            type='button'
            onClick={logout}
          >
            <Typography variant='button' size='mdBold'>
              LOGOUT
            </Typography>
          </Button>
        ) : (
          <Button
            size='medium'
            variant='fill'
            type='button'
            onClick={() => navigate(PATH.SIGNIN)}
          >
            <Typography variant='button' size='mdBold'>
              LOGIN
            </Typography>
          </Button>
        )}
      </RightSection>
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
  cursor: pointer;
`;

const Dashboard = styled(Typography)`
  color: ${({ theme }) => theme.colors.common.white};
`;
const RightSection = styled.div`
  display: flex;
  gap: 20px;
`;
