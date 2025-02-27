import { useState } from "react";
import { styled } from "styled-components";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import DropshadowCard from "../../../components/DropshadowCard";
import Typography from "../../../components/Typography";

const menuData = [
  {
    id: "user",
    label: "user",
    children: ["login", "register"],
  },
  {
    id: "cart",
    label: "cart",
    children: ["cart1", "cart2", "cart3"],
  },
  {
    id: "category",
    label: "category",
    children: [
      {
        id: "fashion",
        label: "fashion",
        children: ["men", "women"],
      },
    ],
  },
];

export default function UrlStructure() {
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});

  const toggleExpand = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <DropshadowCard dropshadow>
      <Container>
        <Typography variant='text' size='mdBold'>
          URL 구조
        </Typography>
        <Menu>
          {menuData.map((item) => (
            <MenuItem key={item.id}>
              <MenuHeader onClick={() => toggleExpand(item.id)}>
                {expanded[item.id] ? <FaChevronUp /> : <FaChevronDown />}
                <Typography variant='text' size='mdBold'>
                  {item.label}
                </Typography>
              </MenuHeader>
              {expanded[item.id] && (
                <SubMenu>
                  {item.children.map((subItem) =>
                    typeof subItem === "string" ? (
                      <SubMenuItem key={subItem}>{subItem}</SubMenuItem>
                    ) : (
                      <MenuItem key={subItem.id}>
                        <MenuHeader onClick={() => toggleExpand(subItem.id)}>
                          {expanded[subItem.id] ? (
                            <FaChevronUp />
                          ) : (
                            <FaChevronDown />
                          )}
                          <Typography variant='text' size='mdBold'>
                            {subItem.label}
                          </Typography>
                        </MenuHeader>
                        {expanded[subItem.id] && (
                          <SubMenu>
                            {subItem.children.map((child) => (
                              <SubMenuItem key={child}>{child}</SubMenuItem>
                            ))}
                          </SubMenu>
                        )}
                      </MenuItem>
                    )
                  )}
                </SubMenu>
              )}
            </MenuItem>
          ))}
        </Menu>
      </Container>
    </DropshadowCard>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 250px;
`;

const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  overflow-y: auto;
`;

const MenuItem = styled.li`
  border-top: 1px solid ${({ theme }) => theme.colors.neutral[200]};
`;

const MenuHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
  cursor: pointer;
`;

const SubMenu = styled.ul`
  list-style: none;
  padding-left: 20px;
`;

const SubMenuItem = styled.li`
  padding: 5px 0;
  color: ${({ theme }) => theme.colors.neutral[600]};
`;
