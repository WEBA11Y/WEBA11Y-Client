import { ThemeProvider } from "styled-components";
import { QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { queryClient } from "./api/queryClient";
import Router from "./routes/index";
import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ToastContainer />
        <Router />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
