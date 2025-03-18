import { styled } from "styled-components";
import { Link, useLocation } from "react-router-dom";
import {
  FaChartBar,
  FaHistory,
  FaQuestionCircle,
  FaCog,
  FaPlus,
} from "react-icons/fa";

import { PATH } from "../constants/path";
import Typography from "./Typography";
import Button from "./Button";

const MENU_ITEMS = [
  { path: PATH.DASHBOARD, icon: <FaChartBar />, label: "대시보드" },
  { path: PATH.HISTORY, icon: <FaHistory />, label: "분석 히스토리" },
  { path: PATH.GUIDE, icon: <FaQuestionCircle />, label: "도움말 및 가이드" },
  { path: PATH.SETTINGS, icon: <FaCog />, label: "사용자 설정" },
];

export default function Sidebar() {
  const location = useLocation().pathname;

  return (
    <SidebarContainer>
      <Menu>
        {MENU_ITEMS.map(({ path, icon, label }) => {
          const isActive = location === path;
          return (
            <MenuItem key={path} to={path} active={isActive}>
              {icon}
              <Typography
                variant='text'
                size={isActive ? "mdBold" : "mdRegular"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </Menu>
      <Button variant='outline' type='button' icon={<FaPlus />} size='large'>
        ADD URL
      </Button>
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div`
  width: 240px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const Menu = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
`;

const MenuItem = styled(Link)<{ active?: boolean }>`
  display: flex;
  align-items: center;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 10px;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.neutral[100] : "transparent"};
  color: ${({ active, theme }) =>
    active ? theme.colors.neutral[800] : theme.colors.neutral[600]};

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral[100]};
  }

  svg {
    margin-right: 10px;
  }
`;
