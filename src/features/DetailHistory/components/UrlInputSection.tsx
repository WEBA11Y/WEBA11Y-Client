import { styled } from "styled-components";
import { FiRefreshCw, FiPlus } from "react-icons/fi";

export default function UrlInputSection() {
  return (
    <Section>
      <UrlBox>
        <UrlText>https://kr.pinterest.com</UrlText>
        <FiRefreshCw size={18} />
      </UrlBox>
      <AddButton>
        <FiPlus size={16} />
        ADD SUB URL
      </AddButton>
    </Section>
  );
}

const Section = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const UrlBox = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.colors.common.white};
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UrlText = styled.span`
  font-size: 1rem;
  font-weight: 600;
  word-break: break-word;
`;

const AddButton = styled.button`
  background: ${({ theme }) => theme.colors.common.black};
  color: white;
  border-radius: 1rem;
  padding: 0.75rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 800;
`;
