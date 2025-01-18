import { ThemeProvider } from "styled-components";

import Router from "./routes/index";
import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
      main
    </ThemeProvider>
  );
}
