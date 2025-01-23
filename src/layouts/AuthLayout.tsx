import { Outlet } from "react-router-dom";
import { styled } from "styled-components";

export default function AuthLayout() {
  return (
    <StyledAuthLayout>
      <Outlet />
    </StyledAuthLayout>
  );
}

const StyledAuthLayout = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
  max-width: 1470px;
  height: calc(100vh - 200px);
  ${({ theme }) => theme.mixins.flexColumnCenter};
`;
