import { ThemeProvider } from "styled-components";
import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "./api/queryClient";
import Router from "./routes/index";
import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
        <button
          onClick={() => {
            throw new Error("This is your first error!");
          }}
        >
          Break the world
        </button>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
