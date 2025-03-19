import { ThemeProvider } from "styled-components";
import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "./api/queryClient";
import Router from "./routes/index";
import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";

export default function App() {
  console.log("Current Mode:", import.meta.env.MODE);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
        <button
          onClick={() => {
            throw new Error("첫번째");
          }}
        >
          Break the world
        </button>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
