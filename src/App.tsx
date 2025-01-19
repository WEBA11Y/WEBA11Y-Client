import { ThemeProvider } from "styled-components";

import Router from "./routes/index";
import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import RootLayout from "./layouts/RootLayout";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RootLayout />
      <GlobalStyle />
      <Router />
      main
    </ThemeProvider>
  );
}
