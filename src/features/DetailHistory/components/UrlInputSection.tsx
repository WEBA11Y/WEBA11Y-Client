import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { FiRefreshCw, FiPlus } from "react-icons/fi";

const allUrls = [
  "https://kr.pinterest.com/aa",
  "https://kr.pinterest.com/bb",
  "https://kr.pinterest.com/cc",
  "https://kr.pinterest.com/aa/cc",
  "https://kr.pinterest.com/aa/dd",
  "https://kr.pinterest.com/bb/cc",
];

export default function UrlInputSection() {
  const baseUrl = "https://kr.pinterest.com";
  const [currentUrl, setCurrentUrl] = useState(baseUrl);
  const [search, setSearch] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [filteredList, setFilteredList] = useState<string[]>([]);
  const [previousValidUrl, setPreviousValidUrl] = useState(baseUrl);

  const urlBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        urlBoxRef.current &&
        !urlBoxRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);

        const candidate = search || currentUrl;
        const isExactMatch = allUrls.includes(candidate);
        const isBase = candidate === baseUrl;

        //  정확한 URL
        if (isExactMatch) {
          setCurrentUrl(candidate);
          setPreviousValidUrl(candidate);
          setSearch("");
        }
        // '/'만 덧붙은 baseUrl → baseUrl로 보정
        else if (candidate === `${baseUrl}/`) {
          setCurrentUrl(baseUrl);
          setPreviousValidUrl(baseUrl);
          setSearch("");
        }
        //  '/' 끝에 붙었고, 잘라내면 유효한 URL일 경우
        else if (
          candidate.endsWith("/") &&
          allUrls.includes(candidate.slice(0, -1))
        ) {
          const cleaned = candidate.slice(0, -1);
          setCurrentUrl(cleaned);
          setPreviousValidUrl(cleaned);
          setSearch("");
        }
        // 유효하지 않은 경우
        else if (!isBase) {
          setCurrentUrl(previousValidUrl);
          setSearch("");
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [search, currentUrl, previousValidUrl]);

  const getImmediateChildren = (parentUrl: string, urls: string[]) => {
    const regex = new RegExp(`^${parentUrl}/[^/]+$`);
    return urls.filter((url) => regex.test(url));
  };

  useEffect(() => {
    const list = getImmediateChildren(currentUrl, allUrls).filter((url) =>
      url.includes(search)
    );
    setFilteredList(list);
  }, [currentUrl, search]);

  const handleUrlClick = (url: string) => {
    setPreviousValidUrl(url);
    setCurrentUrl(url);
    setSearch("");
  };
  return (
    <Section>
      <UrlBox ref={urlBoxRef}>
        <UrlInput
          value={search || currentUrl}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const value: string = e.target.value;
            setSearch(value);

            if (currentUrl !== value && currentUrl.startsWith(value)) {
              setCurrentUrl(value);
            }
          }}
          onClick={() => setIsDropdownOpen(true)}
        />
        <RefreshButton>
          <FiRefreshCw size={18} />
        </RefreshButton>
        {isDropdownOpen && filteredList.length > 0 && (
          <Dropdown>
            {filteredList.map((url: string) => (
              <DropdownItem
                key={url}
                onClick={() => {
                  handleUrlClick(url);
                  setIsDropdownOpen(false);
                }}
              >
                {url}
              </DropdownItem>
            ))}
          </Dropdown>
        )}
      </UrlBox>

      <AddButton>
        <FiPlus size={16} /> ADD SUB URL
      </AddButton>
    </Section>
  );
}

const Section = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-top: 1rem;
  position: relative;
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
  position: relative;
`;

const UrlInput = styled.input`
  border: none;
  outline: none;
  font-size: 1rem;
  font-weight: 600;
  width: 100%;
`;

const RefreshButton = styled.button`
  background: none;
  border: none;
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

const Dropdown = styled.div`
  position: absolute;
  top: 110%;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.common.white};
  border-radius: 1rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  z-index: 10;
  max-height: 200px;
  overflow-y: auto;
`;

const DropdownItem = styled.div`
  padding: 0.5rem 0;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.neutral[100]};
  }
`;
