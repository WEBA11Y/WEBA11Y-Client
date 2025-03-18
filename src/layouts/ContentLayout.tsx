import { Outlet } from "react-router-dom";
import { styled } from "styled-components";

import Sidebar from "../components/Sidebar";

export default function ContentLayout() {
  return (
    <Container>
      <Sidebar />
      <MainSection>
        <Content>
          <Outlet />
        </Content>
      </MainSection>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: calc(100vh - 69px);
`;

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Content = styled.div`
  flex-grow: 1;
  padding: 50px;
  background-color: ${({ theme }) => theme.colors.neutral[100]};
  overflow-y: auto;
`;
