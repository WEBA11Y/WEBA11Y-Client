import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    font-size: 16px;  
    font-family: 'Arial', sans-serif;  
    background-color: ${(props) => props.theme.backgroundColor || "#ffffff"};  
    color: ${(props) => props.theme.textColor || "#000000"}; 
    line-height: 1.5;  
    -webkit-font-smoothing: antialiased;  
    -moz-osx-font-smoothing: grayscale;
  }

  /* 링크 스타일 */
  a {
    text-decoration: none;  
    color: inherit; 
    cursor: pointer;
  }

  /* 리스트 스타일 */
  ul, ol {
    list-style: none; 
  }

  /* 이미지 스타일 */
  img {
    max-width: 100%;
    height: auto;  
    display: block; 
  }

  /* 버튼 초기화 */
  button {
    all: unset;  
    cursor: pointer;
  }

  /* 인풋 및 텍스트 에어리어 초기화 */
  input, textarea {
    all: unset;
    font-family: inherit;
  }
`;

export default GlobalStyle;
