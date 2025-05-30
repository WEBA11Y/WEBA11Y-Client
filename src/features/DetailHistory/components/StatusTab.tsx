import { useState } from "react";
import { styled } from "styled-components";

interface Tab {
  label: string;
  count: number;
}

const tabs: Tab[] = [
  { label: "검토", count: 8 },
  { label: "권장", count: 10 },
  { label: "실패", count: 15 },
];

export default function StatusTab({
  onSelect,
}: {
  onSelect: (tab: string) => void;
}) {
  const [activeTab, setActiveTab] = useState("검토");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    onSelect(tab);
  };

  return (
    <TabContainer>
      {tabs.map((tab) => (
        <TabItem
          key={tab.label}
          $active={activeTab === tab.label}
          onClick={() => handleTabClick(tab.label)}
        >
          {tab.label}({tab.count})
        </TabItem>
      ))}
    </TabContainer>
  );
}

const TabContainer = styled.div`
  display: flex;
  gap: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[300]};
`;

const TabItem = styled.button<{ $active: boolean }>`
  font-size: 16px;
  font-weight: ${({ $active }) => ($active ? "bold" : "normal")};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.neutral[900] : theme.colors.neutral[500]};
  padding: 10px;
  border: none;
  background: none;
  cursor: pointer;
  position: relative;

  ${({ $active, theme }) =>
    $active &&
    `
    border-bottom: 2px solid ${theme.colors.primary[500]};
  `}
`;
