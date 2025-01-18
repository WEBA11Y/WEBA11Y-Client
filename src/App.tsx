import { ThemeProvider } from "styled-components";

import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      main
    </ThemeProvider>
  );
}
