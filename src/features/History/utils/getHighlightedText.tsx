import { styled } from "styled-components";

export const getHighlightedText = (text: string, keyword: string) => {
  if (!keyword) return text;

  const index = text.toLowerCase().indexOf(keyword.toLowerCase());
  if (index === -1) return text;

  const before = text.slice(0, index);
  const match = text.slice(index, index + keyword.length);
  const after = text.slice(index + keyword.length);

  return (
    <>
      {before}
      <Highlight>{match}</Highlight>
      {after}
    </>
  );
};

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.primary[500]};
  font-weight: 600;
`;
