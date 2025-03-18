import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { GoChevronDown } from "react-icons/go";
import { styled } from "styled-components";

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  name: string;
  placeholder: string;
  fetchOptions: () => Promise<Option[]>;
  size?: "small" | "large";
}

export default function Select({
  name,
  placeholder,
  fetchOptions,
  size = "small",
}: SelectProps) {
  const { control, setValue } = useForm();
  const [isOpen, setIsOpen] = useState(false);

  const { data: options = [] } = useQuery({
    queryKey: [name],
    queryFn: fetchOptions,
  });
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Dropdown size={size}>
          <SelectBox onClick={() => setIsOpen(!isOpen)}>
            {field.value || placeholder}
            <GoChevronDown />
          </SelectBox>
          {isOpen && (
            <DropdownList>
              {options.map((option) => (
                <DropdownItem
                  key={option.value}
                  onClick={() => {
                    setValue(name, option.value);
                    setIsOpen(false);
                  }}
                >
                  {option.label}
                </DropdownItem>
              ))}
            </DropdownList>
          )}
        </Dropdown>
      )}
    />
  );
}

const Dropdown = styled.div<{ size: "small" | "large" }>`
  position: relative;
  width: ${({ size }) => (size === "small" ? "100px" : "200px")};
`;

const SelectBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.neutral[400]};
  border-radius: 8px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.common.white};
  font-size: 14px;
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: ${({ theme }) => theme.colors.common.white};
  border: 1px solid ${({ theme }) => theme.colors.neutral[400]};
  border-radius: 8px;
  margin-top: 5px;
  box-shadow: ${({ theme }) => theme.dropbox.shadow1};
  z-index: 10;
`;

const DropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.neutral[200]};
  }
`;
