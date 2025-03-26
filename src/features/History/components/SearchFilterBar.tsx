import { ChangeEvent, FormEvent } from "react";
import { styled } from "styled-components";
import { IoSearchOutline } from "react-icons/io5";
import { CiFilter } from "react-icons/ci";

import DropshadowCard from "../../../components/DropshadowCard";

interface Props {
  onSortChange: (value: string) => void;
  currentSort: string;
}
export default function SearchFilterBar({ onSortChange, currentSort }: Props) {
  return (
    <DropshadowCard>
      <FormContainer
        onSubmit={(e: FormEvent<HTMLFormElement>) => e.preventDefault()}
      >
        <SearchBox>
          <IoSearchOutline />
          <SearchInput placeholder='URL 혹은 서비스 명을 검색해주세요' />
        </SearchBox>
        <SortBox>
          <CiFilter />
          <SortSelect
            value={currentSort}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              onSortChange(e.target.value)
            }
            defaultValue='정렬 기준'
          >
            <option value='sort' hidden>
              정렬기준
            </option>
            <option value='latest'>최신순</option>
            <option value='oldest'>오래된순</option>
            <option value='name'>이름순</option>
          </SortSelect>
        </SortBox>
      </FormContainer>
    </DropshadowCard>
  );
}

const FormContainer = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const SearchBox = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  align-items: center;
  gap: 10px;
  background: ${({ theme }) => theme.colors.common.white};
`;

const SearchInput = styled.input`
  flex: 1;
`;
const SortBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 8px 12px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.common.white};
  cursor: pointer;
`;

const SortSelect = styled.select`
  border: none;
  background: transparent;
  font-size: ${({ theme }) => theme.typo.text.md.fontSize};
  color: ${({ theme }) => theme.colors.neutral[700]};
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
